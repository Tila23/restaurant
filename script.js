// ===== ARTICLE DATA =====
const articles = {
  arush: {
    name: 'Arush', nameEm: 'Burger',
    badges: [{label:'⭐ Burger du mois', type:'gold'}, {label:'Signature', type:''}],
    price: 'CHF 21.–',
    description: 'Le burger signature de la maison, né d\'une obsession pour la perfection. Double patty smashé à la perfection, sauce truffe maison travaillée pendant 48h, oignons caramélisés longuement mijotés, raclette fondue coulante et pickles artisanaux. Une explosion de saveurs que vous ne trouverez nulle part ailleurs à Morat.',
    ingredients: ['Double smash patty 180g', 'Raclette fondue', 'Oignons caramélisés 4h', 'Sauce truffe maison', 'Pickles artisanaux', 'Pain brioché toasté', 'Roquette fraîche'],
    tips: ['Servi chaud, à déguster immédiatement', 'Accompagné de frites maison incluses', 'Disponible en version sans gluten sur demande'],
    sell: 'Un burger <strong>conçu avec passion</strong>, pour ceux qui ne se contentent pas du ordinaire. La raclette fondue et la sauce truffe créent une harmonie unique, signature absolue de <strong>Smash YLLZ</strong>.',
    svg: getArushSVG(),
  },
  classic: {
    name: 'The Classic', nameEm: 'Smash',
    badges: [{label:'🏆 Best-seller', type:''}],
    price: 'CHF 16.–',
    description: 'Notre best-seller absolu depuis l\'ouverture. Deux patties smashés à la perfection sur plaque brûlante, cheddar fondu jusqu\'à couler, salade croquante fraîche du matin, cornichons maison et notre sauce secrète transmise depuis les débuts. Simple, mais exécuté mieux que personne.',
    ingredients: ['Double smash patty 160g', 'Cheddar fondu', 'Salade iceberg croquante', 'Cornichons maison', 'Sauce secrète YLLZ', 'Pain brioché doré'],
    tips: ['Notre recette inchangée depuis l\'ouverture', 'Le préféré de nos habitués', 'Idéal en menu avec frites & boisson'],
    sell: 'Quand quelque chose est parfait, <strong>on ne le change pas</strong>. Des années d\'affinage pour trouver l\'équilibre parfait entre viande, fromage et sauce. Le Classic, c\'est <strong>l\'âme de Smash YLLZ</strong>.',
    svg: getClassicSVG(),
  },
  smoke: {
    name: 'Smoke', nameEm: '& Fire',
    badges: [{label:'🔥 Intense', type:''}, {label:'Triple patty', type:'gold'}],
    price: 'CHF 19.–',
    description: 'Pour les vrais amateurs de viande. Triple patty smashé, bacon fumé lentement pendant 12h au bois de cerisier, oignons caramélisés dans leur jus pendant des heures, et notre sauce BBQ maison réduite à la perfection. Un burger qui s\'assume pleinement.',
    ingredients: ['Triple smash patty 240g', 'Bacon fumé cerisier 12h', 'Oignons caramélisés maison', 'Sauce BBQ réduite', 'Cheddar fumé', 'Pain brioché toasté au beurre'],
    tips: ['Recommandé pour les grands appétits', 'Bacon fumé livré chaque matin', 'Accord parfait avec une bière artisanale'],
    sell: 'Le bois de cerisier donne au bacon un arôme <strong>incomparable</strong>. Combiné au triple patty smashé, c\'est une expérience qui marque. Pour ceux qui veulent <strong>vivre intensément</strong>.',
    svg: getSmokeSVG(),
  },
  cheesy: {
    name: 'The', nameEm: 'Cheesy',
    badges: [{label:'🧀 4 Fromages', type:''}],
    price: 'CHF 17.–',
    description: 'Pour les inconditionnels du fromage. Quatre fromages soigneusement sélectionnés fondent ensemble en une cascade gourmande irrésistible : cheddar, gruyère, emmental et mozzarella. Avec oignons frits dorés et moutarde à l\'ancienne pour équilibrer la richesse.',
    ingredients: ['Smash patty 160g', 'Cheddar fondu', 'Gruyère suisse AOP', 'Emmental', 'Mozzarella', 'Oignons frits dorés', 'Moutarde à l\'ancienne', 'Pain brioché'],
    tips: ['Fromages suisses AOP privilégiés', 'Fondu à température précise', 'Le fromage coule à la commande'],
    sell: 'Quatre fromages d\'exception, dont des <strong>AOP suisses</strong>, fondus à la perfection. Chaque bouchée est une célébration de la gourmandise pure. Le burger des <strong>vrais amoureux du fromage</strong>.',
    svg: getCheeseySVG(),
  },
  green: {
    name: 'Green', nameEm: 'Smash',
    badges: [{label:'🌿 Végétarien', type:'green'}, {label:'100% Végane', type:'green'}],
    price: 'CHF 15.–',
    description: 'La preuve que végétarien peut rimer avec gourmand. Galette de pois chiches faite maison chaque jour, avocat frais en tranches épaisses, roquette du marché local, tomates cerises confites et mayo végane citronnée. Frais, rassasiant et délicieux.',
    ingredients: ['Galette pois chiches maison', 'Avocat frais', 'Roquette du marché', 'Tomates cerises confites', 'Mayo végane citronnée', 'Pain brioché végane'],
    tips: ['100% végane, 100% savoureux', 'Galette préparée chaque matin', 'Disponible sans gluten'],
    sell: 'Végétarien ne signifie pas <strong>sans caractère</strong>. La galette de pois chiches maison est dense, savoureuse, et l\'avocat apporte une onctuosité naturelle. Un burger qui <strong>surprend même les carnivores</strong>.',
    svg: getGreenSVG(),
  },
  hot: {
    name: 'Hot', nameEm: 'Mess',
    badges: [{label:'🌶️ Piquant', type:''}, {label:'Pour les courageux', type:''}],
    price: 'CHF 17.–',
    description: 'Réservé aux amateurs de sensations fortes. Patty épicé maison avec piment fumé, jalapeños frais tranchés à la commande, sauce sriracha maison, pickles pimentés et fromage pepper jack qui amplifie le feu. À consommer avec une bière fraîche à portée de main.',
    ingredients: ['Patty épicé piment fumé', 'Jalapeños frais', 'Sauce sriracha maison', 'Fromage pepper jack', 'Pickles pimentés', 'Oignons rouges frais', 'Pain brioché'],
    tips: ['Niveau de piment modifiable', 'Conseillé avec un milkshake 🧊', 'Parfait pour les amateurs de chaleur'],
    sell: 'Le Hot Mess n\'est pas pour tout le monde — il est pour <strong>ceux qui aiment avoir chaud</strong>. Chaque ingrédient amplifie le suivant. Une montée en puissance <strong>addictive</strong> du premier au dernier bite.',
    svg: getHotSVG(),
  },
  truffle: {
    name: 'Truffle', nameEm: 'Royale',
    badges: [{label:'✨ Premium', type:'gold'}, {label:'Wagyu', type:'gold'}],
    price: 'CHF 24.–',
    description: 'Notre burger d\'exception. Patty de bœuf wagyu japonais pour une tendreté inégalée, champignons sautés au beurre noisette, truffe noire râpée à la commande, comté affiné 18 mois au lait cru et mayo truffe artisanale. L\'expérience ultime.',
    ingredients: ['Patty wagyu A5 200g', 'Champignons sautés beurre', 'Truffe noire fraîche', 'Comté 18 mois lait cru', 'Mayo truffe artisanale', 'Pain brioché au beurre', 'Roquette micro-pousse'],
    tips: ['Wagyu livré deux fois par semaine', 'Truffe fraîche râpée devant vous', 'Accord parfait avec un verre de rouge'],
    sell: 'La truffe noire fraîche râpée à la commande libère un arôme <strong>envoûtant</strong>. Le wagyu fond en bouche d\'une manière que vous n\'oublierez pas. Notre burger <strong>Truffle Royale</strong>, c\'est une expérience gastronomique à part entière.',
    svg: getTruffleSVG(),
  },
  frites: {
    name: 'Frites', nameEm: 'Maison',
    badges: [{label:'🍟 Double friture', type:''}],
    price: 'CHF 6.–',
    description: 'Nos frites ne ressemblent pas aux autres. Pommes de terre fraîches épluchées chaque matin, une première friture pour cuire, une seconde à haute température pour rendre croustillantes à l\'extérieur et fondantes à l\'intérieur. Finies au sel de Guérande.',
    ingredients: ['Pommes de terre fraîches', 'Sel de Guérande', 'Huile de tournesol premium', 'Double friture maison'],
    tips: ['À manger immédiatement, bien chaudes', 'Disponibles avec 5 sauces au choix', 'Huile changée chaque jour'],
    sell: 'La double friture, c\'est le <strong>secret des meilleures frites</strong>. Croustillantes dehors, fondantes dedans. Avec le sel de Guérande, elles sont simplement <strong>parfaites</strong>.',
    svg: getFritesSVG(),
  },
  rings: {
    name: 'Onion', nameEm: 'Rings',
    badges: [{label:'🧅 Croustillants', type:''}],
    price: 'CHF 7.–',
    description: 'Les meilleurs onion rings de Morat. Oignons doux de saison, panure maison épicée dorée à la friteuse, servis immédiatement avec notre sauce ranch maison au buttermilk. Impossible de s\'arrêter à un seul.',
    ingredients: ['Oignons doux de saison', 'Panure maison épicée', 'Sauce ranch buttermilk', 'Friture huile tournesol'],
    tips: ['Servis brûlants, à partager', 'Sauce ranch préparée chaque jour', 'Parfaits en entrée'],
    sell: 'La panure maison épicée craque à chaque bouchée, révélant un oignon doux et fondant. Avec la sauce ranch buttermilk, <strong>c\'est irrésistible</strong>.',
    svg: getRingsSVG(),
  },
  sweetfries: {
    name: 'Sweet', nameEm: 'Fries',
    badges: [{label:'🍠 Nouveau', type:''}, {label:'Sucré-Épicé', type:''}],
    price: 'CHF 7.–',
    description: 'La nouvelle sensation de la carte. Frites de patate douce croustillantes, naturellement sucrées, servies avec notre sauce miel-sriracha maison qui crée un contraste sucré-épicé absolument addictif. Nouveau favori de nos clients.',
    ingredients: ['Patate douce fraîche', 'Sel épicé maison', 'Sauce miel-sriracha', 'Huile de tournesol'],
    tips: ['Nouveau sur la carte printemps 2025', 'Sauce séparée pour doser l\'épice', 'Option parfaite pour changer des frites classiques'],
    sell: 'La patate douce apporte une <strong>douceur naturelle</strong> qui contraste magnifiquement avec la sauce miel-sriracha. Sucré, épicé, croustillant — trois sensations en <strong>une seule bouchée</strong>.',
    svg: getSweetFriesSVG(),
  },
  milkshake: {
    name: 'Milk', nameEm: 'Shake',
    badges: [{label:'🥤 Fait maison', type:''}, {label:'3 parfums', type:''}],
    price: 'CHF 8.–',
    description: 'Nos milkshakes sont faits à la commande, jamais à l\'avance. Crème glacée artisanale, lait entier de la région, mixés à la consistance parfaite. Trois parfums : vanille bourbon de Madagascar, chocolat Valrhona 70%, caramel beurre salé breton.',
    ingredients: ['Crème glacée artisanale', 'Lait entier régional', 'Vanille bourbon Madagascar', 'Ou Chocolat Valrhona 70%', 'Ou Caramel beurre salé'],
    tips: ['Préparé à la commande uniquement', 'Possible en version sans lactose', 'Parfait pour adoucir le Hot Mess 😉'],
    sell: 'Chaque milkshake est une <strong>œuvre de quelques minutes</strong>. La crème glacée artisanale locale donne une richesse incomparable. Épais, froid, généreux — <strong>le meilleur à Morat</strong>.',
    svg: getMilkshakeSVG(),
  },
  biere: {
    name: 'Bières', nameEm: 'Artisanales',
    badges: [{label:'🍺 Locales', type:''}, {label:'Rotation mensuelle', type:''}],
    price: 'CHF 7–9.–',
    description: 'Nous sélectionnons chaque mois les meilleures bières artisanales de la région. Fribourg et ses environs regorgent de micro-brasseries talentueuses. Notre sélection change pour refléter les saisons et les nouvelles créations. Demandez la carte du mois.',
    ingredients: ['Sélection de 6 bières locales', 'Rotation mensuelle', 'Micro-brasseries fribourgoises', 'Blondes, ambrées, IPAs, stouts'],
    tips: ['Carte bière disponible sur demande', 'Suggestions d\'accords burger-bière', 'Option pression ou bouteille'],
    sell: 'Soutenir les <strong>micro-brasseries locales</strong> est une évidence pour nous. Chaque mois, nous découvrons avec vous les nouveautés des artisans fribourgeois. Beer & Burger, <strong>la combinaison parfaite</strong>.',
    svg: getBiereSVG(),
  },
  softs: {
    name: 'Softs &', nameEm: 'Jus Frais',
    badges: [{label:'🧃 Pressé du jour', type:'green'}],
    price: 'CHF 4–6.–',
    description: 'Des boissons fraîches pour accompagner votre repas. Sodas classiques en canette, eau pétillante des Alpes suisses, et nos jus frais pressés chaque matin selon les fruits de saison disponibles au marché de Morat.',
    ingredients: ['Eau pétillante suisse', 'Sodas classiques', 'Jus oranges fraîches', 'Jus pomme locale', 'Limonades artisanales'],
    tips: ['Jus pressés le matin uniquement', 'Eau de source alpine suisse', 'Limonades maison en été'],
    sell: 'Pour ceux qui ne boivent pas d\'alcool, nous avons une sélection soignée. Les jus frais pressés chaque matin sont <strong>une vraie alternative</strong> aux sodas industriels.',
    svg: getSoftsSVG(),
  },
  brownie: {
    name: 'Brownie', nameEm: 'Fondant',
    badges: [{label:'🍫 Fait maison', type:''}, {label:'Chocolat 70%', type:''}],
    price: 'CHF 9.–',
    description: 'Notre pâtissier prépare les brownies chaque matin. Chocolat noir 70% de qualité grand cru, beurre noisette, œufs frais de la ferme locale. Fondant au cœur, croustillant en surface. Servi tiède avec une boule de glace vanille et sauce caramel beurre salé breton.',
    ingredients: ['Chocolat noir 70% grand cru', 'Beurre noisette', 'Œufs fermiers', 'Glace vanille artisanale', 'Sauce caramel beurre salé'],
    tips: ['Préparé frais chaque matin', 'Servi tiède à la commande', 'Sans gluten possible sur demande'],
    sell: 'La croûte craque, le cœur est <strong>fondant et chaud</strong>. La glace vanille contraste magnifiquement avec le chocolat intense. Un final parfait pour votre repas <strong>Smash YLLZ</strong>.',
    svg: getBrownieSVG(),
  },
  cheesecake: {
    name: 'Cheesecake', nameEm: 'Fraise',
    badges: [{label:'🍓 New-Yorkais', type:''}],
    price: 'CHF 8.–',
    description: 'Un classique new-yorkais réinterprété avec des fraises fraîches de saison. Base crumble beurré croustillant, crème cheese onctueuse montée à la main, coulis de fraises fraîches légèrement sucré. Simple, élégant, irrésistible.',
    ingredients: ['Crème cheese Philadelphia', 'Fraises fraîches de saison', 'Crumble beurré', 'Coulis maison peu sucré'],
    tips: ['Recette new-yorkaise authentique', 'Fraises du marché de Morat', 'Disponible en version sans lactose'],
    sell: 'La vraie recette new-yorkaise, avec les fraises du marché local. Le contraste entre le crumble croustillant et la crème onctueuse est <strong>tout simplement parfait</strong>.',
    svg: getCheesecakeSVG(),
  },
  donut: {
    name: 'Donut', nameEm: 'Glazé',
    badges: [{label:'🍩 Maison', type:''}],
    price: 'CHF 5.–',
    description: 'Nos donuts sont frits chaque après-midi. Pâte levée légère et aérée, glaçage rose fondant et sprinkles colorés pour un maximum de joie. Un dessert qui met de bonne humeur, garanti.',
    ingredients: ['Pâte levée maison', 'Glaçage sucre rose', 'Sprinkles colorés', 'Friture fraîche'],
    tips: ['Frits chaque après-midi', 'Disponibles en d\'autres glaçages', 'Parfait avec un milkshake'],
    sell: 'Croquant dehors, aérien dedans, <strong>joyeux partout</strong>. Nos donuts maison sont la touche finale parfaite d\'un repas Smash YLLZ. Parce que la vie est trop courte pour ne pas se faire plaisir.',
    svg: getDonutSVG(),
  },
};

