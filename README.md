# Booper - Site Web SaaS

Site web moderne pour Booper, expert en solutions de pricing et optimisation des marges.

## 🚀 Technologies

- **Framework**: Astro 4.0
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Language**: TypeScript/JavaScript

## 📁 Structure du projet

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro          # Homepage
│       ├── solutions.astro      # Solutions
│       ├── customers.astro      # Customers
│       ├── ressources.astro     # Ressources
│       ├── formation.astro      # Formation
│       ├── about.astro          # À propos
│       └── contact.astro        # Contact
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠 Installation

1. **Cloner le repository**
```bash
git clone [URL_DU_REPO]
cd booper-website
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build le site pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run astro` - CLI Astro

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Via Vercel CLI**
```bash
npm i -g vercel
vercel --prod
```

2. **Via Git Integration**
- Connecter le repository GitHub à Vercel
- Le déploiement se fait automatiquement sur chaque push

### GitHub (pour pousser le code)

1. **Initialiser le repository Git**
```bash
git init
git add .
git commit -m "Initial commit: Booper SaaS website"
```

2. **Créer un repository sur GitHub**
- Aller sur GitHub.com
- Créer un nouveau repository "booper-website"
- Suivre les instructions pour pousser le code

3. **Pousser le code**
```bash
git remote add origin https://github.com/VOTRE_USERNAME/booper-website.git
git branch -M main
git push -u origin main
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.mjs`:
- **Primary**: Bleu (utilisé pour Booper brand)
- **Secondary**: Vert (accents)
- **Orange**: Actions secondaires
- **Purple**: Éléments spéciaux

### Contenu
- Modifier les textes directement dans les fichiers `.astro`
- Les images sont à placer dans le dossier `public/`
- Les logos clients peuvent être remplacés dans la section testimonials

### Navigation
Modifier la navigation dans `src/components/Navigation.astro`

## 📝 Pages créées

1. **Homepage** (`/`) - Présentation générale, hero section, features
2. **Solutions** (`/solutions`) - Détail des solutions de pricing
3. **Customers** (`/customers`) - Témoignages et success stories
4. **Ressources** (`/ressources`) - Guides, webinars, études de cas
5. **Formation** (`/formation`) - Programmes de formation certifiants
6. **À propos** (`/about`) - Histoire, équipe, valeurs de l'entreprise
7. **Contact** (`/contact`) - Formulaires de contact et informations

## 🔧 Configuration

### Analytics
Pour ajouter Google Analytics, modifier `src/layouts/BaseLayout.astro`

### Formulaires
Les formulaires sont actuellement avec validation basique JavaScript.
Pour un traitement côté serveur, intégrer avec:
- Netlify Forms
- Formspree
- API custom

### SEO
- Meta descriptions configurées pour chaque page
- Structure de données pour le SEO local
- Sitemap généré automatiquement par Astro

## 📱 Responsive Design

Le site est entièrement responsive avec:
- Mobile-first approach
- Breakpoints Tailwind CSS standard
- Navigation mobile optimisée
- Images et grilles adaptatives

## 🚨 Notes importantes

- Les images des logos clients sont des placeholders - remplacer par les vrais logos
- Les coordonnées de contact sont des exemples - mettre les vraies informations
- Les formulaires nécessitent une intégration backend pour fonctionner
- Optimiser les images avant mise en production

## 📞 Support

Pour toute question ou modification, contacter l'équipe de développement.

---

**Booper** - Optimisez votre performance Prix et Marge