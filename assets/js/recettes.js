const recipes = [
  {
    title: "Amiwo",
    description: "Pâte de maïs rouge cuite avec oignons et huile de palme, servie avec poisson ou poulet.",
    image: "images/amiwo.jpeg",
    ingredients: [
      "250g de farine de maïs",
      "1 oignon",
      "2 cuillères à soupe d'huile de palme",
      "1 piment (optionnel)",
      "Sel",
      "Poisson ou poulet pour accompagner"
    ],
    preparation: [
      "Mélanger la farine de maïs avec de l’eau pour obtenir une pâte lisse.",
      "Faire chauffer l’huile de palme et y faire revenir l’oignon émincé.",
      "Ajouter la pâte de maïs et cuire à feu doux en remuant constamment.",
      "Assaisonner avec sel et piment selon goût.",
      "Servir chaud avec poisson ou poulet."
    ]
  },
  {
    title: "Akassa",
    description: "Pâte fermentée de maïs ou manioc, servie avec sauce épicée à base de poisson ou viande.",
    image: "images/akassa.jpeg",
    ingredients: [
      "250g de farine de maïs fermentée",
      "Eau",
      "Sel",
      "Sauce épicée au poisson ou viande"
    ],
    preparation: [
      "Préparer la pâte fermentée en mélangeant farine et eau.",
      "Cuire la pâte à feu moyen en remuant jusqu’à consistance lisse.",
      "Assaisonner avec sel et servir avec la sauce épicée."
    ]
  },
  {
    title: "Gboma",
    description: "Feuilles d’épinard africain sautées avec huile de palme, oignons et poisson ou viande.",
    image: "images/gboma.jpeg",
    ingredients: [
      "200g de feuilles d’épinard africain",
      "1 oignon",
      "2 cuillères à soupe d’huile de palme",
      "100g de poisson ou viande",
      "Sel et poivre"
    ],
    preparation: [
      "Faire chauffer l’huile et faire revenir l’oignon.",
      "Ajouter les feuilles d’épinard et le poisson/viande.",
      "Assaisonner avec sel et poivre.",
      "Cuire 10-15 minutes jusqu’à tendreté.",
      "Servir chaud."
    ]
  },
  {
    title: "Kuli-kuli",
    description: "Snack à base d’arachides grillées et moulues, frit pour obtenir des bouchées croustillantes.",
    image: "images/kuli-kuli.webp",
    ingredients: [
      "200g d’arachides",
      "Huile pour friture",
      "Sel"
    ],
    preparation: [
      "Griller les arachides puis les moudre finement.",
      "Former des petites boules ou bâtonnets.",
      "Frire dans l’huile chaude jusqu’à dorure.",
      "Égoutter et saupoudrer de sel.",
      "Servir en snack."
    ]
  },
  {
    title: "Fufu béninois",
    description: "Pâte élastique de manioc ou igname, servie avec sauces locales.",
    image: "images/fufu.webp",
    ingredients: [
      "250g de manioc ou igname",
      "Eau",
      "Sel",
      "Sauce locale au choix"
    ],
    preparation: [
      "Cuire le manioc ou igname jusqu’à tendreté.",
      "Écraser ou mixer pour obtenir une pâte lisse et élastique.",
      "Servir chaud avec la sauce de votre choix."
    ]
  },
  {
    title: "Riz Gras",
    description: "Riz cuit avec tomates, oignons, huile de palme et épices, souvent avec poulet ou poisson.",
    image: "images/riz-gras.jpg",
    ingredients: [
      "200g de riz",
      "150g de tomates",
      "1 oignon",
      "2 cuillères à soupe d’huile de palme",
      "100g de poulet ou poisson",
      "Sel et épices"
    ],
    preparation: [
      "Faire revenir l’oignon dans l’huile de palme.",
      "Ajouter le poulet ou poisson et cuire 5 minutes.",
      "Incorporer les tomates hachées et assaisonner.",
      "Ajouter le riz et couvrir d’eau.",
      "Cuire 20 minutes à feu doux.",
      "Servir chaud."
    ]
  },
  {
    title: "Sauce Gombo",
    description: "Sauce à base d’okra mijotée avec viande ou poisson et épices.",
    image: "images/sauce-gombo.jpg",
    ingredients: [
      "200g de gombo",
      "100g de viande ou poisson",
      "1 oignon",
      "2 cuillères à soupe d’huile de palme",
      "Sel et épices"
    ],
    preparation: [
      "Faire revenir l’oignon dans l’huile.",
      "Ajouter viande ou poisson et cuire 5 minutes.",
      "Incorporer le gombo haché et assaisonner.",
      "Cuire 15-20 minutes jusqu’à tendreté.",
      "Servir chaud avec riz ou pâte."
    ]
  },
  {
    title: "Ablo",
    description: "Pain moelleux à base de farine de maïs, légèrement sucré.",
    image: "images/ablo.jpg",
    ingredients: [
      "200g de farine de maïs",
      "150ml d’eau",
      "1 cuillère à soupe de sucre",
      "1 pincée de sel"
    ],
    preparation: [
      "Mélanger tous les ingrédients pour obtenir une pâte lisse.",
      "Verser dans des moules individuels.",
      "Cuire à la vapeur 20-25 minutes.",
      "Démouler et servir chaud ou tiède."
    ]
  },
  {
    title: "Jollof Rice",
    description: "Riz épicé ouest-africain avec tomates, poivrons et viande ou poisson.",
    image: "images/jollof-rice.jpg",
    ingredients: [
      "250g de riz",
      "200g de tomates",
      "1 oignon",
      "1 poivron",
      "200g de poulet ou poisson",
      "2 cuillères à soupe d’huile",
      "Épices : sel, poivre, curry, thym"
    ],
    preparation: [
      "Faire revenir l’oignon et poivron dans l’huile.",
      "Ajouter poulet ou poisson et cuire 5 minutes.",
      "Ajouter tomates et laisser mijoter 10 minutes.",
      "Incorporer riz et 500ml d’eau, assaisonner.",
      "Cuire 20 minutes à feu doux, servir chaud."
    ]
  },
  {
    title: "Poulet Yassa",
    description: "Poulet mariné au citron, oignons et moutarde, mijoté lentement.",
    image: "images/poulet-yassa.jpg",
    ingredients: [
      "1 poulet entier ou morceaux",
      "2 citrons",
      "2 oignons",
      "2 cuillères à soupe de moutarde",
      "1 piment (optionnel)",
      "Huile, sel, poivre"
    ],
    preparation: [
      "Mariner le poulet avec jus de citron, moutarde, sel et poivre 2h.",
      "Faire revenir oignons dans huile jusqu’à dorure.",
      "Ajouter poulet et cuire 10 minutes.",
      "Couvrir et mijoter 25-30 minutes.",
      "Servir chaud avec riz."
    ]
  },
  {
    title: "Tagine d’agneau",
    description: "Ragoût mijoté avec agneau, légumes et épices marocaines.",
    image: "images/tagine-agneau.jpg",
    ingredients: [
      "500g d’agneau",
      "1 oignon",
      "2 carottes",
      "1 courgette",
      "Épices : curcuma, cumin, gingembre",
      "Huile d’olive, sel, poivre",
      "100ml d’eau"
    ],
    preparation: [
      "Faire revenir oignon et agneau dans huile d’olive.",
      "Ajouter épices et cuire 2 minutes.",
      "Incorporer légumes et eau.",
      "Couvrir et mijoter 45 minutes à feu doux.",
      "Servir chaud."
    ]
  },
  {
    title: "Pizza Margherita",
    description: "Pâte fine garnie de sauce tomate, mozzarella et basilic.",
    image: "images/pizza.jpg",
    ingredients: [
      "1 pâte à pizza",
      "100g sauce tomate",
      "150g mozzarella",
      "Basilic frais",
      "Huile d’olive, sel"
    ],
    preparation: [
      "Préchauffer four 220°C.",
      "Étaler pâte sur plaque.",
      "Étaler sauce tomate puis mozzarella.",
      "Cuire 12-15 minutes jusqu’à dorure.",
      "Décorer avec basilic et filet d’huile."
    ]
  },
  {
    title: "Sushi",
    description: "Riz vinaigré roulé avec poisson frais, légumes et algues.",
    image: "images/sushi.jpg",
    ingredients: [
      "200g riz à sushi",
      "2 cuillères vinaigre de riz",
      "Feuilles de nori",
      "Poisson frais",
      "Concombre, avocat",
      "Sel, sucre"
    ],
    preparation: [
      "Cuire riz et assaisonner vinaigre, sel, sucre.",
      "Étaler riz sur nori, ajouter poisson et légumes.",
      "Rouler fermement avec tapis à sushi.",
      "Couper en tranches et servir avec soja."
    ]
  },
  {
    title: "Spaghetti Bolognese",
    description: "Pâtes italiennes avec sauce tomate et viande hachée.",
    image: "images/spaghetti.jpg",
    ingredients: [
      "200g spaghetti",
      "150g viande hachée",
      "100g sauce tomate",
      "1 oignon",
      "Huile, sel, poivre",
      "Herbes italiennes"
    ],
    preparation: [
      "Cuire spaghetti selon instructions.",
      "Faire revenir oignon et viande dans huile.",
      "Ajouter sauce tomate et herbes, cuire 10 minutes.",
      "Servir spaghetti avec sauce."
    ]
  },
  {
    title: "Couscous",
    description: "Semoule accompagnée de légumes et viande ou poisson, parfumée aux épices.",
    image: "images/couscous.jpg",
    ingredients: [
      "200g semoule",
      "Légumes variés",
      "200g viande ou poisson",
      "Épices : curcuma, cumin",
      "Huile, sel"
    ],
    preparation: [
      "Cuire légumes et viande avec épices.",
      "Cuire semoule à la vapeur selon instructions.",
      "Servir semoule avec sauce et légumes."
    ]
  },
  {
    title: "Salade Niçoise",
    description: "Salade méditerranéenne avec thon, œufs, olives et légumes frais.",
    image: "images/salade-niçoise.jpeg",
    ingredients: [
      "Laitue",
      "Tomates, poivrons",
      "100g thon",
      "2 œufs durs",
      "Olives, huile d’olive, sel, poivre"
    ],
    preparation: [
      "Couper légumes et disposer sur assiette.",
      "Ajouter thon et œufs tranchés.",
      "Assaisonner avec huile d’olive, sel et poivre.",
      "Servir frais."
    ]
  },
  {
    title: "Poulet rôti",
    description: "Poulet entier rôti au four avec herbes et épices.",
    image: "images/poulet-roti.jpeg",
    ingredients: [
      "1 poulet entier",
      "Huile d’olive",
      "Herbes de Provence",
      "Sel et poivre"
    ],
    preparation: [
      "Préchauffer four 200°C.",
      "Assaisonner poulet avec huile et herbes.",
      "Rôtir 1h15 en arrosant régulièrement.",
      "Servir chaud avec légumes."
    ]
  },
  {
    title: "Mafé",
    description: "Ragoût africain au beurre d’arachide avec viande et légumes.",
    image: "images/mafe.jpeg",
    ingredients: [
      "300g viande",
      "2 cuillères soupe beurre d’arachide",
      "1 oignon",
      "Légumes variés",
      "Huile, sel, poivre"
    ],
    preparation: [
      "Faire revenir oignon et viande dans huile.",
      "Ajouter légumes et cuire 10 minutes.",
      "Incorporer beurre d’arachide et 200ml d’eau.",
      "Couvrir et mijoter 20 minutes.",
      "Servir chaud avec riz."
    ]
  },
  {
    title: "Poulet DG",
    description: "Plat camerounais à base de poulet sauté avec bananes plantains et légumes.",
    image: "images/poulet.jpeg",
    ingredients: [
      "1 poulet entier",
      "2 bananes plantains",
      "1 oignon",
      "Poivrons",
      "Huile, sel, poivre"
    ],
    preparation: [
      "Découper poulet et le faire revenir dans huile.",
      "Ajouter oignons et poivrons, cuire 5 minutes.",
      "Ajouter bananes plantains en rondelles, cuire 10 minutes.",
      "Assaisonner avec sel et poivre.",
      "Servir chaud."
    ]
  },
  {
    title: "Efo Riro",
    description: "Ragoût nigérian de légumes verts avec viande et épices.",
    image: "images/efo-riro.jpeg",
    ingredients: [
      "200g légumes verts (épinards, feuilles de manioc)",
      "150g viande ou poisson",
      "1 oignon",
      "2 cuillères à soupe huile de palme",
      "Épices, sel, poivre"
    ],
    preparation: [
      "Faire revenir oignon dans huile.",
      "Ajouter viande/poisson et cuire 5 minutes.",
      "Incorporer légumes et assaisonner.",
      "Cuire 15 minutes à feu moyen.",
      "Servir chaud avec riz ou fufu."
    ]
  },
  {
    title: "Boulettes de manioc",
    description: "Boulettes faites à base de manioc râpé, frites ou cuites à la vapeur.",
    image: "images/boulette-manioc.jpeg",
    ingredients: [
      "250g manioc râpé",
      "Sel",
      "Huile pour friture"
    ],
    preparation: [
      "Assaisonner manioc avec sel.",
      "Former des boulettes.",
      "Cuire à la vapeur ou frire jusqu’à dorure.",
      "Servir chaud."
    ]
  },
  {
    title: "Saka Saka",
    description: "Feuilles de manioc mijotées avec poisson et pâte d’arachide.",
    image: "images/saka-saka.jpeg",
    ingredients: [
      "200g feuilles de manioc",
      "100g poisson fumé",
      "2 cuillères à soupe pâte d’arachide",
      "1 oignon",
      "Huile, sel, poivre"
    ],
    preparation: [
      "Faire revenir oignon et poisson dans huile.",
      "Ajouter feuilles de manioc hachées et pâte d’arachide.",
      "Cuire 20 minutes à feu doux.",
      "Servir avec fufu ou riz."
    ]
  },
  {
    title: "Koki",
    description: "Plat camerounais à base de haricots moulus et cuits à la vapeur dans feuilles de bananier.",
    image: "images/koki.jpeg",
    ingredients: [
      "200g haricots rouges",
      "Feuilles de bananier",
      "Sel",
      "Huile de palme"
    ],
    preparation: [
      "Moudre les haricots en pâte.",
      "Assaisonner avec sel et huile.",
      "Former des portions et envelopper dans feuilles.",
      "Cuire à la vapeur 30-40 minutes.",
      "Servir chaud."
    ]
  },
  {
    title: "Brochettes de poisson",
    description: "Poisson grillé sur brochettes, mariné aux épices locales.",
    image: "images/brochette-poisson.jpeg",
    ingredients: [
      "200g poisson",
      "Épices (piment, paprika, sel)",
      "Huile"
    ],
    preparation: [
      "Découper poisson en cubes.",
      "Mariner avec épices et huile 1h.",
      "Enfiler sur brochettes et griller 10-15 minutes.",
      "Servir chaud."
    ]
  },
  {
    title: "Soupe de poissons",
    description: "Soupe claire avec poissons, légumes et épices.",
    image: "images/soupe-poisson.jpeg",
    ingredients: [
      "200g poisson",
      "1 oignon",
      "2 tomates",
      "Carottes, poireaux",
      "Sel, poivre"
    ],
    preparation: [
      "Faire revenir oignon et tomates.",
      "Ajouter poisson et légumes coupés.",
      "Assaisonner et cuire 15-20 minutes.",
      "Servir chaud."
    ]
  },
  {
    title: "Ragoût de crevettes",
    description: "Crevettes mijotées dans sauce tomate aux épices.",
    image: "images/ragout-crevette.jpeg",
    ingredients: [
      "200g crevettes",
      "1 oignon",
      "2 tomates",
      "Huile, sel, poivre"
    ],
    preparation: [
      "Faire revenir oignon et tomates dans huile.",
      "Ajouter crevettes et assaisonner.",
      "Cuire 10 minutes à feu moyen.",
      "Servir chaud avec riz."
    ]
  },
  {
    title: "Banana fritters",
    description: "Beignets de banane sucrés, croustillants à l’extérieur et moelleux à l’intérieur.",
    image: "images/banana-fritters.jpeg",
    ingredients: [
      "2 bananes mûres",
      "100g farine",
      "50g sucre",
      "Huile pour friture"
    ],
    preparation: [
      "Écraser bananes et mélanger avec farine et sucre.",
      "Former des petites boules.",
      "Frire jusqu’à dorure.",
      "Égoutter et servir chaud."
    ]
  },
  {
    title: "Beignets de manioc",
    description: "Snack africain croustillant à base de manioc râpé et sucré.",
    image: "images/manioc-fritters.jpeg",
    ingredients: [
      "200g manioc râpé",
      "50g sucre",
      "Huile pour friture"
    ],
    preparation: [
      "Mélanger manioc et sucre.",
      "Former des petites boules.",
      "Frire jusqu’à dorure.",
      "Servir chaud."
    ]
  },
  {
    title: "Chinchinga",
    description: "Brochettes de viande assaisonnées à l’africaine, grillées.",
    image: "images/Chinchinga.jpeg",
    ingredients: [
      "200g viande",
      "Épices africaines",
      "Huile"
    ],
    preparation: [
      "Découper viande et mariner avec épices et huile.",
      "Enfiler sur brochettes et griller 10-15 minutes.",
      "Servir chaud."
    ]
  },
  {
    title: "Kedjenou de poulet",
    description: "Poulet mijoté lentement avec légumes, typique de Côte d’Ivoire.",
    image: "images/kedjenou-poulet.jpeg",
    ingredients: [
      "1 poulet",
      "Tomates, poivrons, oignons",
      "Huile, sel, poivre",
      "Épices africaines"
    ],
    preparation: [
      "Faire revenir oignon et poulet dans peu d’huile.",
      "Ajouter légumes et épices.",
      "Couvrir et mijoter 45 minutes à feu doux.",
      "Servir chaud."
    ]
  },
  {
    title: "Thieboudienne",
    description: "Plat sénégalais de riz au poisson avec sauce tomate et légumes.",
    image: "images/thieboudienne.jpeg",
    ingredients: [
      "200g riz",
      "1 poisson entier",
      "Tomates, carottes, choux",
      "Huile, sel, poivre"
    ],
    preparation: [
      "Faire frire poisson légèrement.",
      "Préparer sauce tomate avec légumes et cuire 10 minutes.",
      "Ajouter riz et eau, couvrir et cuire 20 minutes.",
      "Servir chaud."
    ]
  },
  {
    title: "Akpan",
    description: "Dessert béninois à base de maïs fermenté, légèrement sucré et crémeux.",
    image: "images/akpan.jpeg",
    ingredients: [
      "200g maïs fermenté",
      "100ml lait",
      "50g sucre"
    ],
    preparation: [
      "Mélanger maïs fermenté et lait.",
      "Ajouter sucre et bien mélanger.",
      "Servir frais."
    ]
  },
  {
    title: "Gari Foto",
    description: "Plat de gari (farine de manioc) sauté avec sauce tomate et viande ou poisson.",
    image: "images/gari-foto.jpeg",
    ingredients: [
      "200g gari",
      "1 oignon",
      "100g viande ou poisson",
      "Tomates, huile, sel"
    ],
    preparation: [
      "Faire revenir oignon et viande dans huile.",
      "Ajouter tomates et cuire 5 minutes.",
      "Incorporer gari et remuer 5 minutes.",
      "Servir chaud."
    ]
  },
  {
    title: "Soupe Egusi",
    description: "Soupe nigériane aux graines de melon moulues avec légumes et viande.",
    image: "images/egusi-soup.jpeg",
    ingredients: [
      "200g graines de melon moulues",
      "Légumes verts",
      "100g viande",
      "Huile, sel, poivre"
    ],
    preparation: [
      "Faire revenir viande dans huile.",
      "Ajouter graines de melon et légumes.",
      "Assaisonner et cuire 15-20 minutes.",
      "Servir chaud avec fufu."
    ]
  },
  {
    title: "Kokonte",
    description: "Pâte sèche de manioc, servie avec sauce épicée.",
    image: "images/kokonte.jpeg",
    ingredients: [
      "200g farine de manioc",
      "Eau",
      "Sel",
      "Sauce épicée"
    ],
    preparation: [
      "Cuire farine de manioc avec eau jusqu’à consistance ferme.",
      "Assaisonner sel.",
      "Servir avec sauce."
    ]
  },
  {
    title: "Foufou d’igname",
    description: "Pâte élastique d’igname, souvent servie avec soupe ou sauce.",
    image: "images/foufou-igname.jpeg",
    ingredients: [
      "250g igname",
      "Eau",
      "Sel",
      "Sauce de votre choix"
    ],
    preparation: [
      "Cuire igname jusqu’à tendreté.",
      "Écraser pour obtenir pâte lisse.",
      "Servir chaud avec sauce."
    ]
  },
  {
    title: "Sauce d’arachide",
    description: "Sauce africaine crémeuse à base de pâte d’arachide avec viande ou poisson.",
    image: "images/sauce-arachide.jpeg",
    ingredients: [
      "2 cuillères à soupe pâte d’arachide",
      "100g viande ou poisson",
      "Oignon, tomates, huile",
      "Sel, poivre"
    ],
    preparation: [
      "Faire revenir oignon et viande dans huile.",
      "Ajouter tomates et cuire 5 minutes.",
      "Incorporer pâte d’arachide et cuire 10 minutes.",
      "Servir chaud avec riz ou fufu."
    ]
  },
  {
    title: "Ndolé aux crevettes",
    description: "Plat camerounais de feuilles d’amarante avec arachides et crevettes.",
    image: "images/ndole-crevettes.jpeg",
    ingredients: [
      "200g feuilles d’amarante",
      "100g crevettes",
      "50g pâte d’arachide",
      "Oignon, huile, sel, poivre"
    ],
    preparation: [
      "Faire revenir oignon dans huile.",
      "Ajouter crevettes et cuire 5 minutes.",
      "Ajouter feuilles d’amarante et pâte d’arachide.",
      "Assaisonner et mijoter 15-20 minutes.",
      "Servir chaud avec fufu ou riz."
    ]
  },
  {
    title: "Thiebou Yapp",
    description: "Riz au bœuf sénégalais avec sauce tomate épicée.",
    image: "images/thiebou-yapp.jpeg",
    ingredients: [
      "200g riz",
      "150g bœuf",
      "Tomates, oignon, huile",
      "Épices, sel, poivre"
    ],
    preparation: [
      "Faire revenir bœuf dans huile.",
      "Ajouter oignon et tomates, cuire 10 minutes.",
      "Ajouter riz et eau, assaisonner.",
      "Couvrir et cuire 20-25 minutes.",
      "Servir chaud."
    ]
  },
  {
    title: "Alloco",
    description: "Bananes plantains frites ivoiriennes, snack sucré-salé.",
    image: "images/alloco.jpeg",
    ingredients: [
      "2 bananes plantains mûres",
      "Huile pour friture",
      "Sel"
    ],
    preparation: [
      "Éplucher et couper plantains en rondelles.",
      "Faire frire dans huile chaude jusqu’à dorure.",
      "Égoutter et saupoudrer sel.",
      "Servir chaud."
    ]
  },
  {
    title: "Fufu et sauce claire",
    description: "Pâte élastique ghanéenne accompagnée d’une sauce légère.",
    image: "images/fufu-ghana.jpeg",
    ingredients: [
      "200g farine de manioc ou igname",
      "Eau",
      "Sel",
      "Sauce claire (poisson ou viande)"
    ],
    preparation: [
      "Cuire farine dans eau pour obtenir pâte élastique.",
      "Servir avec sauce claire préparée.",
      "Déguster chaud."
    ]
  },
  {
    title: "Chakchouka",
    description: "Poivrons, tomates et oignons mijotés avec œufs.",
    image: "images/chakchouka.jpeg",
    ingredients: [
      "2 poivrons",
      "2 tomates",
      "1 oignon",
      "2 œufs",
      "Sel, poivre, huile, épices"
    ],
    preparation: [
      "Faire revenir oignon et poivrons dans huile.",
      "Ajouter tomates et cuire 5-7 minutes.",
      "Casser œufs sur légumes et couvrir 5 minutes.",
      "Assaisonner et servir chaud."
    ]
  },
  {
    title: "Bobotie végétarien",
    description: "Gratin sud-africain de lentilles et épices, version crémeuse.",
    image: "images/vegan-bobotie.jpeg",
    ingredients: [
      "200g lentilles cuites",
      "1 oignon",
      "2 œufs",
      "50ml lait",
      "Épices, sel, poivre"
    ],
    preparation: [
      "Faire revenir oignon dans peu d’huile.",
      "Ajouter lentilles et épices, mélanger.",
      "Verser dans plat, couvrir mélange œuf-lait.",
      "Cuire au four 20-25 minutes à 180°C.",
      "Servir chaud."
    ]
  },
  {
    title: "Bruschetta",
    description: "Pain grillé garni de tomates et basilic, italien classique.",
    image: "images/bruschetta.jpeg",
    ingredients: [
      "4 tranches de pain",
      "2 tomates",
      "Basilic frais",
      "Huile d’olive, sel, poivre"
    ],
    preparation: [
      "Griller pain légèrement.",
      "Mélanger tomates hachées, basilic, sel, poivre, huile.",
      "Déposer mélange sur pain grillé.",
      "Servir immédiatement."
    ]
  },
  {
    title: "Raviolis aux champignons",
    description: "Pâtes farcies aux champignons avec sauce crémeuse.",
    image: "images/ravioli.jpeg",
    ingredients: [
      "200g raviolis aux champignons",
      "50ml crème",
      "1 oignon",
      "Sel, poivre, beurre"
    ],
    preparation: [
      "Cuire raviolis selon instructions.",
      "Faire revenir oignon dans beurre.",
      "Ajouter crème et assaisonner.",
      "Mélanger raviolis avec sauce.",
      "Servir chaud."
    ]
  },
  {
    title: "Crevettes à l’ail",
    description: "Crevettes sautées à l’ail, plat rapide espagnol.",
    image: "images/shrimp-garlic.jpeg",
    ingredients: [
      "200g crevettes",
      "2 gousses d’ail",
      "Huile d’olive",
      "Sel, poivre"
    ],
    preparation: [
      "Faire revenir ail dans huile chaude.",
      "Ajouter crevettes et sauter 5 minutes.",
      "Assaisonner sel et poivre.",
      "Servir chaud."
    ]
  },
  {
    title: "Gâteau basque",
    description: "Pâtisserie française traditionnelle avec crème ou confiture.",
    image: "images/gateau-basque.jpeg",
    ingredients: [
      "200g farine",
      "100g sucre",
      "100g beurre",
      "2 œufs",
      "Crème ou confiture"
    ],
    preparation: [
      "Mélanger farine, sucre, beurre pour pâte.",
      "Abaisser pâte et garnir crème ou confiture.",
      "Recouvrir pâte et sceller bords.",
      "Cuire au four 180°C 25-30 minutes.",
      "Laisser refroidir et servir."
    ]
  },
  {
    title: "Poutine",
    description: "Frites nappées de fromage et sauce brune, classique canadien.",
    image: "images/poutine.jpeg",
    ingredients: [
      "200g frites",
      "100g fromage en grains",
      "150ml sauce brune"
    ],
    preparation: [
      "Cuire frites jusqu’à dorure.",
      "Placer fromage sur frites chaudes.",
      "Verser sauce brune chaude.",
      "Servir immédiatement."
    ]
  },
  {
    title: "Kottu Roti",
    description: "Plat sri-lankais de pain haché sauté avec légumes et œufs.",
    image: "images/kottu-roti.jpeg",
    ingredients: [
      "2 pains plats",
      "1 oignon",
      "1 carotte",
      "1 œuf",
      "100g viande ou tofu",
      "Huile, sel, poivre"
    ],
    preparation: [
      "Couper pain en petits morceaux.",
      "Faire revenir oignon, carotte, viande/tofu dans huile.",
      "Ajouter pain et œuf, sauter 5-7 minutes.",
      "Assaisonner et servir chaud."
    ]
  },
  {
    title: "Banh Mi",
    description: "Sandwich vietnamien croustillant avec légumes et viande.",
    image: "images/banh-mi.jpeg",
    ingredients: [
      "1 baguette vietnamienne",
      "Légumes frais (carottes, concombre, coriandre)",
      "Viande ou tofu",
      "Sauce parfumée"
    ],
    preparation: [
      "Couper baguette et tartiner sauce.",
      "Garnir avec légumes et viande/tofu.",
      "Servir immédiatement."
    ]
  },
  {
    title: "Tacos de poisson",
    description: "Tortillas garnies de poisson grillé et légumes frais.",
    image: "images/fish-taco.jpeg",
    ingredients: [
      "2 tortillas",
      "150g poisson grillé",
      "Salade, avocat",
      "Sauce piquante"
    ],
    preparation: [
      "Placer poisson sur tortilla.",
      "Ajouter salade, avocat et sauce.",
      "Rouler et servir."
    ]
  },
  {
    title: "Empanadas",
    description: "Pâtisseries farcies à la viande, cuites au four ou frites.",
    image: "images/empanadas.jpeg",
    ingredients: [
      "200g pâte à empanadas",
      "100g viande hachée",
      "1 oignon",
      "Épices, sel, poivre"
    ],
    preparation: [
      "Faire revenir viande et oignon avec épices.",
      "Garnir pâte, plier et sceller bords.",
      "Cuire au four 20-25 minutes ou frire.",
      "Servir chaud."
    ]
  },
  {
    title: "Pad Thaï",
    description: "Nouilles sautées thaïlandaises avec légumes, tofu et sauce spéciale.",
    image: "images/pad-thai.jpeg",
    ingredients: [
      "200g nouilles de riz",
      "100g tofu",
      "Légumes variés",
      "Sauce tamarin ou soja",
      "Œufs, huile"
    ],
    preparation: [
      "Cuire nouilles selon instructions.",
      "Faire revenir tofu et légumes dans huile.",
      "Ajouter nouilles et sauce, mélanger.",
      "Incorporer œufs brouillés, servir chaud."
    ]
  },
  {
    title: "Riz cantonais",
    description: "Riz sauté à la chinoise avec œufs, jambon et petits pois.",
    image: "images/fried-rice.jpeg",
    ingredients: [
      "200g riz cuit",
      "2 œufs",
      "50g jambon",
      "Petits pois",
      "Huile, sel, poivre"
    ],
    preparation: [
      "Faire revenir jambon et petits pois dans huile.",
      "Ajouter riz et sauter 5 minutes.",
      "Incorporer œufs brouillés, assaisonner.",
      "Servir chaud."
    ]
  },
  {
    title: "Ceviche",
    description: "Poisson cru mariné dans citron vert avec oignons et coriandre, typique du Pérou.",
    image: "images/ceviche.jpeg",
    ingredients: [
      "200g poisson blanc frais",
      "1 citron vert",
      "1 oignon rouge",
      "Coriandre fraîche",
      "Sel, piment"
    ],
    preparation: [
      "Couper le poisson en dés.",
      "Ajouter jus de citron vert et laisser mariner 15 minutes.",
      "Incorporer oignon et coriandre hachés.",
      "Assaisonner sel et piment.",
      "Servir frais."
    ]
  },
  {
    title: "Shakshuka verte",
    description: "Variante de shakshuka à base d’épinards et herbes, œufs pochés.",
    image: "images/green-shakshuka.jpeg",
    ingredients: [
      "200g épinards frais",
      "2 œufs",
      "1 oignon",
      "Ail, sel, poivre, huile"
    ],
    preparation: [
      "Faire revenir oignon et ail dans huile.",
      "Ajouter épinards et cuire 5 minutes.",
      "Casser les œufs sur les épinards et couvrir 5 minutes.",
      "Assaisonner et servir chaud."
    ]
  },
  {
    title: "Pastilla au poulet",
    description: "Pâtisserie marocaine croustillante fourrée de poulet, amandes et épices.",
    image: "images/pastilla.jpeg",
    ingredients: [
      "200g pâte filo",
      "150g poulet cuit effiloché",
      "50g amandes",
      "Épices (cannelle, gingembre), sel, poivre",
      "Beurre fondu"
    ],
    preparation: [
      "Mélanger poulet avec amandes et épices.",
      "Étaler pâte filo et garnir mélange.",
      "Plier et badigeonner beurre fondu.",
      "Cuire au four 180°C 25-30 minutes.",
      "Servir chaud."
    ]
  },
  {
    title: "Tajine de légumes",
    description: "Ragoût de légumes mijoté avec épices douces et huile d’olive, marocain.",
    image: "images/vegetable-tagine.jpeg",
    ingredients: [
      "1 courgette, 1 carotte, 1 poivron",
      "1 oignon",
      "Épices (cumin, paprika), sel, poivre",
      "Huile d’olive"
    ],
    preparation: [
      "Faire revenir oignon dans huile.",
      "Ajouter légumes coupés et épices.",
      "Couvrir et mijoter 20-25 minutes.",
      "Servir chaud."
    ]
  },
  {
    title: "Okonomiyaki",
    description: "Crêpe salée japonaise garnie de chou, viande ou fruits de mer.",
    image: "images/okonomiyaki.jpeg",
    ingredients: [
      "150g farine",
      "100ml eau",
      "200g chou râpé",
      "100g viande ou fruits de mer",
      "Sauce okonomiyaki, huile"
    ],
    preparation: [
      "Mélanger farine et eau pour pâte.",
      "Incorporer chou et garniture.",
      "Cuire sur poêle huilée 5-7 minutes de chaque côté.",
      "Servir nappé de sauce okonomiyaki."
    ]
  },
  {
    title: "Koklo meme",
    description: "Poulet frit béninois croustillant, mariné aux épices locales.",
    image: "images/klolo-meme.jpeg",
    ingredients: [
      "1 poulet découpé",
      "Épices locales (piment, gingembre, ail)",
      "Huile pour friture",
      "Sel"
    ],
    preparation: [
      "Mariner poulet avec épices 1-2 heures.",
      "Faire frire dans huile chaude jusqu’à dorure.",
      "Servir avec sauces pimentées."
    ]
  },
  {
    title: "Yassa poisson fumé",
    description: "Poisson fumé sénégalais mariné au citron et oignons.",
    image: "images/yassa-fish.jpeg",
    ingredients: [
      "200g poisson fumé",
      "1 oignon",
      "Jus de 1 citron",
      "Sel, poivre, huile"
    ],
    preparation: [
      "Faire mariner poisson avec jus de citron et oignon 30 min.",
      "Cuire doucement dans huile et marinade 10-15 min.",
      "Servir chaud."
    ]
  },
  {
    title: "Mbika",
    description: "Ragoût camerounais de légumes et feuilles vertes avec viande ou poisson.",
    image: "images/Mbika.jpeg",
    ingredients: [
      "200g feuilles vertes",
      "100g viande ou poisson",
      "1 oignon, huile, sel, poivre"
    ],
    preparation: [
      "Faire revenir oignon dans huile.",
      "Ajouter viande ou poisson et cuire 10 min.",
      "Incorporer feuilles vertes et mijoter 15-20 min.",
      "Servir chaud."
    ]
  },
  {
    title: "Sambusa",
    description: "Triangle de pâte frit farci viande, légumes ou lentilles, somalien.",
    image: "images/sambusa.jpeg",
    ingredients: [
      "Pâte à sambusa",
      "100g viande hachée ou lentilles",
      "Épices, sel, poivre, huile"
    ],
    preparation: [
      "Garnir pâte avec farce épicée.",
      "Plier en triangle et sceller.",
      "Frire jusqu’à dorure.",
      "Servir chaud."
    ]
  },
  {
    title: "Fried Plantain",
    description: "Bananes plantains mûres frites ivoiriennes caramélisées.",
    image: "images/fried-plantain.jpeg",
    ingredients: [
      "2 bananes plantains mûres",
      "Huile pour friture",
      "Sel"
    ],
    preparation: [
      "Éplucher et couper plantains en rondelles.",
      "Faire frire dans huile chaude jusqu’à dorure.",
      "Égoutter, saupoudrer sel et servir."
    ]
  },
  {
    title: "Choukouya",
    description: "Viande de bœuf burkinabè grillée et épicée.",
    image: "images/choukouya.jpeg",
    ingredients: [
      "200g bœuf",
      "Épices (piment, ail, gingembre)",
      "Sel, huile"
    ],
    preparation: [
      "Mariner viande 1 heure.",
      "Griller sur feu moyen jusqu’à cuisson désirée.",
      "Servir avec sauces piquantes."
    ]
  },
  {
    title: "Yam Porridge",
    description: "Igname nigériane mijotée dans sauce épicée avec huile de palme et légumes.",
    image: "images/yam-porridge.jpeg",
    ingredients: [
      "200g igname",
      "1 oignon, 1 tomate",
      "Huile de palme",
      "Épices, sel"
    ],
    preparation: [
      "Peler et couper igname en cubes.",
      "Faire revenir oignon et tomate dans huile de palme.",
      "Ajouter igname et épices, couvrir d’eau.",
      "Mijoter 25-30 min jusqu’à tendreté.",
      "Servir chaud."
    ]
  },
  {
    title: "Akara",
    description: "Beignets nigérians à base de pâte de haricots.",
    image: "images/akara.jpeg",
    ingredients: [
      "200g haricots blancs trempés",
      "Sel, huile pour friture",
      "Oignon (optionnel)"
    ],
    preparation: [
      "Mixer haricots en pâte lisse.",
      "Ajouter sel et oignon haché.",
      "Former petites portions et frire jusqu’à dorure.",
      "Servir chaud."
    ]
  },
  {
    title: "Attiéké poisson",
    description: "Semoule de manioc ivoirienne accompagnée de poisson frit et sauce épicée.",
    image: "images/attieke.jpeg",
    ingredients: [
      "100g attiéké",
      "200g poisson frit",
      "Sauce tomate épicée"
    ],
    preparation: [
      "Préparer attiéké selon instructions.",
      "Servir avec poisson frit et sauce épicée."
    ]
  },
  {
    title: "Chikwangue",
    description: "Pâte de manioc fermentée RDC enveloppée dans feuilles de bananier, cuite à la vapeur.",
    image: "images/chikwangue.jpeg",
    ingredients: [
      "200g manioc fermenté",
      "Feuilles de bananier"
    ],
    preparation: [
      "Former bâtonnets de manioc dans feuilles de bananier.",
      "Cuire à la vapeur 30-40 min.",
      "Servir avec sauces ou ragoûts."
    ]
  },
  {
    title: "Bissap glacé",
    description: "Boisson sénégalaise sucrée à base d’hibiscus séché, légèrement acidulée.",
    image: "images/bissap.jpeg",
    ingredients: [
      "50g fleurs d’hibiscus séchées",
      "500ml eau",
      "Sucre, citron"
    ],
    preparation: [
      "Faire infuser fleurs dans eau chaude 10 min.",
      "Filtrer et ajouter sucre et citron.",
      "Servir glacé."
    ]
  },
  {
    title: "Poulet Yassa végétarien",
    description: "Variante végétarienne sénégalaise avec légumes marinés au citron et oignons.",
    image: "images/yassa-vegetarian.jpeg",
    ingredients: [
      "1 oignon",
      "1 poivron",
      "1 citron",
      "Huile, sel, épices",
      "Légumes de saison (carottes, chou, etc.)"
    ],
    preparation: [
      "Couper légumes et oignon en lanières.",
      "Presser citron et mélanger avec huile, sel et épices.",
      "Mariner légumes dans ce mélange 30 min.",
      "Faire revenir dans une poêle et mijoter 15 min.",
      "Servir chaud avec riz."
    ]
  },
  {
    title: "Beignets de haricots",
    description: "Beignets nigérians frits à base de pâte de haricots.",
    image: "images/bean-patties.jpeg",
    ingredients: [
      "200g haricots blancs trempés",
      "1 oignon",
      "Sel, huile pour friture"
    ],
    preparation: [
      "Mixer haricots pour obtenir pâte lisse.",
      "Ajouter oignon haché et sel.",
      "Former des petites portions et frire jusqu’à dorure.",
      "Égoutter et servir chaud."
    ]
  },
  {
    title: "Ragoût de cabri",
    description: "Viande de chèvre béninoise mijotée avec épices, tomates et oignons.",
    image: "images/goat-stew.jpeg",
    ingredients: [
      "500g viande de chèvre",
      "2 tomates, 1 oignon",
      "Épices locales, sel, huile"
    ],
    preparation: [
      "Faire revenir oignon et tomates dans huile.",
      "Ajouter viande et épices, cuire 10 min.",
      "Couvrir et mijoter 40-50 min jusqu’à tendreté.",
      "Servir chaud."
    ]
  },
  {
    title: "Pain de maïs",
    description: "Pain moelleux béninois à base de farine de maïs, légèrement sucré.",
    image: "images/cornbread.jpeg",
    ingredients: [
      "200g farine de maïs",
      "100ml lait",
      "1 œuf, sucre, sel, levure"
    ],
    preparation: [
      "Mélanger farine, sucre, sel et levure.",
      "Ajouter œuf et lait, bien mélanger.",
      "Verser dans moule et cuire 25-30 min à 180°C.",
      "Laisser refroidir avant de servir."
    ]
  },
  {
    title: "Salade de papaye verte",
    description: "Salade thaïlandaise à base de papaye verte râpée et carottes.",
    image: "images/green-papaya-salad.jpeg",
    ingredients: [
      "1 papaye verte",
      "1 carotte",
      "Cacahuètes, sauce piquante, sel"
    ],
    preparation: [
      "Râper papaye et carotte.",
      "Mélanger avec cacahuètes et sauce piquante.",
      "Servir frais."
    ]
  },
  {
    title: "Okra stew",
    description: "Sauce épaisse ghanéenne à base de gombo, tomates et poisson ou viande.",
    image: "images/okra-stew.jpeg",
    ingredients: [
      "200g gombo",
      "1 tomate, 1 oignon",
      "Poisson ou viande, sel, huile"
    ],
    preparation: [
      "Faire revenir oignon et tomate dans huile.",
      "Ajouter gombo et poisson ou viande.",
      "Mijoter 15-20 min et servir chaud."
    ]
  },
 
   {
    title: "Crêpes Suzette",
    description: "Crêpes fines servies avec une sauce au beurre, sucre, jus d’orange et Grand Marnier, flambées à table.",
    image: "images/crepes-suzette.jpeg",
    ingredients: [
      "125g de farine",
      "2 oeufs",
      "30g de sucre",
      "1 pincée de sel",
      "30g de beurre fondu",
      "200ml de lait",
      "50ml de Grand Marnier",
      "Beurre pour la cuisson"
    ],
    preparation: [
      "Mélanger la farine, le sucre et le sel.",
      "Ajouter les œufs et le beurre fondu, puis incorporer le lait progressivement.",
      "Faire cuire les crêpes dans une poêle chaude avec un peu de beurre.",
      "Préparer la sauce avec beurre, sucre, jus d’orange et Grand Marnier et flamber les crêpes."
    ]
  },
  {
    title: "Tarte Tatin",
    description: "Tarte renversée aux pommes caramélisées au sucre et beurre, classique de la pâtisserie française.",
    image: "images/tarte-tatin.jpeg",
    ingredients: [
      "6 pommes",
      "100g de sucre",
      "50g de beurre",
      "1 pâte brisée"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Caraméliser le sucre et le beurre dans une poêle allant au four.",
      "Ajouter les pommes pelées et coupées, les disposer uniformément.",
      "Recouvrir avec la pâte brisée et cuire 30 minutes.",
      "Retourner la tarte après cuisson."
    ]
  },
  {
    title: "Financiers",
    description: "Petits gâteaux moelleux à base de poudre d’amandes et blancs d’œufs, parfaits pour le thé.",
    image: "images/financiers-cake.jpeg",
    ingredients: [
      "100g de poudre d'amandes",
      "150g de sucre glace",
      "50g de farine",
      "5 blancs d’œufs",
      "100g de beurre fondu"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Mélanger la poudre d’amandes, le sucre glace et la farine.",
      "Ajouter les blancs d’œufs puis le beurre fondu.",
      "Verser dans des moules et cuire 15-20 minutes."
    ]
  },
  {
    title: "Madeleines",
    description: "Petits gâteaux moelleux en forme de coquillage, parfumés au citron ou à la vanille.",
    image: "images/madeleines.jpeg",
    ingredients: [
      "100g de beurre fondu",
      "100g de sucre",
      "2 œufs",
      "120g de farine",
      "1/2 sachet de levure chimique",
      "Zeste de citron"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Mélanger les œufs et le sucre jusqu’à blanchissement.",
      "Ajouter la farine et la levure, puis le beurre fondu et le zeste.",
      "Remplir les moules à madeleines et cuire 10-12 minutes."
    ]
  },
  {
    title: "Clafoutis aux cerises",
    description: "Gâteau moelleux aux cerises, à base d’œufs, lait et farine, légèrement sucré.",
    image: "images/clafoutis.jpeg",
    ingredients: [
      "500g de cerises",
      "100g de sucre",
      "3 œufs",
      "100g de farine",
      "300ml de lait",
      "1 sachet de sucre vanillé"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Beurrer un plat et y déposer les cerises.",
      "Mélanger œufs, sucre, sucre vanillé et farine, ajouter le lait.",
      "Verser sur les cerises et cuire 35-40 minutes."
    ]
  },
  {
    title: "Tiramisu",
    description: "Dessert italien emblématique à base de biscuits imbibés de café, mascarpone et cacao.",
    image: "images/tiramisu.jpeg",
    ingredients: [
      "250g de mascarpone",
      "3 œufs",
      "100g de sucre",
      "24 biscuits à la cuillère",
      "200ml de café fort",
      "Cacao en poudre"
    ],
    preparation: [
      "Séparer les blancs des jaunes d'œufs.",
      "Fouetter les jaunes avec le sucre puis incorporer le mascarpone.",
      "Monter les blancs en neige et les ajouter délicatement.",
      "Tremper les biscuits dans le café et disposer une couche dans un plat.",
      "Recouvrir de crème et répéter les couches.",
      "Saupoudrer de cacao et réfrigérer au moins 4 heures."
    ]
  },
  {
    title: "Panna Cotta",
    description: "Dessert italien crémeux à base de crème, sucre et gélatine, souvent accompagné de coulis de fruits rouges.",
    image: "images/panna-cotta.jpeg",
    ingredients: [
      "500ml de crème liquide",
      "80g de sucre",
      "2 feuilles de gélatine",
      "1 gousse de vanille",
      "Coulis de fruits rouges"
    ],
    preparation: [
      "Faire ramollir la gélatine dans de l'eau froide.",
      "Chauffer la crème avec le sucre et la gousse de vanille fendue.",
      "Retirer du feu et incorporer la gélatine essorée.",
      "Verser dans des verrines et laisser prendre au réfrigérateur 4 heures.",
      "Servir avec le coulis de fruits rouges."
    ]
  },
   {
    title: "Financiers aux amandes",
    description: "Petits gâteaux moelleux et fondants à base de poudre d'amande, beurre noisette et blancs d'œufs, parfaits pour le goûter.",
    image: "images/financiers.jpeg",
    ingredients: [
      "100g de poudre d'amande",
      "100g de sucre glace",
      "50g de farine",
      "100g de beurre",
      "4 blancs d'œufs"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Faire fondre le beurre jusqu'à ce qu'il devienne noisette.",
      "Mélanger la poudre d'amande, le sucre glace et la farine.",
      "Ajouter les blancs d'œufs et le beurre noisette.",
      "Verser dans des moules à financiers et cuire 15-20 minutes."
    ]
  },
  {
    title: "Tarte aux framboises",
    description: "Tarte sucrée à base de pâte sablée, garnie de crème pâtissière et de framboises fraîches.",
    image: "images/raspberry-tart.jpeg",
    ingredients: [
      "1 pâte sablée",
      "250ml de lait",
      "2 jaunes d'œufs",
      "50g de sucre",
      "20g de farine",
      "200g de framboises fraîches"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Foncer un moule avec la pâte sablée et cuire à blanc 15 minutes.",
      "Préparer la crème pâtissière en chauffant le lait, puis en mélangeant jaunes, sucre et farine.",
      "Verser la crème sur la pâte précuite et disposer les framboises dessus.",
      "Réfrigérer avant de servir."
    ]
  },
  {
    title: "Cannelés bordelais",
    description: "Petits gâteaux croustillants à l'extérieur et moelleux à l'intérieur, parfumés au rhum et à la vanille.",
    image: "images/canneles.jpeg",
    ingredients: [
      "500ml de lait",
      "50g de beurre",
      "2 œufs entiers + 2 jaunes",
      "200g de sucre",
      "100g de farine",
      "1 gousse de vanille",
      "50ml de rhum"
    ],
    preparation: [
      "Faire chauffer le lait avec le beurre et la vanille.",
      "Mélanger les œufs, jaunes et sucre puis incorporer la farine.",
      "Ajouter le lait chaud et le rhum, laisser reposer 24h au réfrigérateur.",
      "Verser dans des moules à cannelés et cuire 50-60 minutes à 200°C."
    ]
  },
  {
    title: "Crème brûlée à la vanille",
    description: "Crème onctueuse à la vanille, recouverte de sucre caramélisé au chalumeau pour un contraste croquant-fondant.",
    image: "images/creme-brulee.jpeg",
    ingredients: [
      "500ml de crème liquide",
      "5 jaunes d'œufs",
      "100g de sucre",
      "1 gousse de vanille",
      "Sucre pour caraméliser"
    ],
    preparation: [
      "Préchauffer le four à 150°C.",
      "Chauffer la crème avec la gousse de vanille fendue.",
      "Fouetter les jaunes avec le sucre et ajouter la crème chaude.",
      "Verser dans des ramequins et cuire au bain-marie 35-40 minutes.",
      "Laisser refroidir, puis caraméliser le dessus avec un chalumeau."
    ]
  },
  {
    title: "Galette des rois à la frangipane",
    description: "Pâtisserie feuilletée garnie d'une crème d'amandes onctueuse, traditionnelle pour l'Épiphanie.",
    image: "images/galette-des-rois.jpeg",
    ingredients: [
      "2 pâtes feuilletées",
      "100g de beurre",
      "100g de sucre",
      "2 œufs + 1 jaune pour dorure",
      "100g de poudre d'amandes",
      "1 cuillère à soupe de farine"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Mélanger beurre, sucre, œufs, poudre d'amandes et farine pour faire la frangipane.",
      "Étaler une pâte feuilletée, déposer la frangipane et recouvrir de la deuxième pâte.",
      "Dorer au jaune d'œuf et faire des dessins à la fourchette.",
      "Cuire 25-30 minutes jusqu'à dorure."
    ]
  },
  {
    title: "Choux à la crème",
    description: "Pâtisserie légère et aérienne, fourrée d'une crème pâtissière onctueuse, parfaite pour le dessert ou le goûter.",
    image: "images/choux-cream.jpeg",
    ingredients: [
      "125ml d'eau",
      "50g de beurre",
      "75g de farine",
      "2 œufs",
      "250ml de lait",
      "2 jaunes d'œufs",
      "50g de sucre",
      "20g de farine pour la crème"
    ],
    preparation: [
      "Préparer la pâte à choux en chauffant eau et beurre, puis ajouter la farine et les œufs.",
      "Former des choux sur une plaque et cuire 20-25 minutes à 200°C.",
      "Préparer la crème pâtissière et la laisser refroidir.",
      "Fendre les choux et les garnir de crème."
    ]
  },
  {
    title: "Paris-Brest",
    description: "Gâteau en forme de couronne à base de pâte à choux, garni d'une crème pralinée et décoré d'amandes effilées.",
    image: "images/paris-brest.jpeg",
    ingredients: [
      "125ml d'eau",
      "50g de beurre",
      "75g de farine",
      "2 œufs",
      "250ml de lait",
      "2 jaunes d'œufs",
      "50g de sucre",
      "100g de pralin",
      "50g d'amandes effilées"
    ],
    preparation: [
      "Préparer la pâte à choux, former une couronne et cuire 25 minutes à 200°C.",
      "Préparer une crème pâtissière pralinée.",
      "Fendre la couronne, garnir de crème et saupoudrer d'amandes effilées."
    ]
  },
  {
    title: "Soufflé au chocolat",
    description: "Dessert aérien et léger au chocolat, parfait pour épater vos invités avec son cœur fondant.",
    image: "images/chocolate-souffle.jpeg",
    ingredients: [
      "100g de chocolat noir",
      "50g de beurre",
      "3 œufs",
      "50g de sucre",
      "1 pincée de sel"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Faire fondre le chocolat avec le beurre.",
      "Séparer les blancs des jaunes d'œufs.",
      "Mélanger les jaunes avec le chocolat, monter les blancs en neige avec le sucre.",
      "Incorporer délicatement les blancs et verser dans des ramequins beurrés.",
      "Cuire 12-15 minutes et servir immédiatement."
    ]
  },
  {
    title: "Île flottante",
    description: "Blancs d'œufs pochés flottant sur une crème anglaise vanillée, nappés de caramel pour un dessert élégant et léger.",
    image: "images/ile-flottante.jpeg",
    ingredients: [
      "4 œufs",
      "50g de sucre",
      "500ml de lait",
      "1 gousse de vanille",
      "Caramel liquide pour le nappage"
    ],
    preparation: [
      "Séparer les blancs des jaunes d'œufs.",
      "Monter les blancs en neige avec la moitié du sucre et pocher 2 minutes dans l'eau bouillante.",
      "Préparer la crème anglaise avec le lait, jaunes d'œufs, sucre et vanille.",
      "Disposer les blancs sur la crème et napper de caramel avant de servir."
    ]
  },
  {
    title: "Mille-feuille",
    description: "Pâtisserie composée de couches de pâte feuilletée croustillante et de crème pâtissière vanillée, un classique français raffiné.",
    image: "images/mille-feuille.jpeg",
    ingredients: [
      "2 pâtes feuilletées",
      "250ml de lait",
      "2 jaunes d'œufs",
      "50g de sucre",
      "20g de farine",
      "Sucre glace pour décoration"
    ],
    preparation: [
      "Cuire les pâtes feuilletées au four jusqu'à dorure.",
      "Préparer la crème pâtissière et laisser refroidir.",
      "Alterner les couches de pâte et de crème.",
      "Saupoudrer de sucre glace avant de servir."
    ]
  },
  {
    title: "Crêpes sucrées",
    description: "Crêpes fines et légères, parfaites pour le petit-déjeuner ou le dessert, à garnir selon vos envies.",
    image: "images/crepes.jpeg",
    ingredients: [
      "250g de farine",
      "4 œufs",
      "500ml de lait",
      "50g de beurre fondu",
      "1 pincée de sel",
      "2 cuillères à soupe de sucre"
    ],
    preparation: [
      "Mélanger farine, sucre et sel.",
      "Ajouter les œufs et le lait progressivement, puis le beurre fondu.",
      "Laisser reposer la pâte 30 minutes.",
      "Cuire les crêpes dans une poêle chaude légèrement beurrée."
    ]
  },
  {
    title: "Tarte au citron meringuée",
    description: "Tarte acidulée au citron recouverte d'une meringue légère et dorée.",
    image: "images/lemon-meringue-tart.jpeg",
    ingredients: [
      "1 pâte sablée",
      "4 citrons",
      "150g de sucre",
      "3 œufs",
      "50g de beurre",
      "2 blancs d'œufs",
      "50g de sucre pour meringue"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Cuire la pâte à blanc 15 minutes.",
      "Préparer la crème citron en mélangeant jus de citron, œufs, sucre et beurre chauffé.",
      "Verser sur la pâte et cuire 10 minutes.",
      "Monter les blancs en neige avec sucre et napper la tarte, passer 5 minutes au four pour dorer."
    ]
  },
  {
    title: "Opéra",
    description: "Gâteau sophistiqué composé de génoise au chocolat, crème au beurre au café et ganache au chocolat.",
    image: "images/opera-cake.jpeg",
    ingredients: [
      "200g de chocolat noir",
      "150g de beurre",
      "150g de sucre",
      "6 œufs",
      "100g de farine",
      "200ml de café fort",
      "200g de beurre pour crème au café"
    ],
    preparation: [
      "Préparer la génoise au chocolat et cuire au four.",
      "Préparer la crème au beurre au café et la ganache au chocolat.",
      "Superposer les couches de génoise, crème et ganache.",
      "Lisser le dessus et laisser reposer au frais."
    ]
  },
  {
    title: "Tarte aux poires et chocolat",
    description: "Tarte gourmande avec ganache au chocolat et poires fondantes.",
    image: "images/chocolate-pear-tart.jpeg",
    ingredients: [
      "1 pâte sablée",
      "3 poires",
      "200g de chocolat noir",
      "100ml de crème liquide",
      "30g de beurre"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Foncer la pâte dans un moule.",
      "Préparer la ganache chocolat en chauffant crème et chocolat.",
      "Couper les poires en tranches et disposer sur la ganache.",
      "Cuire 20-25 minutes et laisser refroidir avant de servir."
    ]
  },
  {
    title: "Moelleux au chocolat",
    description: "Gâteau au chocolat fondant à l'intérieur et légèrement croquant à l'extérieur.",
    image: "images/chocolate-cake.jpeg",
    ingredients: [
      "200g de chocolat noir",
      "150g de beurre",
      "150g de sucre",
      "4 œufs",
      "50g de farine"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Faire fondre chocolat et beurre.",
      "Mélanger œufs et sucre, ajouter chocolat fondu et farine.",
      "Verser dans un moule beurré et cuire 12-15 minutes."
    ]
  },
  {
    title: "Tarte aux myrtilles",
    description: "Tarte fruitée avec pâte sablée et myrtilles fraîches, un dessert léger et parfumé.",
    image: "images/blueberry-tart.jpeg",
    ingredients: [
      "1 pâte sablée",
      "250g de myrtilles",
      "50g de sucre",
      "20g de beurre"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Foncer la pâte et disposer les myrtilles.",
      "Saupoudrer de sucre et ajouter quelques noisettes de beurre.",
      "Cuire 25-30 minutes."
    ]
  },
  {
    title: "Tarte aux fraises",
    description: "Tarte fraîche avec pâte sablée, crème pâtissière et fraises fraîches.",
    image: "images/strawberry-tart.jpeg",
    ingredients: [
      "1 pâte sablée",
      "250ml de lait",
      "2 jaunes d'œufs",
      "50g de sucre",
      "20g de farine",
      "250g de fraises"
    ],
    preparation: [
      "Cuire la pâte à blanc 15 minutes à 180°C.",
      "Préparer la crème pâtissière et verser sur la pâte.",
      "Disposer les fraises tranchées sur la crème et servir frais."
    ]
  },
  {
    title: "Tarte au caramel beurre salé",
    description: "Tarte gourmande avec pâte sablée et caramel onctueux au beurre salé.",
    image: "images/salted-caramel-tart.jpeg",
    ingredients: [
      "1 pâte sablée",
      "150g de sucre",
      "80g de beurre salé",
      "100ml de crème liquide"
    ],
    preparation: [
      "Préchauffer le four à 180°C et cuire la pâte à blanc 15 minutes.",
      "Préparer le caramel en chauffant sucre, beurre et crème.",
      "Verser sur la pâte cuite et laisser refroidir."
    ]
  },
  {
    title: "Tarte aux noix de pécan",
    description: "Tarte américaine revisitée à la française, avec pâte sablée et noix de pécan caramélisées.",
    image: "images/pecan-tart.jpeg",
    ingredients: [
      "1 pâte sablée",
      "150g de sucre",
      "100g de beurre",
      "2 œufs",
      "150g de noix de pécan"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Mélanger sucre, beurre fondu et œufs, ajouter noix de pécan.",
      "Verser sur la pâte sablée et cuire 25-30 minutes."
    ]
  },
  {
    title: "Gâteau aux noix",
    description: "Gâteau moelleux et parfumé aux noix, parfait pour accompagner le thé ou le café.",
    image: "images/walnut-cake.jpeg",
    ingredients: [
      "150g de farine",
      "150g de sucre",
      "3 œufs",
      "100g de beurre",
      "100g de noix concassées"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Mélanger œufs et sucre, ajouter farine, beurre fondu et noix.",
      "Verser dans un moule beurré et cuire 30-35 minutes."
    ]
  },
  {
    title: "Tarte aux abricots",
    description: "Tarte fruitée avec pâte sablée et abricots frais, légèrement sucrée.",
    image: "images/apricot-tart.jpeg",
    ingredients: [
      "1 pâte sablée",
      "6 abricots",
      "50g de sucre",
      "20g de beurre"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Foncer la pâte et disposer les abricots coupés en deux.",
      "Saupoudrer de sucre et ajouter quelques morceaux de beurre.",
      "Cuire 25-30 minutes."
    ]
  },
  {
    title: "Tarte aux framboises et chocolat blanc",
    description: "Tarte délicate alliant la douceur du chocolat blanc et l'acidité des framboises.",
    image: "images/white-chocolate-raspberry-tart.jpeg",
    ingredients: [
      "1 pâte sablée",
      "100g de chocolat blanc",
      "100ml de crème liquide",
      "150g de framboises"
    ],
    preparation: [
      "Préchauffer le four à 180°C et cuire la pâte à blanc.",
      "Préparer la ganache au chocolat blanc en chauffant crème et chocolat.",
      "Verser sur la pâte et disposer les framboises.",
      "Laisser refroidir avant de servir."
    ]
  },
  {
    title: "Quiche Lorraine",
    description: "Tarte salée classique garnie de lardons, œufs et crème, parfaite pour un repas léger.",
    image: "images/quiche-lorraine.jpeg",
    ingredients: [
      "1 pâte brisée",
      "150g de lardons",
      "3 œufs",
      "200ml de crème fraîche",
      "Sel, poivre"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Faire revenir les lardons à la poêle.",
      "Mélanger œufs et crème, saler et poivrer.",
      "Disposer la pâte dans un moule, ajouter les lardons et verser l’appareil.",
      "Cuire 30-35 minutes jusqu’à dorure."
    ]
  },
  {
    title: "Tarte aux légumes",
    description: "Tarte salée garnie de légumes de saison et d’un appareil à base d’œufs et crème.",
    image: "images/vegetable-tart.jpeg",
    ingredients: [
      "1 pâte brisée",
      "Courgettes, poivrons, tomates",
      "3 œufs",
      "200ml de crème fraîche",
      "Sel, poivre, herbes de Provence"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Couper les légumes et les faire revenir légèrement.",
      "Battre les œufs avec la crème, saler et poivrer.",
      "Foncer la pâte dans un moule, disposer les légumes et verser l’appareil.",
      "Cuire 35-40 minutes."
    ]
  },
  {
    title: "Gratin dauphinois",
    description: "Plat de pommes de terre tranchées finement, cuites au four avec crème et ail.",
    image: "images/gratin-dauphinois.jpeg",
    ingredients: [
      "1kg de pommes de terre",
      "500ml de crème liquide",
      "2 gousses d’ail",
      "Sel, poivre, muscade"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Frotter un plat à gratin avec l’ail.",
      "Disposer les pommes de terre tranchées, saler, poivrer et saupoudrer de muscade.",
      "Verser la crème et cuire 45-50 minutes jusqu’à doré."
    ]
  },
  {
    title: "Soupe à l’oignon",
    description: "Soupe traditionnelle française avec oignons caramélisés et gratinée au fromage.",
    image: "images/french-onion-soup.jpeg",
    ingredients: [
      "500g d’oignons",
      "1l de bouillon de bœuf",
      "30g de beurre",
      "Tranches de baguette",
      "100g de gruyère râpé",
      "Sel, poivre"
    ],
    preparation: [
      "Émincer les oignons et les faire revenir dans le beurre jusqu’à caramélisation.",
      "Ajouter le bouillon, saler et poivrer, laisser mijoter 20 minutes.",
      "Verser dans des bols, disposer les tranches de pain et le fromage, gratiner 5 minutes au four."
    ]
  },
  {
    title: "Ratatouille provençale",
    description: "Mélange de légumes du sud de la France mijotés avec huile d’olive et herbes aromatiques.",
    image: "images/ratatouille.jpeg",
    ingredients: [
      "2 aubergines",
      "2 courgettes",
      "2 poivrons",
      "4 tomates",
      "1 oignon",
      "2 gousses d’ail",
      "Huile d’olive, sel, poivre, herbes de Provence"
    ],
    preparation: [
      "Couper tous les légumes en dés.",
      "Faire revenir l’oignon et l’ail, ajouter les légumes et cuire 30-40 minutes à feu doux.",
      "Assaisonner avec sel, poivre et herbes de Provence."
    ]
  },
  {
    title: "Poulet à la moutarde",
    description: "Poulet rôti au four avec une sauce crémeuse à la moutarde.",
    image: "images/chicken-mustard.jpeg",
    ingredients: [
      "1 poulet entier",
      "3 cuillères à soupe de moutarde",
      "200ml de crème",
      "Sel, poivre, herbes de Provence"
    ],
    preparation: [
      "Préchauffer le four à 200°C.",
      "Badigeonner le poulet avec la moutarde, saler et poivrer.",
      "Cuire 1h30 en arrosant régulièrement.",
      "Ajouter la crème 10 minutes avant la fin de cuisson."
    ]
  },
  {
    title: "Boeuf bourguignon",
    description: "Ragoût de bœuf mijoté au vin rouge avec légumes et herbes aromatiques.",
    image: "images/beef-bourguignon.jpeg",
    ingredients: [
      "1kg de bœuf à braiser",
      "200g de lardons",
      "2 oignons",
      "2 carottes",
      "500ml de vin rouge",
      "Bouquet garni, sel, poivre"
    ],
    preparation: [
      "Faire revenir la viande et les lardons.",
      "Ajouter les oignons et carottes, cuire 5 minutes.",
      "Mouiller avec le vin, ajouter bouquet garni, saler et poivrer.",
      "Laisser mijoter 2-3 heures à feu doux."
    ]
  },
  {
    title: "Gratin de courgettes",
    description: "Courgettes en tranches gratinées avec crème, œufs et fromage râpé.",
    image: "images/zucchini-gratin.jpeg",
    ingredients: [
      "4 courgettes",
      "200ml de crème",
      "2 œufs",
      "100g de gruyère râpé",
      "Sel, poivre"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Couper les courgettes en rondelles et les disposer dans un plat.",
      "Mélanger crème, œufs, sel et poivre, verser sur les courgettes.",
      "Saupoudrer de fromage et cuire 25-30 minutes."
    ]
  },
  {
    title: "Tartiflette",
    description: "Plat savoyard à base de pommes de terre, lardons, oignons et reblochon.",
    image: "images/tartiflette.jpeg",
    ingredients: [
      "1kg de pommes de terre",
      "200g de lardons",
      "1 oignon",
      "1 reblochon",
      "Sel, poivre, crème"
    ],
    preparation: [
      "Préchauffer le four à 200°C.",
      "Cuire les pommes de terre et les couper en rondelles.",
      "Faire revenir lardons et oignons, mélanger avec les pommes de terre.",
      "Mettre dans un plat, ajouter crème et reblochon coupé en deux, cuire 20-25 minutes."
    ]
  },
  {
    title: "Soufflé au fromage",
    description: "Soufflé léger et aérien à base de fromage, parfait pour un repas chic.",
    image: "images/cheese-souffle.jpeg",
    ingredients: [
      "50g de beurre",
      "50g de farine",
      "250ml de lait",
      "4 œufs",
      "100g de gruyère râpé",
      "Sel, poivre, noix de muscade"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Préparer une béchamel avec beurre, farine et lait.",
      "Ajouter jaunes d’œufs et fromage, assaisonner.",
      "Monter les blancs en neige et incorporer délicatement.",
      "Verser dans un moule beurré et cuire 25-30 minutes."
    ]
  },
  {
    title: "Brandade de morue",
    description: "Purée de pommes de terre et morue salée, parfumée à l’ail et à l’huile d’olive.",
    image: "images/brandade-cod.jpeg",
    ingredients: [
      "400g de morue dessalée",
      "500g de pommes de terre",
      "2 gousses d’ail",
      "100ml d’huile d’olive",
      "Sel, poivre"
    ],
    preparation: [
      "Cuire les pommes de terre et écraser en purée.",
      "Émietter la morue et la mélanger avec purée, ail écrasé et huile d’olive.",
      "Assaisonner et passer au four 15 minutes si désiré gratiné."
    ]
  },
  {
    title: "Filet mignon à la moutarde",
    description: "Filet mignon tendre accompagné d’une sauce crémeuse à la moutarde.",
    image: "images/pork-mustard.jpeg",
    ingredients: [
      "1 filet mignon de porc",
      "3 cuillères à soupe de moutarde",
      "200ml de crème",
      "Sel, poivre"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Saisir le filet mignon dans une poêle.",
      "Mélanger crème et moutarde, verser sur le filet et cuire 20-25 minutes."
    ]
  },
  {
    title: "Gratin de chou-fleur",
    description: "Chou-fleur cuit au four avec béchamel et fromage gratiné.",
    image: "images/cauliflower-gratin.jpeg",
    ingredients: [
      "1 chou-fleur",
      "200ml de béchamel",
      "100g de fromage râpé",
      "Sel, poivre"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Cuire le chou-fleur à l’eau bouillante 10 minutes.",
      "Mettre dans un plat, verser la béchamel, saupoudrer de fromage et cuire 20-25 minutes."
    ]
  },
  {
    title: "Cassoulet",
    description: "Ragoût traditionnel de haricots blancs, confit de canard et saucisses.",
    image: "images/cassoulet.jpeg",
    ingredients: [
      "500g de haricots blancs",
      "2 cuisses de confit de canard",
      "200g de saucisse de Toulouse",
      "1 oignon",
      "2 gousses d’ail, sel, poivre"
    ],
    preparation: [
      "Cuire les haricots selon les instructions du paquet.",
      "Faire revenir l’oignon et l’ail, ajouter les viandes.",
      "Mélanger avec les haricots dans un plat à gratin, cuire 45 minutes à 180°C."
    ]
  },
  {
    title: "Blanquette de veau",
    description: "Ragoût de veau tendre dans une sauce blanche crémeuse aux légumes.",
    image: "images/blanquette-de-veau.jpeg",
    ingredients: [
      "600g de veau",
      "2 carottes",
      "1 oignon",
      "100ml de crème",
      "1 jaune d’œuf, sel, poivre"
    ],
    preparation: [
      "Faire revenir le veau, ajouter légumes et eau pour couvrir.",
      "Laisser mijoter 1h30 à feu doux.",
      "Mélanger crème et jaune d’œuf, incorporer à la sauce avant de servir."
    ]
  },
  {
    title: "Choucroute garnie",
    description: "Plat alsacien à base de choucroute, saucisses et viandes fumées.",
    image: "images/choucroute.jpeg",
    ingredients: [
      "1kg de choucroute",
      "Saucisses diverses",
      "Viande fumée",
      "Pommes de terre",
      "Sel, poivre, vin blanc"
    ],
    preparation: [
      "Rincer et cuire la choucroute avec un peu de vin blanc.",
      "Ajouter les viandes et saucisses, cuire 30 minutes.",
      "Servir avec pommes de terre cuites à part."
    ]
  },
  {
    title: "Pissaladière",
    description: "Tarte niçoise aux oignons, anchois et olives.",
    image: "images/pissaladiere.jpeg",
    ingredients: [
      "1 pâte brisée",
      "500g d’oignons",
      "50g d’anchois",
      "Olives noires",
      "Huile d’olive, sel, poivre"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Faire revenir les oignons avec huile d’olive jusqu’à caramélisation.",
      "Étaler sur la pâte, ajouter anchois et olives, cuire 25-30 minutes."
    ]
  },
  {
    title: "Endives au jambon gratinées",
    description: "Endives enroulées de jambon, nappées de béchamel et gratinées.",
    image: "images/endives-ham-gratin.jpeg",
    ingredients: [
      "4 endives",
      "4 tranches de jambon",
      "200ml de béchamel",
      "100g de fromage râpé",
      "Sel, poivre"
    ],
    preparation: [
      "Préchauffer le four à 180°C.",
      "Cuire les endives à l’eau bouillante 10 minutes.",
      "Enrouler chaque endive dans une tranche de jambon, disposer dans un plat.",
      "Napper de béchamel, saupoudrer de fromage et cuire 25 minutes."
    ]
  },
  {
    title: "Hachis Parmentier",
    description: "Purée de pommes de terre sur viande hachée, gratinée au four.",
    image: "images/hachis-parmentier.jpeg",
    ingredients: [
      "500g de viande hachée",
      "600g de pommes de terre",
      "50g de beurre",
      "100ml de lait",
      "Sel, poivre"
    ],
    preparation: [
      "Cuire les pommes de terre et réduire en purée avec beurre et lait.",
      "Faire revenir la viande hachée avec sel et poivre.",
      "Mettre la viande dans un plat, recouvrir de purée et cuire 20 minutes à 180°C."
    ]
  },
];






