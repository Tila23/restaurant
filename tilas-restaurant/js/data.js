// ===================================================
//  TILA'S RESTAURANT — Shared Data & Utilities
// ===================================================

// ---- MENU DATA ----
const MENU_DATA = {
  entrees: [
    { id:1,  name:"Soupe à l'oignon gratinée",    emoji:"🧅", price:12.50, desc:"Bouillon de bœuf maison, croûtons grillés artisanaux, gruyère AOP fondu au four.", tags:["Classique"] },
    { id:2,  name:"Carpaccio de bœuf",             emoji:"🥩", price:18.00, desc:"Bœuf suisse finement tranché, roquette, copeaux de parmesan, câpres, huile d'olive vierge.", tags:["Popular"] },
    { id:3,  name:"Terrine du chef",               emoji:"🫙", price:14.50, desc:"Terrine de campagne maison, cornichons, oignons grelots au vinaigre, pain grillé artisanal.", tags:["Maison"] },
    { id:4,  name:"Salade Tila's",                 emoji:"🥗", price:16.00, desc:"Mesclun frais, chèvre chaud en croûte, cerneaux de noix, poires, vinaigrette au miel de Neuchâtel.", tags:["Vegan","Popular"] },
    { id:5,  name:"Escargots de Bourgogne",        emoji:"🐌", price:19.50, desc:"6 escargots persillés, beurre à l'ail et aux herbes, pain artisanal grillé au four.", tags:["Classique"] },
    { id:6,  name:"Tartare de saumon",             emoji:"🐟", price:17.00, desc:"Saumon frais d'Atlantique, avocat, citron vert, coriandre fraîche, chips de wonton croustillants.", tags:["Frais"] },
    { id:7,  name:"Foie gras de canard",           emoji:"🍞", price:24.00, desc:"Foie gras mi-cuit, chutney de figues, pain brioché toasté, fleur de sel de Guérande.", tags:["Signature"] },
    { id:8,  name:"Crème de lentilles",            emoji:"🥣", price:11.00, desc:"Crème veloutée de lentilles corail, huile de truffe, croutons au parmesan. Vegan.", tags:["Vegan","Local"] },
  ],
  plats: [
    { id:9,  name:"Entrecôte Tila's",              emoji:"🥩", price:42.00, desc:"Entrecôte bœuf suisse 250g, sauce bordelaise maison, pommes duchesse, légumes de saison.", tags:["Popular","Signature"] },
    { id:10, name:"Filet de perche du lac",        emoji:"🐟", price:34.00, desc:"Filets de perche des lacs suisses, beurre blanc citronné, riz complet et légumes vapeur.", tags:["Local","Popular"] },
    { id:11, name:"Saumon en croûte d'herbes",     emoji:"🐠", price:36.00, desc:"Pavé de saumon atlantique en croûte de fines herbes fraîches, beurre blanc, riz basmati.", tags:["Popular"] },
    { id:12, name:"Risotto aux cèpes",             emoji:"🍄", price:28.00, desc:"Riz carnaroli crémeux, cèpes frais de saison, parmesan affiné 24 mois, huile de truffe noire.", tags:["Vegan","Végétarien"] },
    { id:13, name:"Magret de canard",              emoji:"🦆", price:38.00, desc:"Magret rosé, sauce cerises noires au porto, gratin dauphinois au comté, haricots verts.", tags:["Signature"] },
    { id:14, name:"Burger Tila's",                 emoji:"🍔", price:26.00, desc:"Steak haché bœuf suisse 180g, cheddar fondu, bacon croustillant, tomate, salade, frites maison.", tags:["Popular"] },
    { id:15, name:"Tagliatelles pesto",            emoji:"🍝", price:22.00, desc:"Pâtes fraîches artisanales, pesto basilic maison, tomates cerises confites, pignons de pin dorés.", tags:["Végétarien"] },
    { id:16, name:"Poulet fermier rôti",           emoji:"🍗", price:29.00, desc:"Demi-poulet fermier des Franches-Montagnes, jus de rôti, purée de pommes de terre, salade.", tags:["Local","Classique"] },
    { id:17, name:"Côtelettes d'agneau",           emoji:"🍖", price:44.00, desc:"Rack d'agneau en croûte de persillade, jus aux herbes de Provence, polenta crémeuse.", tags:["Signature"] },
    { id:18, name:"Penne all'arrabbiata",          emoji:"🍅", price:20.00, desc:"Pâtes penne, sauce tomate épicée maison, câpres, olives noires, parmesan râpé.", tags:["Végétarien"] },
  ],
  desserts: [
    { id:19, name:"Fondant au chocolat",           emoji:"🍫", price:12.50, desc:"Mi-cuit au chocolat noir Valrhona 70%, glace vanille Bourbon maison, coulis framboise.", tags:["Popular","Signature"] },
    { id:20, name:"Crème brûlée vanille",          emoji:"🍮", price:10.00, desc:"Crème onctueuse à la vanille de Madagascar, caramel croustillant à la cassonade.", tags:["Classique","Popular"] },
    { id:21, name:"Tarte Tatin pommes",            emoji:"🥧", price:11.50, desc:"Pommes golden caramélisées au beurre salé, pâte feuilletée dorée, crème fraîche épaisse.", tags:["Maison"] },
    { id:22, name:"Mousse au chocolat",            emoji:"🍫", price:9.50,  desc:"Mousse légère et aérienne au chocolat noir, chantilly maison, copeaux de chocolat.", tags:["Vegan","Classique"] },
    { id:23, name:"Profiteroles",                  emoji:"🧁", price:10.50, desc:"Choux garnis de glace vanille artisanale, nappés de sauce chocolat chaud Valrhona.", tags:["Classique","Popular"] },
    { id:24, name:"Assiette de fromages suisses",  emoji:"🧀", price:14.00, desc:"Sélection de 4 fromages AOP — Gruyère, Raclette, Appenzell, Vacherin — pain, confiture figues.", tags:["Local","Suisse"] },
    { id:25, name:"Tiramisu maison",               emoji:"🍰", price:10.00, desc:"Tiramisu classique à l'espresso, mascarpone, biscuits amaretti, cacao amer.", tags:["Maison","Popular"] },
    { id:26, name:"Sorbet fruits du verger",       emoji:"🍧", price:8.50,  desc:"Deux boules de sorbet aux fruits suisses de saison, fruits frais, coulis maison.", tags:["Vegan"] },
  ],
  boissons: [
    { id:27, name:"Eau Henniez 50cl",              emoji:"💧", price:4.50,  desc:"Plate ou pétillante. Source naturelle suisse." },
    { id:28, name:"Coca-Cola / Zero",              emoji:"🥤", price:4.50,  desc:"33cl · Classique ou sans sucre." },
    { id:29, name:"Jus de fruit frais",            emoji:"🍊", price:6.50,  desc:"Pressé minute · Orange, pomme ou ananas · 25cl." },
    { id:30, name:"Café espresso",                 emoji:"☕", price:3.50,  desc:"Torréfaction artisanale suisse · Simple ou double." },
    { id:31, name:"Cappuccino / Latte",            emoji:"☕", price:5.00,  desc:"Lait entier suisse · Mousse veloutée." },
    { id:32, name:"Thé sélection",                 emoji:"🍵", price:4.50,  desc:"Noir, vert, menthe fraîche, camomille, Earl Grey." },
    { id:33, name:"Chasselas AOC Neuchâtel",       emoji:"🍾", price:8.50,  desc:"Verre 1.8dl · Blanc sec · Domaine de la Maison Carrée." },
    { id:34, name:"Pinot Noir AOC Neuchâtel",      emoji:"🍷", price:9.00,  desc:"Verre 1.8dl · Rouge léger et fruité · Cave de la Vigne." },
    { id:35, name:"Rosé de Neuchâtel",             emoji:"🌹", price:8.00,  desc:"Verre 1.8dl · Rosé frais et délicat · AOC Neuchâtel." },
    { id:36, name:"Bière artisanale ChFds",        emoji:"🍺", price:7.00,  desc:"33cl · Blonde ou ambrée · Brasserie des Montagnes NE." },
    { id:37, name:"Cocktail Tila's Sunset",        emoji:"🍹", price:13.00, desc:"Rhum blanc, passion, noix de coco, citron vert, grenadine, sprite." },
    { id:38, name:"Mocktail Virgin Garden",        emoji:"🥂", price:9.50,  desc:"Concombre, citron vert, gingembre, sirop de menthe, limonade." },
  ],
  midi: [
    { id:39, name:"Menu Midi — Entrée + Plat",     emoji:"🍽", price:24.00, desc:"Soupe du jour ou salade + plat du jour (selon ardoise). Lun–Ven 11h30–14h00." },
    { id:40, name:"Menu Midi — Plat + Dessert",    emoji:"🍽", price:26.00, desc:"Plat du jour + dessert du jour. Lun–Ven 11h30–14h00." },
    { id:41, name:"Menu Complet",                  emoji:"🥂", price:35.00, desc:"Entrée + Plat + Dessert + Café. Le meilleur rapport qualité-prix. Lun–Ven 11h30–14h." },
    { id:42, name:"Plat du jour",                  emoji:"🫕", price:19.50, desc:"Cuisine du marché, change chaque jour. Selon ardoise. Avec salade ou soupe incluse." },
  ]
};