// ===== SVG FUNCTIONS =====
function getArushSVG() {
  return `<svg viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glA" cx="50%" cy="60%" r="50%"><stop offset="0%" stop-color="#e8522a" stop-opacity="0.4"/><stop offset="100%" stop-color="#e8522a" stop-opacity="0"/></radialGradient>
      <radialGradient id="btA" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#d4822a"/><stop offset="100%" stop-color="#8b4513"/></radialGradient>
      <radialGradient id="chG" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffd700"/><stop offset="100%" stop-color="#ff8c00"/></radialGradient>
    </defs>
    <ellipse cx="210" cy="325" rx="160" ry="28" fill="url(#glA)"/>
    <ellipse cx="210" cy="308" rx="145" ry="22" fill="#8b4513"/>
    <ellipse cx="210" cy="296" rx="145" ry="18" fill="#c1692a"/>
    <ellipse cx="210" cy="283" rx="140" ry="16" fill="#2d1a0e"/>
    <ellipse cx="210" cy="276" rx="138" ry="13" fill="#3d2010"/>
    <path d="M80,273 Q95,288 100,293 Q115,283 135,291 Q155,283 175,290 Q195,283 215,288 Q235,283 255,290 Q270,283 290,290 Q305,283 320,288 L340,273 L340,265 L80,265Z" fill="url(#chG)"/>
    <path d="M65,263 Q95,252 120,259 Q145,250 170,258 Q195,249 220,256 Q245,248 270,255 Q292,248 320,254 L340,252 L340,256 Q310,256 285,262 Q258,255 230,262 Q205,255 175,262 Q148,255 120,262 Q95,256 65,263Z" fill="#2d5a1b"/>
    <path d="M70,258 Q95,248 120,255 Q145,246 170,254 Q195,245 220,252 Q245,244 270,251 Q292,244 320,250 L340,248 L340,252 Q310,252 285,258 Q258,251 230,258 Q205,251 175,258 Q148,251 120,258 Q95,252 70,258Z" fill="#3d7a2b"/>
    <ellipse cx="210" cy="242" rx="138" ry="14" fill="#2d1a0e"/>
    <ellipse cx="210" cy="236" rx="136" ry="11" fill="#3d2010"/>
    <ellipse cx="150" cy="234" rx="15" ry="6" fill="#cc3300" opacity="0.8"/>
    <ellipse cx="210" cy="232" rx="20" ry="5" fill="#cc3300" opacity="0.8"/>
    <ellipse cx="270" cy="234" rx="14" ry="5" fill="#cc3300" opacity="0.8"/>
    <path d="M85,230 Q120,222 155,227 Q185,220 210,225 Q235,220 265,225 Q295,220 335,224 L335,229 Q295,226 265,230 Q235,226 210,230 Q185,226 155,231 Q120,227 85,230Z" fill="#c17f24"/>
    <ellipse cx="210" cy="200" rx="148" ry="28" fill="#8b4513"/>
    <path d="M62,200 Q65,155 100,133 Q140,115 210,112 Q280,115 320,133 Q355,155 358,200 Z" fill="url(#btA)"/>
    <ellipse cx="160" cy="145" rx="10" ry="5" fill="#f5deb3" transform="rotate(-20,160,145)"/>
    <ellipse cx="195" cy="127" rx="10" ry="5" fill="#f5deb3" transform="rotate(10,195,127)"/>
    <ellipse cx="230" cy="125" rx="10" ry="5" fill="#f5deb3" transform="rotate(-5,230,125)"/>
    <ellipse cx="265" cy="135" rx="10" ry="5" fill="#f5deb3" transform="rotate(15,265,135)"/>
    <ellipse cx="180" cy="160" rx="8" ry="4" fill="#f5deb3" transform="rotate(5,180,160)"/>
    <ellipse cx="240" cy="155" rx="8" ry="4" fill="#f5deb3" transform="rotate(-10,240,155)"/>
    <circle cx="345" cy="100" r="35" fill="#e8522a"/>
    <text x="345" y="91" text-anchor="middle" font-size="13" fill="white" font-weight="bold" font-family="sans-serif">DU</text>
    <text x="345" y="106" text-anchor="middle" font-size="13" fill="white" font-weight="bold" font-family="sans-serif">MOIS</text>
    <text x="345" y="122" text-anchor="middle" font-size="16" fill="#ffd700">★</text>
  </svg>`;
}

