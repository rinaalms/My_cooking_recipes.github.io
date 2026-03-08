#  CulinArt — L'art de sublimer la cuisine

> *Des recettes élégantes, des saveurs authentiques et des inspirations venues du monde entier.*

Blog culinaire full front-end créé par **Darina HOUNHOUI**. Chaque recette raconte une histoire, chaque astuce révèle un secret de chef.

---

##  Aperçu

![CulinArt Preview](images/logo.png)

🔗 **Site en ligne :** [rinaalms.github.io/My_cooking_recipes.github.io](https://rinaalms.github.io/My_cooking_recipes.github.io/index.html)

---

##  Pages du site

| Page | Fichier | Description |
|------|---------|-------------|
| Accueil | `index.html` | Hero split, section histoire bento, philosophie, auteures |
| Recettes | `recettes.html` | 124 recettes du monde entier, recherche, pagination |
| Astuces | `blog.html` | 1000+ astuces filtrables, toggle grille/liste |
| Contact | `contact.html` | Formulaire + fiches de contact des auteures |
| Connexion | `login.html` | Authentification avec visuel immersif |
| Inscription | `signup.html` | Création de compte avec indicateur de force du mot de passe |
| Détail recette | `recipe.html` | Ingrédients + étapes de préparation |

---

##  Design & Fonctionnalités

### Palette de couleurs
-  **Orange** `#f97316` — couleur principale
-  **Orange profond** `#c2410c` — dégradés et hovers
-  **Or chaud** `#fbbf24` — accents premium, stats, logo
-  **Noirs chauds** — fonds ambrés profonds

### Fonctionnalités clés
-  **Mode sombre / clair** — bouton toggle sur toutes les pages, préférence mémorisée
-  **100% responsive** — mobile, tablette, grand écran
-  **Carousel d'images** — hero animé avec swipe tactile
-  **Recherche & filtres** — astuces filtrables par catégorie en temps réel
-  **Animations au scroll** — révélations fluides des sections
-  **Glassmorphism** — cartes en verre dépoli sur fond sombre
-  **Bento layout** — mise en page éditoriale pour la section Histoire

### Technologies
```
HTML5  ·  CSS3 (variables, grid, flexbox, glassmorphism)  ·  JavaScript vanilla
```
Aucun framework, aucune dépendance — 100% natif.

---

##  Structure du projet

```
My_Cooking_Recipes/
├── index.html              # Accueil
├── blog.html               # Astuces
├── recettes.html           # Recettes
├── contact.html            # Contact
├── login.html              # Connexion
├── signup.html             # Inscription
├── recipe.html             # Détail d'une recette
│
├── assets/
│   ├── css/
│   │   ├── theme.css           # Système de thèmes (dark/light) + palette orange
│   │   ├── culinart-main.css   # Styles globaux, header, footer, composants
│   │   ├── home.css            # Styles page accueil
│   │   ├── blog.css            # Styles page astuces
│   │   ├── contact.css         # Styles page contact
│   │   └── auth.css            # Styles pages connexion & inscription
│   │
│   └── js/
│       ├── culinart-main.js    # Carousel, burger menu, scroll reveal
│       ├── theme-toggle.js     # Logique toggle sombre/clair
│       ├── home.js             # Carousel accueil + animations
│       ├── recettes.js         # Données des 124 recettes
│       └── tips_data.js        # Données des 1000+ astuces
│
└── images/                 # 142 photos — recettes, portraits, icônes réseaux
```

---

##  Lancer le projet en local

Aucune installation requise. Il suffit d'ouvrir `index.html` dans un navigateur :

```bash
# Cloner le dépôt
git clone https://github.com/rinaalms/My_Cooking_Recipes.git

# Ouvrir dans le navigateur
cd My_Cooking_Recipes
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

>  Pour un meilleur rendu (polices Google Fonts), une connexion internet est recommandée.

---

##  Les auteures

<table>
  <tr>
    <td align="center">
      <b>Marie-Immaculée GNONLONFOUN</b><br>
      Chef & photographe culinaire<br>
      📍 Le Mée-sur-Seine, France<br>
      <a href="https://www.instagram.com/glfmaria/">Instagram</a> ·
      <a href="https://www.tiktok.com/@m_a_r_i_aglf_2">TikTok</a> ·
      <a href="https://www.linkedin.com/in/immaglf">LinkedIn</a>
    </td>
    <td align="center">
      <b>Darina HOUNHOUI</b><br>
      Créatrice culinaire & rédactrice<br>
      📍 Cotonou, Bénin<br>
      <a href="https://www.instagram.com/rinaaaa_alms/">Instagram</a> ·
      <a href="https://www.tiktok.com/@rinaaaa_alms">TikTok</a> ·
      <a href="https://www.linkedin.com/in/darina-hounhoui-4a48a2372">LinkedIn</a>
    </td>
  </tr>
</table>

---

## 📝 Licence

Ce projet est à usage personnel et éducatif.  
© 2025 CulinArt — Fait avec passion par Imma & Dari 