const CATEGORY_LABELS = {
  entrees:  "Entrées",
  plats:    "Plats principaux",
  desserts: "Desserts",
  boissons: "Boissons",
  midi:     "Menu du midi"
};

// ---- TABLE DATA ----
const TABLE_DATA = [
  {n:"T1",  seats:2,  occ:false}, {n:"T2",  seats:2,  occ:true},
  {n:"T3",  seats:4,  occ:false}, {n:"T4",  seats:4,  occ:false},
  {n:"T5",  seats:2,  occ:true},  {n:"T6",  seats:4,  occ:false},
  {n:"T7",  seats:6,  occ:false}, {n:"T8",  seats:4,  occ:true},
  {n:"T9",  seats:2,  occ:false}, {n:"T10", seats:4,  occ:false},
  {n:"T11", seats:2,  occ:false}, {n:"T12", seats:8,  occ:true},
  {n:"T13", seats:4,  occ:false}, {n:"T14", seats:2,  occ:false},
  {n:"T15", seats:6,  occ:false}, {n:"T16", seats:4,  occ:true},
  {n:"T17", seats:2,  occ:false}, {n:"T18", seats:4,  occ:false},
  {n:"T19", seats:4,  occ:false}, {n:"T20", seats:2,  occ:true},
  {n:"T21", seats:6,  occ:false}, {n:"T22", seats:4,  occ:false},
  {n:"T23", seats:2,  occ:false}, {n:"T24", seats:4,  occ:false},
  {n:"T25", seats:2,  occ:false}, {n:"T26", seats:4,  occ:true},
  {n:"T27", seats:6,  occ:false}, {n:"T28", seats:4,  occ:false},
];