function getClassicSVG() {
  return `<svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bC2" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#d4822a"/><stop offset="100%" stop-color="#8b4513"/></radialGradient></defs>
    <ellipse cx="180" cy="295" rx="140" ry="20" fill="#e8522a" opacity="0.2"/>
    <ellipse cx="180" cy="280" rx="138" ry="18" fill="#8b4513"/>
    <ellipse cx="180" cy="268" rx="138" ry="14" fill="#c1692a"/>
    <ellipse cx="180" cy="256" rx="135" ry="13" fill="#2d1a0e"/>
    <ellipse cx="180" cy="248" rx="133" ry="11" fill="#3d2010"/>
    <path d="M48,245 Q78,236 108,242 Q133,233 155,240 Q175,232 200,239 Q220,232 252,237 L252,244 Q220,241 200,246 Q175,241 155,246 Q133,241 108,248 Q78,244 48,245Z" fill="#ffd700" opacity="0.9"/>
    <path d="M45,238 Q78,228 110,235 Q135,226 158,233 Q178,225 205,232 Q225,225 255,229 L253,236 Q225,232 205,238 Q178,232 158,239 Q135,232 110,241 Q78,237 45,238Z" fill="#2d5a1b"/>
    <ellipse cx="180" cy="222" rx="134" ry="12" fill="#2d1a0e"/>
    <ellipse cx="180" cy="215" rx="132" ry="10" fill="#3d2010"/>
    <ellipse cx="135" cy="213" rx="14" ry="5" fill="#cc3300" opacity="0.7"/>
    <ellipse cx="178" cy="211" rx="17" ry="4" fill="#cc3300" opacity="0.7"/>
    <ellipse cx="222" cy="213" rx="13" ry="4" fill="#cc3300" opacity="0.7"/>
    <ellipse cx="180" cy="196" rx="140" ry="22" fill="#8b4513"/>
    <path d="M40,196 Q43,160 75,140 Q110,122 180,120 Q250,122 285,140 Q317,160 320,196 Z" fill="url(#bC2)"/>
    <ellipse cx="143" cy="152" rx="9" ry="4" fill="#f5deb3" transform="rotate(-15,143,152)"/>
    <ellipse cx="175" cy="138" rx="9" ry="4" fill="#f5deb3" transform="rotate(5,175,138)"/>
    <ellipse cx="210" cy="143" rx="9" ry="4" fill="#f5deb3" transform="rotate(10,210,143)"/>
    <ellipse cx="160" cy="165" rx="7" ry="3.5" fill="#f5deb3" transform="rotate(-5,160,165)"/>
    <ellipse cx="198" cy="162" rx="7" ry="3.5" fill="#f5deb3" transform="rotate(8,198,162)"/>
  </svg>`;
}

