// ===========================
// ITEMS DATABASE
// ===========================
const ITEMS = {
  arush:      { name:'Arush Burger',        price:21,  cat:'burgers',  img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    badges:[{l:'⭐ Burger du mois',t:'gold'},{l:'Signature',t:''}],
    desc:'Le burger signature de la maison, né d\'une obsession pour la perfection. Double patty smashé à la plaque brûlante, sauce truffe travaillée 48h, oignons caramélisés mijotés pendant 4 heures, raclette fondue coulante et pickles artisanaux tranchés à la main. Une explosion de saveurs unique à Morat.',
    ingr:['Double smash patty 180g','Raclette suisse fondue','Oignons caramélisés 4h','Sauce truffe maison 48h','Pickles artisanaux','Pain brioché toasté','Roquette fraîche'],
    tips:['Servi chaud, à déguster immédiatement','Frites maison incluses dans le menu','Disponible sans gluten sur demande'],
    story:'Un burger <strong>conçu pour marquer les esprits</strong>. La raclette fondue coule entre les patties smashés, la truffe parfume chaque bouchée. C\'est la signature absolue de <strong>Smash YLLZ</strong> — introuvable ailleurs à Morat.',
    also:['classic','smoke','truffle'] },

  classic:    { name:'The Classic Smash',   price:16,  cat:'burgers',  img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    badges:[{l:'🏆 Best-seller',t:''},{l:'Signature',t:''}],
    desc:'Notre best-seller absolu depuis l\'ouverture. Deux patties smashés à la perfection sur plaque brûlante, cheddar fondu jusqu\'à couler, salade croquante fraîche du matin, cornichons maison et notre sauce secrète transmise depuis les débuts. Simple mais exécuté mieux que personne.',
    ingr:['Double smash patty 160g','Cheddar américain fondu','Salade iceberg fraîche','Cornichons maison','Sauce secrète YLLZ','Pain brioché doré au beurre'],
    tips:['Recette inchangée depuis l\'ouverture','Le préféré de nos habitués','Idéal en menu avec frites et boisson'],
    story:'Quand quelque chose est parfait, <strong>on ne le change pas</strong>. Des années d\'affinage pour trouver l\'équilibre parfait entre viande, fromage et sauce. Le Classic, c\'est <strong>l\'âme de Smash YLLZ</strong>.',
    also:['arush','cheesy','smoke'] },

  smoke:      { name:'Smoke & Fire',         price:19,  cat:'burgers',  img:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80',
    badges:[{l:'🔥 Intense',t:''},{l:'Triple patty',t:'gold'}],
    desc:'Pour les vrais amateurs de viande. Triple patty smashé, bacon fumé lentement 12h au bois de cerisier, oignons caramélisés longuement dans leur jus, et sauce BBQ maison réduite à la perfection. Un burger qui s\'assume pleinement et ne laisse personne indifférent.',
    ingr:['Triple smash patty 240g','Bacon fumé cerisier 12h','Oignons caramélisés maison','Sauce BBQ réduite','Cheddar fumé','Pain brioché toasté au beurre'],
    tips:['Recommandé pour les grands appétits','Bacon fumé livré frais chaque matin','Accord parfait avec une bière artisanale'],
    story:'Le bois de cerisier donne au bacon un arôme <strong>incomparable</strong>. Combiné au triple patty smashé et à la sauce BBQ maison, c\'est une expérience qui marque. Pour ceux qui veulent <strong>vivre intensément</strong>.',
    also:['arush','hot','truffle'] },

  cheesy:     { name:'The Cheesy',           price:17,  cat:'burgers',  img:'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80',
    badges:[{l:'🧀 4 Fromages',t:''}],
    desc:'Pour les inconditionnels du fromage. Quatre fromages soigneusement sélectionnés fondent ensemble en une cascade gourmande : cheddar, gruyère AOP suisse, emmental et mozzarella. Avec oignons frits dorés et moutarde à l\'ancienne pour équilibrer la richesse.',
    ingr:['Smash patty 160g','Cheddar fondu','Gruyère suisse AOP','Emmental','Mozzarella','Oignons frits dorés','Moutarde à l\'ancienne','Pain brioché'],
    tips:['Fromages suisses AOP privilégiés','Fondu à température précise','Le fromage coule à la commande'],
    story:'Quatre fromages d\'exception, dont des <strong>AOP suisses</strong>, fondus ensemble à la perfection. Chaque bouchée est une célébration de la gourmandise pure. Le burger des <strong>vrais amoureux du fromage</strong>.',
    also:['classic','arush','truffle'] },

  green:      { name:'Green Smash',          price:15,  cat:'burgers',  img:'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80',
    badges:[{l:'🌿 Végétarien',t:'green'},{l:'100% Végane',t:'green'}],
    desc:'La preuve que végétarien peut rimer avec gourmand. Galette de pois chiches faite maison chaque jour, avocat frais en tranches épaisses, roquette du marché local de Morat, tomates cerises confites et mayo végane citronnée. Frais, rassasiant et délicieux.',
    ingr:['Galette pois chiches maison','Avocat frais tranché','Roquette du marché local','Tomates cerises confites','Mayo végane citronnée','Pain brioché végane'],
    tips:['100% végane, 0% compromis sur le goût','Galette préparée chaque matin','Disponible sans gluten'],
    story:'Végétarien ne signifie pas <strong>sans caractère</strong>. La galette de pois chiches maison est dense et savoureuse, l\'avocat apporte une onctuosité naturelle. Un burger qui <strong>surprend même les carnivores</strong>.',
    also:['classic','cheesy','frites'] },

  hot:        { name:'Hot Mess',             price:17,  cat:'burgers',  img:'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80',
    badges:[{l:'🌶️ Piquant',t:''},{l:'Pour les courageux',t:''}],
    desc:'Réservé aux amateurs de sensations fortes. Patty épicé maison avec piment fumé, jalapeños frais tranchés à la commande, sauce sriracha maison, pickles pimentés et fromage pepper jack qui amplifie le feu. À consommer avec une bière froide à portée de main.',
    ingr:['Patty épicé piment fumé','Jalapeños frais','Sauce sriracha maison','Fromage pepper jack','Pickles pimentés','Oignons rouges frais','Pain brioché'],
    tips:['Niveau de piment modifiable','Conseillé avec un milkshake 🧊','Parfait pour les amateurs de chaleur'],
    story:'Le Hot Mess n\'est pas pour tout le monde — il est pour <strong>ceux qui aiment avoir chaud</strong>. Chaque ingrédient amplifie le suivant. Une montée en puissance <strong>addictive</strong> du premier au dernier bite.',
    also:['smoke','classic','milkshake'] },

  truffle:    { name:'Truffle Royale',        price:24,  cat:'burgers',  img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80',
    badges:[{l:'✨ Premium',t:'gold'},{l:'Wagyu',t:'gold'}],
    desc:'Notre burger d\'exception. Patty de bœuf wagyu japonais pour une tendreté inégalée, champignons sautés au beurre noisette, truffe noire râpée à la commande, comté affiné 18 mois au lait cru et mayo truffe artisanale. L\'expérience gastronomique ultime.',
    ingr:['Patty wagyu A5 200g','Champignons sautés beurre noisette','Truffe noire fraîche râpée','Comté 18 mois lait cru','Mayo truffe artisanale','Roquette micro-pousse','Pain brioché au beurre'],
    tips:['Wagyu livré deux fois par semaine','Truffe fraîche râpée devant vous','Accord parfait avec un verre de rouge'],
    story:'La truffe noire fraîche râpée à la commande libère un arôme <strong>envoûtant</strong>. Le wagyu fond en bouche d\'une manière que vous n\'oublierez pas. Notre burger <strong>Truffle Royale</strong>, c\'est une expérience gastronomique à part entière.',
    also:['arush','cheesy','biere'] },

  frites:     { name:'Frites Maison',         price:6,   cat:'sides',   img:'https://images.unsplash.com/photo-1576107232684-1279f5dd1571?w=600&q=80',
    badges:[{l:'🍟 Double friture',t:''}],
    desc:'Nos frites ne ressemblent pas aux autres. Pommes de terre fraîches épluchées chaque matin, une première friture pour cuire à cœur, une seconde à haute température pour rendre croustillantes à l\'extérieur et fondantes à l\'intérieur. Finies au sel de Guérande.',
    ingr:['Pommes de terre fraîches','Sel de Guérande','Huile de tournesol premium','Double friture maison'],
    tips:['À manger immédiatement bien chaudes','5 sauces au choix','Huile changée chaque jour'],
    story:'La double friture, c\'est le <strong>secret des meilleures frites</strong>. Croustillantes dehors, fondantes dedans. Avec le sel de Guérande, elles sont simplement <strong>parfaites</strong>.',
    also:['rings','sweetfries','coleslaw'] },

  rings:      { name:'Onion Rings',           price:7,   cat:'sides',   img:'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80',
    badges:[{l:'🧅 Croustillants',t:''}],
    desc:'Les meilleurs onion rings de Morat. Oignons doux de saison, panure maison épicée dorée à la friteuse, servis immédiatement avec notre sauce ranch maison au buttermilk. Impossible de s\'arrêter à un seul.',
    ingr:['Oignons doux de saison','Panure maison épicée','Sauce ranch buttermilk','Friture huile tournesol'],
    tips:['Servis brûlants à partager','Sauce ranch préparée chaque jour','Parfaits en entrée'],
    story:'La panure maison épicée craque à chaque bouchée, révélant un oignon doux et fondant. Avec la sauce ranch buttermilk, <strong>c\'est irrésistible</strong>.',
    also:['frites','sweetfries','coleslaw'] },

  sweetfries: { name:'Sweet Fries',           price:7,   cat:'sides',   img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80',
    badges:[{l:'🍠 Nouveau',t:''},{l:'Sucré-Épicé',t:''}],
    desc:'La nouvelle sensation de la carte. Frites de patate douce croustillantes, naturellement sucrées, servies avec notre sauce miel-sriracha maison qui crée un contraste sucré-épicé absolument addictif. Le nouveau favori de nos clients.',
    ingr:['Patate douce fraîche','Sel épicé maison','Sauce miel-sriracha','Huile de tournesol'],
    tips:['Nouveau sur la carte 2025','Sauce séparée pour doser l\'épice','Option parfaite pour changer des classiques'],
    story:'La patate douce apporte une <strong>douceur naturelle</strong> qui contraste magnifiquement avec la sauce miel-sriracha. Sucré, épicé, croustillant — trois sensations en <strong>une seule bouchée</strong>.',
    also:['frites','rings','coleslaw'] },

  coleslaw:   { name:'Coleslaw',              price:5,   cat:'sides',   img:'https://images.unsplash.com/photo-1621510091072-7eec46c5fc5e?w=600&q=80',
    badges:[{l:'🥗 Frais',t:'green'}],
    desc:'Un coleslaw comme on les aime. Chou blanc croquant, carottes râpées fraîches, ciboulette du jardin, mayo légère maison et une touche de vinaigre de cidre pour l\'acidité. Léger, frais et parfait pour accompagner un burger intense.',
    ingr:['Chou blanc frais','Carottes râpées','Ciboulette fraîche','Mayo légère maison','Vinaigre de cidre'],
    tips:['Préparé le matin même','Idéal pour équilibrer un repas','Option fraîche et légère'],
    story:'Le coleslaw parfait est celui qui <strong>rafraîchit et équilibre</strong>. Notre version légère et acidulée est l\'accompagnement idéal pour nos burgers généreux. <strong>Simple, frais, efficace</strong>.',
    also:['frites','rings','sweetfries'] },

  milkshake:  { name:'Milkshakes',            price:8,   cat:'drinks',  img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80',
    badges:[{l:'🥤 Fait maison',t:''},{l:'3 parfums',t:''}],
    desc:'Nos milkshakes sont faits à la commande, jamais à l\'avance. Crème glacée artisanale locale, lait entier de la région, mixés à la consistance parfaite. Trois parfums : vanille bourbon de Madagascar, chocolat Valrhona 70%, caramel beurre salé breton.',
    ingr:['Crème glacée artisanale','Lait entier régional','Vanille bourbon Madagascar','Ou Chocolat Valrhona 70%','Ou Caramel beurre salé'],
    tips:['Préparé à la commande uniquement','Possible en version sans lactose','Parfait pour adoucir le Hot Mess 😉'],
    story:'Chaque milkshake est une <strong>œuvre de quelques minutes</strong>. La crème glacée artisanale locale donne une richesse incomparable. Épais, froid, généreux — <strong>le meilleur à Morat</strong>.',
    also:['biere','softs','brownie'] },

  biere:      { name:'Bières Artisanales',    price:8,   cat:'drinks',  img:'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80',
    badges:[{l:'🍺 Locales',t:''},{l:'Rotation mensuelle',t:''}],
    desc:'Nous sélectionnons chaque mois les meilleures bières artisanales de la région fribourgeoise. Blondes, ambrées, IPAs, stouts — notre cave tourne pour refléter les créations des meilleurs artisans locaux. Demandez la carte du mois à votre serveur.',
    ingr:['6 bières locales en rotation','Micro-brasseries fribourgoises','Blondes · Ambrées · IPAs · Stouts','Pression ou bouteille'],
    tips:['Carte bière disponible sur demande','Suggestions d\'accords burger-bière','Option pression ou bouteille'],
    story:'Soutenir les <strong>micro-brasseries locales</strong> est une évidence pour nous. Chaque mois, nous découvrons avec vous les nouveautés des artisans fribourgeois. Beer & Burger, <strong>la combinaison parfaite</strong>.',
    also:['milkshake','truffle','smoke'] },

  softs:      { name:'Softs & Jus Frais',     price:5,   cat:'drinks',  img:'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80',
    badges:[{l:'🧃 Pressé du jour',t:'green'}],
    desc:'Pour ceux qui ne boivent pas d\'alcool, une sélection soignée. Sodas classiques en canette, eau pétillante des Alpes suisses, et nos jus frais pressés chaque matin selon les fruits de saison disponibles au marché de Morat.',
    ingr:['Eau pétillante alpine suisse','Sodas classiques','Jus d\'oranges fraîches','Jus de pomme locale','Limonades artisanales'],
    tips:['Jus pressés le matin uniquement','Eau de source alpine suisse','Limonades maison en été'],
    story:'Pour ceux qui ne boivent pas d\'alcool, nous avons une sélection <strong>soignée et fraîche</strong>. Les jus pressés chaque matin sont une vraie alternative aux sodas industriels. <strong>Frais et naturel</strong>.',
    also:['milkshake','biere','donut'] },

  brownie:    { name:'Brownie Fondant',        price:9,   cat:'desserts', img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
    badges:[{l:'🍫 Fait maison',t:''},{l:'Chocolat 70%',t:''}],
    desc:'Notre pâtissier prépare les brownies chaque matin. Chocolat noir 70% grand cru, beurre noisette, œufs frais de la ferme locale. Fondant au cœur, croustillant en surface. Servi tiède avec une boule de glace vanille et sauce caramel beurre salé breton.',
    ingr:['Chocolat noir 70% grand cru','Beurre noisette','Œufs fermiers locaux','Glace vanille artisanale','Sauce caramel beurre salé'],
    tips:['Préparé frais chaque matin','Servi tiède à la commande','Sans gluten possible'],
    story:'La croûte craque, le cœur est <strong>fondant et chaud</strong>. La glace vanille contraste magnifiquement avec le chocolat intense. Un final parfait pour votre repas <strong>Smash YLLZ</strong>.',
    also:['cheesecake','donut','milkshake'] },

  cheesecake: { name:'Cheesecake Fraise',      price:8,   cat:'desserts', img:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
    badges:[{l:'🍓 New-Yorkais',t:''}],
    desc:'Un classique new-yorkais avec les fraises fraîches du marché local. Base crumble beurré croustillant, crème cheese onctueuse montée à la main, coulis de fraises fraîches légèrement sucré. Simple, élégant et irrésistible.',
    ingr:['Crème cheese Philadelphia','Fraises fraîches de saison','Crumble beurré maison','Coulis peu sucré'],
    tips:['Recette new-yorkaise authentique','Fraises du marché de Morat','Disponible sans lactose'],
    story:'La vraie recette new-yorkaise avec les fraises du marché local. Le contraste entre le crumble croustillant et la crème onctueuse est <strong>tout simplement parfait</strong>.',
    also:['brownie','donut','milkshake'] },

  donut:      { name:'Donut Glazé',            price:5,   cat:'desserts', img:'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
    badges:[{l:'🍩 Maison',t:''}],
    desc:'Nos donuts sont frits chaque après-midi. Pâte levée légère et aérée, glaçage fondant et sprinkles colorés pour un maximum de joie. Un dessert qui met de bonne humeur, garanti.',
    ingr:['Pâte levée maison','Glaçage sucre fondant','Sprinkles colorés','Friture fraîche chaque jour'],
    tips:['Frits chaque après-midi','Autres glaçages disponibles','Parfait avec un milkshake'],
    story:'Croquant dehors, aérien dedans, <strong>joyeux partout</strong>. Nos donuts maison sont la touche finale parfaite d\'un repas Smash YLLZ. Parce que la vie est trop courte pour ne pas se faire plaisir.',
    also:['brownie','cheesecake','softs'] },
};

