# 🍔 Smash & Co — Site Web Restaurant

Site web complet pour restaurant burger, prêt à déployer sur **GitHub Pages**.

## 📁 Structure des fichiers

```
restaurant-burger/
├── index.html       ← Page principale
├── style.css        ← Tous les styles
├── script.js        ← Interactivité
└── README.md        ← Ce fichier
```

## 🚀 Déploiement sur GitHub Pages (étape par étape)

### 1. Créer un compte GitHub
Rendez-vous sur [github.com](https://github.com) et créez un compte gratuit.

### 2. Créer un nouveau dépôt
- Cliquez sur le bouton **"New"** (ou **"+"** en haut à droite)
- Nommez-le `restaurant-burger` (ou le nom de votre choix)
- Choisissez **Public**
- Cliquez **"Create repository"**

### 3. Uploader les fichiers
- Dans votre nouveau dépôt, cliquez sur **"uploading an existing file"**
- Glissez-déposez les 3 fichiers : `index.html`, `style.css`, `script.js`
- Cliquez **"Commit changes"**

### 4. Activer GitHub Pages
- Allez dans **Settings** (onglet en haut du dépôt)
- Dans le menu gauche, cliquez **"Pages"**
- Sous *"Source"*, sélectionnez **"Deploy from a branch"**
- Choisissez la branche **"main"** et le dossier **"/ (root)"**
- Cliquez **"Save"**

### 5. Votre site est en ligne ! 🎉
Après 1-2 minutes, votre site sera accessible à :
```
https://VOTRE-USERNAME.github.io/restaurant-burger/
```

---

## ✏️ Personnaliser le contenu

### Changer le nom du restaurant
Dans `index.html`, remplacez **"SMASH & CO"** par le vrai nom.

### Changer l'adresse et les horaires
Cherchez `18 rue de la Roquette` et `Paris 11e` dans `index.html` et remplacez.

### Changer les prix du menu
Cherchez `14€`, `17€`, etc. dans `index.html` et mettez vos vrais prix.

### Changer les couleurs
Dans `style.css`, modifiez les variables CSS au début du fichier :
```css
:root {
  --accent: #e8522a;    /* Couleur principale (orange-rouge) */
  --accent2: #f5a623;   /* Couleur secondaire (jaune) */
  --bg: #0e0c0a;        /* Fond principal */
}
```

### Ajouter de vraies photos
Remplacez les emojis dans `.g1`, `.g2`... par des vraies images :
```html
<!-- Dans index.html, remplacez la div g-item par : -->
<div class="g-item g1" style="background-image: url('photo1.jpg'); background-size: cover;"></div>
```

### Connecter le formulaire à un vrai service
Pour recevoir les réservations par email, utilisez **Formspree** (gratuit) :
1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un formulaire et copiez l'action
3. Dans `index.html`, ajoutez `action="https://formspree.io/f/VOTRE_ID"` à la balise `<form>`
4. Supprimez `onsubmit="submitResa(event)"` de la balise `<form>`

---

## 📱 Le site est responsive
Il s'adapte automatiquement aux mobiles, tablettes et ordinateurs.

## 🎨 Technologies utilisées
- HTML5 / CSS3 / JavaScript vanilla
- Google Fonts (Bebas Neue, DM Sans, Playfair Display)
- Aucune dépendance externe (pas de framework)
