# 🍽️ Tila's Restaurant — Site Web Officiel

Site web complet pour **Tila's Restaurant**, situé Rue de la Gare 2, 2300 La Chaux-de-Fonds, Suisse.

## 📁 Structure des fichiers

```
tilas-restaurant/
├── index.html          ← Page d'accueil
├── menu.html           ← Menu complet (entrées, plats, desserts, boissons, midi)
├── reservation.html    ← Réservation de table (plan de salle interactif)
├── commander.html      ← Commande en ligne + livraison + panier complet
├── contact.html        ← Contact, horaires, carte, formulaire + FAQ
├── css/
│   └── style.css       ← Feuille de style globale partagée
└── js/
    ├── data.js          ← Données menu, tables, fonctions panier (localStorage)
    └── nav.js           ← Navigation et footer partagés
```

## 🚀 Déployer sur GitHub Pages

1. **Créez un dépôt GitHub** (ex: `tilas-restaurant`)
2. **Uploadez tous les fichiers** en conservant exactement la structure ci-dessus
3. Dans les **Settings** du dépôt → **Pages** → Source : `main` / `root`
4. Votre site sera accessible à : `https://votre-username.github.io/tilas-restaurant/`

## ✅ Fonctionnalités incluses

| Page | Fonctionnalités |
|------|----------------|
| **Accueil** | Hero animé, spécialités, avis clients, section about, CTA |
| **Menu** | 42 plats en 5 catégories, tags, prix CHF, ajout au panier |
| **Réservation** | Plan de salle 28 tables, formulaire complet, modal confirmation |
| **Commander** | Menu complet, panier localStorage, checkout 4 étapes |
| **Checkout** | Adresse livraison, 4 modes de paiement (CB/TWINT/Espèces/PostFinance) |
| **Confirmation** | Numéro de commande, récapitulatif, email simulé |
| **Contact** | Carte SVG, horaires, formulaire, FAQ accordéon |

## 🛒 Système de panier

Le panier est persisté dans `localStorage` — il survit à la navigation entre les pages.

## 📧 Envoi d'emails (à configurer)

Pour l'envoi réel d'emails de confirmation, intégrez un service comme :
- **Formspree** (gratuit) : remplacez le `submitContactForm()` dans `contact.html`
- **EmailJS** : fonctionne 100% côté front-end, pas besoin de backend
- **Netlify Forms** si vous déployez sur Netlify

### Exemple avec EmailJS (commandes) :
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init("VOTRE_USER_ID");
  // Dans confirmOrder() :
  emailjs.send("service_id", "template_id", {
    to_email: deliveryData.email,
    order_num: refNum,
    total: total
  });
</script>
```

## 🎨 Personnalisation

### Modifier les couleurs (css/style.css) :
```css
:root {
  --gold: #C9A84C;   /* Couleur dorée principale */
  --dark: #1A1208;   /* Fond sombre */
  --cream: #FFF8EE;  /* Fond clair */
}
```

### Ajouter/modifier des plats (js/data.js) :
```js
{ id:43, name:"Nom du plat", emoji:"🍲", price:24.50, 
  desc:"Description du plat", tags:["Popular"] }
```

### Modifier les infos du restaurant :
- **Adresse, téléphone** : chercher et remplacer dans tous les fichiers
- **Horaires** : `contact.html` et `reservation.html`
- **Tables** : tableau `TABLE_DATA` dans `js/data.js`

## 📞 Informations par défaut

| Info | Valeur |
|------|--------|
| Adresse | Rue de la Gare 2, 2300 La Chaux-de-Fonds |
| Téléphone | +41 32 925 00 00 |
| Email | info@tilasrestaurant.ch |
| Horaires | Mar–Ven 11h30–22h30 · Sam 11h30–23h · Dim 11h30–22h · Lun fermé |
| Livraison | CHF 5.00 · Min CHF 25.00 · 35–50 min |
| Tables | 28 tables (T1–T28) |

---
*Site créé avec HTML5, CSS3 et JavaScript vanilla — aucune dépendance externe requise*
