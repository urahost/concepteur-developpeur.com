# CDA Valenciennes P2 - Documentation

Documentation complète pour la formation **Concepteur Développeur d'Applications** créée par la promotion **CDA-Valenciennes-P2**.

Cette plateforme de documentation moderne et multilingue a été conçue pour accompagner les étudiants dans leur apprentissage du développement d'applications.

<br/>

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le repository
git clone https://github.com/urahost/concepteur-developpeur.com
cd concepteur-developpeur.com

# Installer les dépendances (utiliser --force si nécessaire pour React 19)
npm install --force

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📖 Structure du projet

### Langues supportées
- 🇫🇷 Français (fr)
- 🇬🇧 Anglais (en) 
- 🇯🇵 Japonais (ja)

### Organisation du contenu

```
contents/
├── docs/           # Documentation technique
│   ├── fr/         # Contenu français
│   ├── en/         # Contenu anglais
│   └── ja/         # Contenu japonais
└── blogs/          # Articles de blog
    ├── fr/
    ├── en/
    └── ja/
```

### Fichiers de traduction
```
dictionaries/
├── fr.json         # Traductions françaises
├── en.json         # Traductions anglaises
└── ja.json         # Traductions japonaises
```

## ✨ Fonctionnalités

| **Fonctionnalité**            | **Description**                                    |
|--------------------------------|---------------------------------------------------|
| 🌐 **Multilingue**            | Support complet FR/EN/JA avec URLs localisées    |
| 📝 **Support MDX**            | Documentation interactive avec composants React   |
| 🗂️ **Pages imbriquées**       | Organisation hiérarchique du contenu             |
| 📰 **Section Blog**           | Articles et actualités de la formation            |
| 📑 **Table des matières**     | Navigation automatique dans les pages            |
| 🔍 **Recherche**              | Recherche intégrée dans toute la documentation   |
| 🎨 **Mode sombre/clair**      | Thème adaptatif selon les préférences            |
| 📱 **Design responsive**      | Optimisé pour tous les appareils                 |
| ⚡ **Génération statique**    | Performance optimale avec Next.js SSG           |
| 🔧 **Composants personnalisés** | Éléments interactifs dans le Markdown          |

## 🛠️ Développement

### Commandes disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
```

### Ajouter du contenu

1. **Nouvelle page de documentation :**
   ```bash
   # Créer le fichier MDX
   contents/docs/fr/nouveau-chapitre/ma-page/index.mdx
   
   # Mettre à jour la navigation
   lib/routes-config.ts
   
   # Ajouter les traductions
   dictionaries/fr.json
   ```

2. **Nouvel article de blog :**
   ```bash
   contents/blogs/fr/mon-article.mdx
   ```

### Structure d'un fichier MDX

```mdx
---
title: "Titre de la page"
description: "Description pour le SEO"
---

# Mon contenu

Utilisez les composants personnalisés :

<Note>
Ceci est une note importante !
</Note>

<Tabs>
  <TabsList>
    <TabsTrigger value="js">JavaScript</TabsTrigger>
    <TabsTrigger value="ts">TypeScript</TabsTrigger>
  </TabsList>
  <TabsContent value="js">
    ```javascript
    console.log("Hello World!");
    ```
  </TabsContent>
</Tabs>
```

## 🎯 À propos du projet

Cette documentation a été créée pour accompagner la formation **Concepteur Développeur d'Applications** de la promotion **CDA-Valenciennes-P2**. Elle regroupe :

- 📚 **Cours et tutoriels** techniques
- 🛠️ **Guides pratiques** de développement  
- 💡 **Bonnes pratiques** et méthodologies
- 📝 **Ressources** et références utiles
- 🗞️ **Actualités** de la formation

## 🚀 Déploiement

### Déploiement sur Vercel (recommandé)

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déployez !

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/urahost/concepteur-developpeur.com)

### Autres plateformes

Le projet peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify  
- Railway
- Render

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/ma-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout de ma fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request

## 👥 Équipe

**Créé par :** [BourezBastien](https://github.com/BourezBastien) - Promotion CDA-Valenciennes-P2

## 📄 Licence

Ce projet est sous licence libre. Vous pouvez l'utiliser, le modifier et le distribuer librement.

## 🙏 Crédits

Cette documentation est basée sur la template [AriaDocs](https://github.com/nisabmohd/Aria-Docs) développée par [nisabmohd](https://github.com/nisabmohd). 

Merci à l'auteur original pour avoir créé cette excellente base de travail ! 🎉

---

**📧 Contact :** Pour toute question concernant cette documentation ou la formation CDA-Valenciennes-P2, n'hésitez pas à ouvrir une issue sur ce repository.