// ---- CART (localStorage) ----
function getCart() {
  try { return JSON.parse(localStorage.getItem('tilas_cart') || '[]'); }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('tilas_cart', JSON.stringify(cart));
}
function addToCart(item) {
  const cart = getCart();
  const ex = cart.find(c => c.id === item.id);
  if (ex) ex.qty++;
  else cart.push({ ...item, qty: 1 });
  saveCart(cart);
  updateAllCartBadges();
  showToast(`✅ ${item.name} ajouté au panier`);
}
function updateQty(id, delta) {
  const cart = getCart();
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  const newCart = item.qty <= 0 ? cart.filter(c => c.id !== id) : cart;
  saveCart(newCart);
  updateAllCartBadges();
  if (typeof renderCart === 'function') renderCart();
}
function clearCart() {
  saveCart([]);
  updateAllCartBadges();
}
function getCartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}
function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}
function updateAllCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => el.textContent = count);
}

// ---- TOAST ----
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ---- NAV ACTIVE ----
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html') || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ---- MOBILE NAV TOGGLE ----
function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (!hamburger || !mobileNav) return;
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.style.display === 'flex';
    mobileNav.style.display = isOpen ? 'none' : 'flex';
  });
}

// ---- INIT (run on every page) ----
document.addEventListener('DOMContentLoaded', () => {
  updateAllCartBadges();
  setActiveNav();
  initMobileNav();
});
