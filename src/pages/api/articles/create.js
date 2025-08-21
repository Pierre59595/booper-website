// src/pages/api/articles/create.js
import { promises as fs } from 'fs';
import path from 'path';

function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Validation des données requises
    const requiredFields = ['title', 'content'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return new Response(
          JSON.stringify({ error: `Le champ '${field}' est requis` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Génération des métadonnées
    const id = generateId();
    const slug = data.slug || generateSlug(data.title);
    const now = new Date().toISOString();
    
    // Structure de l'article
    const article = {
      id,
      title: data.title,
      slug,
      excerpt: data.excerpt || data.content.substring(0, 160) + '...',
      content: data.content,
      author: data.author || 'Admin',
      publishedAt: data.publishedAt || now,
      updatedAt: now,
      tags: data.tags || [],
      featured: data.featured || false,
      seo: {
        metaTitle: data.seo?.metaTitle || data.title,
        metaDescription: data.seo?.metaDescription || (data.excerpt || data.content.substring(0, 160)),
        keywords: data.seo?.keywords || data.tags || [],
        ogImage: data.seo?.ogImage || null
      },
      status: data.status || 'published'
    };

    // Sauvegarde dans un index JSON
    const contentDir = path.join(process.cwd(), 'src', 'content', 'articles');
    await fs.mkdir(contentDir, { recursive: true });
    
    const indexPath = path.join(contentDir, 'index.json');
    let articles = [];
    
    try {
      const indexContent = await fs.readFile(indexPath, 'utf8');
      articles = JSON.parse(indexContent);
    } catch (error) {
      // Le fichier n'existe pas encore
    }
    
    articles.push(article);
    await fs.writeFile(indexPath, JSON.stringify(articles, null, 2), 'utf8');

    return new Response(
      JSON.stringify({ 
        success: true, 
        article: {
          id: article.id,
          title: article.title,
          slug: article.slug,
          publishedAt: article.publishedAt
        }
      }),
      { 
        status: 201, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur interne du serveur' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}