function getSmokeSVG() {
  return `<svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bS2" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#b8621a"/><stop offset="100%" stop-color="#6b3410"/></radialGradient></defs>
    <ellipse cx="180" cy="295" rx="140" ry="20" fill="#e8522a" opacity="0.2"/>
    <ellipse cx="180" cy="280" rx="138" ry="18" fill="#6b3410"/>
    <ellipse cx="180" cy="268" rx="138" ry="14" fill="#a15420"/>
    <ellipse cx="180" cy="256" rx="135" ry="13" fill="#1a0f07"/>
    <ellipse cx="180" cy="248" rx="133" ry="11" fill="#2a1508"/>
    <path d="M45,245 Q78,237 108,243 Q133,234 155,241 Q175,233 200,240 Q220,233 255,237 L253,245 Q220,242 200,247 Q175,242 155,248 Q133,242 108,250 Q78,246 45,245Z" fill="#8B4513" opacity="0.8"/>
    <ellipse cx="180" cy="232" rx="134" ry="12" fill="#1a0f07"/>
    <ellipse cx="180" cy="225" rx="132" ry="10" fill="#2a1508"/>
    <path d="M48,222 Q78,214 108,220 Q133,212 155,218 Q175,211 200,217 Q220,211 255,215 L253,222 Q220,219 200,224 Q175,219 155,225 Q133,219 108,226 Q78,222 48,222Z" fill="#8b1a1a"/>
    <path d="M50,218 Q80,210 110,216 Q135,208 157,214 Q177,207 202,213 Q222,207 257,211 L255,218 Q222,215 202,220 Q177,215 157,221 Q135,215 110,222 Q80,217 50,218Z" fill="#cc2200"/>
    <ellipse cx="180" cy="202" rx="134" ry="12" fill="#1a0f07"/>
    <ellipse cx="180" cy="195" rx="132" ry="10" fill="#2a1508"/>
    <ellipse cx="140" cy="193" rx="15" ry="5" fill="#3d0000" opacity="0.8"/>
    <ellipse cx="178" cy="191" rx="19" ry="4" fill="#3d0000" opacity="0.8"/>
    <ellipse cx="218" cy="193" rx="14" ry="4" fill="#3d0000" opacity="0.8"/>
    <ellipse cx="180" cy="173" rx="140" ry="22" fill="#6b3410"/>
    <path d="M40,173 Q43,137 75,117 Q110,99 180,97 Q250,99 285,117 Q317,137 320,173 Z" fill="url(#bS2)"/>
    <ellipse cx="143" cy="129" rx="9" ry="4" fill="#f5deb3" transform="rotate(-15,143,129)"/>
    <ellipse cx="175" cy="115" rx="9" ry="4" fill="#f5deb3" transform="rotate(5,175,115)"/>
    <ellipse cx="210" cy="120" rx="9" ry="4" fill="#f5deb3" transform="rotate(10,210,120)"/>
  </svg>`;
}

