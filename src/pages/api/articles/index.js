// src/pages/api/articles/index.js
import { promises as fs } from 'fs';
import path from 'path';

async function getArticles() {
  try {
    const contentDir = path.join(process.cwd(), 'src', 'content', 'articles');
    const indexPath = path.join(contentDir, 'index.json');
    
    const indexContent = await fs.readFile(indexPath, 'utf8');
    const articles = JSON.parse(indexContent);
    
    // Filtrer uniquement les articles publiés et les trier par date
    return articles
      .filter(article => article.status === 'published')
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      
  } catch (error) {
    console.error('Erreur lors de la lecture des articles:', error);
    return [];
  }
}

export async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const tag = searchParams.get('tag');
    const featured = searchParams.get('featured') === 'true';
    
    let articles = await getArticles();
    
    // Filtrer par tag si spécifié
    if (tag) {
      articles = articles.filter(article => 
        article.tags.includes(tag)
      );
    }
    
    // Filtrer par featured si spécifié
    if (featured) {
      articles = articles.filter(article => article.featured);
    }
    
    // Pagination
    const total = articles.length;
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const paginatedArticles = articles.slice(offset, offset + limit);
    
    // Réponse avec métadonnées de pagination
    const response = {
      articles: paginatedArticles,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
    
    return new Response(
      JSON.stringify(response),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300'
        } 
      }
    );
    
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur interne du serveur' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}