// ===========================
// CART STATE
// ===========================
let cart = [];

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}
function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();

  // Update all count badges
  document.querySelectorAll('#cartCount, #cartCountMobile, #cartCountArticle').forEach(el => {
    el.textContent = count;
  });

  // Update totals
  const fmt = (v) => `CHF ${v}.–`;
  const sub = document.getElementById('cartSubtotal');
  const tot = document.getElementById('cartTotal');
  if (sub) sub.textContent = fmt(total);
  if (tot) tot.textContent = fmt(total);

  // Render items
  const container = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = '';
    container.appendChild(empty);
    empty.style.display = 'flex';
    if (footer) footer.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  if (footer) footer.style.display = 'flex';

  container.innerHTML = '';
  cart.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">CHF ${item.price * item.qty}.–</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${idx}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
      </div>
    `;
    container.appendChild(div);
  });

  container.appendChild(empty);
}

function addToCart(id) {
  const item = ITEMS[id];
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name: item.name, price: item.price, img: item.img, qty: 1 });
  }

  updateCartUI();
  showAddFeedback(id);

  // Auto-open cart
  setTimeout(() => openCart(), 200);
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function showAddFeedback(id) {
  // Flash the cart button
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.style.borderColor = 'var(--accent)';
    btn.style.background = 'rgba(232,82,42,0.15)';
    setTimeout(() => {
      btn.style.borderColor = '';
      btn.style.background = '';
    }, 600);
  });
}

// ===========================
// CART OPEN/CLOSE
// ===========================
function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  if (isOpen) {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  } else {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  }
}

function placeOrder() {
  if (cart.length === 0) return;
  cart = [];
  updateCartUI();
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('orderSuccess').classList.remove('hidden');
}

function closeOrderSuccess() {
  document.getElementById('orderSuccess').classList.add('hidden');
}

// ===========================
// ARTICLE PAGE
// ===========================
function openArticle(id) {
  const item = ITEMS[id];
  if (!item) return;

  document.body.style.overflow = 'hidden';
  const page = document.getElementById('articlePage');
  page.classList.remove('hidden');

  const badgesHTML = item.badges.map(b => `<span class="art-badge ${b.t}">${b.l}</span>`).join('');
  const ingrHTML = item.ingr.map(i => `<li>${i}</li>`).join('');
  const tipsHTML = item.tips.map(t => `<li>${t}</li>`).join('');

  const alsoHTML = item.also.slice(0,3).map(aid => {
    const a = ITEMS[aid];
    if (!a) return '';
    return `
      <div class="also-card" onclick="openArticle('${aid}')">
        <img src="${a.img}" alt="${a.name}" loading="lazy"/>
        <div class="also-card-info">
          <h4>${a.name}</h4>
          <span>CHF ${a.price}.–</span>
        </div>
      </div>`;
  }).join('');

  document.getElementById('articleContent').innerHTML = `
    <div class="article-hero">
      <div class="article-photo">
        <img src="${item.img}" alt="${item.name}"/>
        <div class="article-photo-glow"></div>
      </div>
      <div class="article-meta">
        <div class="article-badges">${badgesHTML}</div>
        <h1>${item.name.split(' ').slice(0,-1).join(' ')}<br/><em>${item.name.split(' ').slice(-1)}</em></h1>
        <p class="article-desc">${item.desc}</p>
        <div class="article-price-add">
          <span class="article-price-big">CHF ${item.price}.–</span>
          <button class="article-add-btn" onclick="addToCart('${id}')">+ Ajouter au panier</button>
        </div>
      </div>
    </div>

    <div class="article-sections">
      <div class="article-block">
        <h3>📋 Ingrédients</h3>
        <ul class="ingr-list">${ingrHTML}</ul>
      </div>
      <div class="article-block">
        <h3>💡 Le savoir-faire</h3>
        <ul class="ingr-list">${tipsHTML}</ul>
      </div>
    </div>

    <div class="article-story">
      <p>${item.story}</p>
    </div>

    <div class="also-like">
      <h3>Vous aimerez aussi</h3>
      <div class="also-grid">${alsoHTML}</div>
    </div>
  `;

  page.scrollTop = 0;
  updateCartUI(); // refresh count on article page
}

function closeArticle() {
  document.getElementById('articlePage').classList.add('hidden');
  document.body.style.overflow = '';
}

// ===========================
// NAV
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

document.getElementById('burgerBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

// Active link highlight
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${cur}` ? 'var(--accent)' : '';
  });
});

// ===========================
// MENU TABS
// ===========================
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
          card.style.transform = '';
        }, i * 60);
      });
    }
  });
});

// ===========================
// RESERVATION
// ===========================
let guestCount = 2;
function changeCount(delta) {
  guestCount = Math.max(1, Math.min(20, guestCount + delta));
  document.getElementById('guestCount').textContent = guestCount;
}

function submitResa(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');
  btn.textContent = 'Envoi...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('resaForm').classList.add('hidden');
    document.getElementById('resaSuccess').classList.remove('hidden');
  }, 1200);
}

// ===========================
// SCROLL ANIMATIONS
// ===========================
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

// Min date
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);

// Init cart UI
updateCartUI();