function getCheeseySVG() { return getClassicSVG().replace('bC2','bCH').replace('#ffd700','#ffa500'); }
function getGreenSVG() { return getClassicSVG().replace('#2d1a0e','#3d5a1b').replace('#3d2010','#4a6e22').replace('#c1692a','#7cb342').replace('#8b4513','#558b2f'); }
function getHotSVG() { return getSmokeSVG().replace(/#6b3410/g,'#7b241c').replace(/#a15420/g,'#a93226').replace(/#1a0f07/g,'#1a0505').replace(/#2a1508/g,'#2a0808'); }
function getTruffleSVG() { return getClassicSVG(); }
function getFritesSVG() { return `<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f5d05a"/><stop offset="100%" stop-color="#c8860a"/></linearGradient></defs><ellipse cx="150" cy="265" rx="90" ry="14" fill="#e8522a" opacity="0.2"/><path d="M75,245 L88,130 L212,130 L225,245 Z" fill="#cc2200"/><rect x="70" y="125" width="160" height="20" rx="5" fill="#cc2200"/><rect x="70" y="125" width="160" height="10" rx="5" fill="#dd3300"/><rect x="98" y="50" width="15" height="90" rx="7" fill="url(#fg2)"/><rect x="120" y="35" width="15" height="100" rx="7" fill="url(#fg2)"/><rect x="142" y="42" width="15" height="95" rx="7" fill="url(#fg2)"/><rect x="164" y="30" width="15" height="105" rx="7" fill="url(#fg2)"/><rect x="186" y="44" width="14" height="93" rx="7" fill="url(#fg2)"/><circle cx="130" cy="70" r="3" fill="white" opacity="0.7"/><circle cx="158" cy="55" r="3" fill="white" opacity="0.7"/><circle cx="175" cy="75" r="3" fill="white" opacity="0.7"/><text x="150" y="210" text-anchor="middle" font-size="12" fill="white" font-weight="bold" font-family="sans-serif">SMASH YLLZ</text></svg>`; }
function getRingsSVG() { return `<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="rg2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f5d05a"/><stop offset="100%" stop-color="#c8860a"/></radialGradient></defs><ellipse cx="150" cy="265" rx="100" ry="14" fill="#e8522a" opacity="0.2"/><ellipse cx="150" cy="225" rx="100" ry="26" fill="#c8860a"/><ellipse cx="150" cy="218" rx="100" ry="26" fill="#f5d05a"/><ellipse cx="150" cy="218" rx="65" ry="17" fill="#c8860a"/><ellipse cx="150" cy="215" rx="65" ry="17" fill="#d4922a"/><ellipse cx="150" cy="185" rx="92" ry="24" fill="#c8860a"/><ellipse cx="150" cy="178" rx="92" ry="24" fill="#f5d05a"/><ellipse cx="150" cy="178" rx="59" ry="15" fill="#c8860a"/><ellipse cx="150" cy="175" rx="59" ry="15" fill="#d4922a"/><ellipse cx="150" cy="148" rx="84" ry="22" fill="#c8860a"/><ellipse cx="150" cy="141" rx="84" ry="22" fill="#f5d05a"/><ellipse cx="150" cy="141" rx="53" ry="14" fill="#c8860a"/><ellipse cx="150" cy="138" rx="53" ry="14" fill="#d4922a"/><path d="M225,200 L218,252 Q218,260 232,260 Q246,260 246,252 L239,200 Z" fill="#cc2200"/><ellipse cx="232" cy="200" rx="12" ry="6" fill="#dd3300"/></svg>`; }
function getSweetFriesSVG() { return getFritesSVG().replace(/#cc2200/g,'#e65100').replace(/#dd3300/g,'#f57c00').replace(/stop-color="#f5d05a"/g,'stop-color="#ff8c42"').replace(/stop-color="#c8860a"/g,'stop-color="#c0392b"'); }
function getMilkshakeSVG() { return `<svg viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="shk2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#e91e8c"/></linearGradient></defs><ellipse cx="150" cy="310" rx="70" ry="12" fill="#e91e8c" opacity="0.2"/><path d="M90,80 L76,290 Q76,302 150,302 Q224,302 224,290 L210,80 Z" fill="url(#shk2)" opacity="0.9"/><path d="M90,80 L100,80 L86,290 Q76,300 76,290Z" fill="white" opacity="0.15"/><ellipse cx="150" cy="82" rx="62" ry="22" fill="white"/><path d="M88,80 Q108,58 128,72 Q140,54 150,67 Q162,52 174,67 Q186,56 212,72 L212,80 Q186,65 174,73 Q162,56 150,70 Q140,58 128,76 Q108,62 88,80Z" fill="white"/><circle cx="150" cy="50" r="12" fill="#cc0000"/><path d="M150,38 Q160,22 168,28" stroke="#4a2500" stroke-width="2.5" fill="none"/><rect x="172" y="12" width="10" height="130" rx="5" fill="#f44336"/><rect x="172" y="12" width="5" height="130" rx="2.5" fill="#ff7043"/><rect x="118" y="60" width="10" height="4" rx="2" fill="#ff5722" transform="rotate(-30,118,60)"/><rect x="143" y="52" width="10" height="4" rx="2" fill="#2196f3" transform="rotate(20,143,52)"/><rect x="168" y="62" width="10" height="4" rx="2" fill="#4caf50" transform="rotate(-15,168,62)"/><rect x="130" y="70" width="10" height="4" rx="2" fill="#ffd700" transform="rotate(30,130,70)"/></svg>`; }
function getBiereSVG() { return `<svg viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="br2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f9a825"/><stop offset="100%" stop-color="#e65100"/></linearGradient></defs><ellipse cx="150" cy="308" rx="65" ry="12" fill="#f9a825" opacity="0.2"/><path d="M88,85 L78,295 Q78,306 150,306 Q222,306 222,295 L212,85 Z" fill="url(#br2)" opacity="0.9"/><path d="M212,105 Q252,105 252,150 Q252,195 212,195" stroke="#c17900" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M212,105 Q244,105 244,150 Q244,195 212,195" stroke="#f9a825" stroke-width="9" fill="none" stroke-linecap="round"/><ellipse cx="150" cy="87" rx="65" ry="24" fill="white"/><circle cx="115" cy="74" r="20" fill="white"/><circle cx="142" cy="68" r="22" fill="white"/><circle cx="168" cy="70" r="20" fill="white"/><circle cx="188" cy="78" r="16" fill="white"/><circle cx="122" cy="170" r="5" fill="white" opacity="0.3"/><circle cx="150" cy="145" r="4" fill="white" opacity="0.3"/><circle cx="172" cy="185" r="6" fill="white" opacity="0.3"/><circle cx="132" cy="210" r="4" fill="white" opacity="0.3"/></svg>`; }
function getSoftsSVG() { return getMilkshakeSVG().replace(/#f8bbd0/g,'#81d4fa').replace(/#e91e8c/g,'#0288d1').replace(/cc0000/g,'0288d1'); }
function getBrownieSVG() { return `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="brw2" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#5d2e0c"/><stop offset="100%" stop-color="#3e1a05"/></radialGradient></defs><ellipse cx="180" cy="285" rx="130" ry="15" fill="#5d2e0c" opacity="0.2"/><path d="M50,115 L310,115 L310,255 Q310,268 180,268 Q50,268 50,255 Z" fill="url(#brw2)"/><path d="M50,115 L310,115 L310,128 L50,128Z" fill="#7a3e10"/><path d="M80,145 Q115,136 145,148 Q172,138 200,146 Q225,138 260,145" stroke="#2a1208" stroke-width="2.5" fill="none" opacity="0.5"/><path d="M70,172 Q110,162 148,172 Q175,163 215,172 Q240,163 290,170" stroke="#2a1208" stroke-width="2.5" fill="none" opacity="0.5"/><path d="M95,115 Q93,98 91,86 Q89,74 95,115" fill="#1a0a02"/><path d="M135,115 Q134,96 132,82 Q130,68 136,115" fill="#1a0a02"/><path d="M178,115 Q177,100 175,86 Q173,72 179,115" fill="#1a0a02"/><path d="M218,115 Q217,100 215,87 Q213,74 219,115" fill="#1a0a02"/><path d="M258,115 Q256,99 254,86 Q252,73 259,115" fill="#1a0a02"/><ellipse cx="180" cy="100" rx="60" ry="36" fill="#fdf3dc"/><ellipse cx="180" cy="88" rx="53" ry="27" fill="#fff8e7"/><path d="M133,84 Q158,96 180,88 Q202,100 228,91" stroke="#c8860a" stroke-width="3.5" fill="none" opacity="0.85"/><path d="M140,96 Q165,108 185,100 Q207,112 232,103" stroke="#c8860a" stroke-width="2.5" fill="none" opacity="0.6"/></svg>`; }
function getCheesecakeSVG() { return `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ck2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff9f0"/><stop offset="100%" stop-color="#ffe0b2"/></linearGradient></defs><ellipse cx="180" cy="285" rx="120" ry="15" fill="#ff7043" opacity="0.2"/><path d="M50,218 L80,255 Q80,268 180,268 Q280,268 280,255 L310,218 Z" fill="#8d6e63"/><path d="M50,218 L310,218 L310,228 L50,228Z" fill="#a1887f"/><path d="M180,65 L50,222 L310,222 Z" fill="url(#ck2)"/><path d="M180,65 L310,222 L320,210 L192,55Z" fill="#fff3e0"/><ellipse cx="180" cy="68" rx="36" ry="14" fill="#e53935" opacity="0.9"/><ellipse cx="148" cy="88" rx="24" ry="11" fill="#e53935" opacity="0.8"/><ellipse cx="210" cy="95" rx="22" ry="10" fill="#e53935" opacity="0.8"/><ellipse cx="160" cy="116" rx="18" ry="9" fill="#e53935" opacity="0.7"/><ellipse cx="200" cy="120" rx="16" ry="8" fill="#e53935" opacity="0.65"/><circle cx="178" cy="67" r="2.5" fill="#b71c1c" opacity="0.5"/><circle cx="186" cy="72" r="2.5" fill="#b71c1c" opacity="0.5"/><circle cx="173" cy="74" r="2.5" fill="#b71c1c" opacity="0.5"/></svg>`; }
function getDonutSVG() { return `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="dn2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f5cba7"/><stop offset="100%" stop-color="#e67e22"/></radialGradient></defs><ellipse cx="180" cy="282" rx="120" ry="15" fill="#e67e22" opacity="0.2"/><ellipse cx="180" cy="175" rx="118" ry="72" fill="url(#dn2)"/><ellipse cx="180" cy="168" rx="118" ry="65" fill="#f0b27a"/><ellipse cx="180" cy="172" rx="43" ry="27" fill="#1a1612"/><path d="M100,108 Q135,88 180,91 Q225,88 260,108 Q272,120 267,130 Q248,118 222,114 Q202,110 180,112 Q158,110 138,114 Q112,118 93,130 Q88,120 100,108Z" fill="#ff6b9d" opacity="0.9"/><rect x="118" y="98" width="12" height="5" rx="2" fill="#ff5722" transform="rotate(-30,118,98)"/><rect x="148" y="91" width="12" height="5" rx="2" fill="#2196f3" transform="rotate(20,148,91)"/><rect x="178" y="93" width="12" height="5" rx="2" fill="#4caf50" transform="rotate(-15,178,93)"/><rect x="208" y="99" width="12" height="5" rx="2" fill="#ffd700" transform="rotate(25,208,99)"/><rect x="133" y="110" width="10" height="4" rx="2" fill="#9c27b0" transform="rotate(10,133,110)"/><rect x="200" y="108" width="10" height="4" rx="2" fill="#ff9800" transform="rotate(-20,200,108)"/></svg>`; }

// ===== OPEN ARTICLE PAGE =====
function openArticle(id) {
  const item = articles[id];
  if (!item) return;

  document.body.style.overflow = 'hidden';
  const page = document.getElementById('articlePage');
  page.classList.remove('hidden');

  const badgesHTML = item.badges.map(b => `<span class="article-badge ${b.type}">${b.label}</span>`).join('');
  const ingrHTML = item.ingredients.map(i => `<li>${i}</li>`).join('');
  const tipsHTML = item.tips.map(t => `<li>${t}</li>`).join('');

  document.getElementById('articleContent').innerHTML = `
    <div class="article-hero">
      <div class="article-img-wrap">${item.svg}</div>
      <div class="article-meta">
        <div class="article-badge-row">${badgesHTML}</div>
        <h1>${item.name}<br/><em>${item.nameEm}</em></h1>
        <p class="article-description">${item.description}</p>
        <div class="article-price-row">
          <span class="article-price">${item.price}</span>
        </div>
        <button class="article-cta" onclick="closeArticle()">← Revenir au menu</button>
      </div>
    </div>
    <div class="article-details">
      <div class="article-detail-block">
        <h3>📋 Ingrédients</h3>
        <ul class="ingredient-list">${ingrHTML}</ul>
      </div>
      <div class="article-detail-block">
        <h3>💡 Le savoir-faire</h3>
        <ul class="ingredient-list">${tipsHTML}</ul>
      </div>
    </div>
    <div class="article-sell">
      <p>${item.sell}</p>
    </div>
  `;

  page.scrollTop = 0;
}

function closeArticle() {
  document.getElementById('articlePage').classList.add('hidden');
  document.body.style.overflow = '';
}

// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE MENU =====
document.getElementById('burgerBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

// ===== MENU TABS =====
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.menu-grid').forEach(g => g.classList.add('hidden'));
    const grid = document.getElementById(tab.dataset.tab);
    if (grid) {
      grid.classList.remove('hidden');
      grid.querySelectorAll('.menu-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 60);
      });
    }
  });
});

// ===== GUEST COUNTER =====
let guestCount = 2;
function changeCount(delta) {
  guestCount = Math.max(1, Math.min(20, guestCount + delta));
  document.getElementById('guestCount').textContent = guestCount;
}

// ===== RESERVATION FORM =====
function submitResa(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('resaForm').classList.add('hidden');
    document.getElementById('resaSuccess').classList.remove('hidden');
  }, 1200);
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.menu-card, .g-item, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

// ===== MIN DATE =====
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
