// ===================================================
//  TILA'S RESTAURANT — Shared Navigation Renderer
// ===================================================

function renderNav(activePage) {
  const navHTML = `
  <nav>
    <a href="index.html" class="nav-logo">Tila's<span>✦ La Chaux-de-Fonds ✦</span></a>
    <div class="nav-links">
      <a href="index.html"        class="nav-link ${activePage==='home'?'active':''}">Accueil</a>
      <a href="menu.html"         class="nav-link ${activePage==='menu'?'active':''}">Menu</a>
      <a href="reservation.html"  class="nav-link ${activePage==='reservation'?'active':''}">Réserver</a>
      <a href="commander.html"    class="nav-link ${activePage==='order'?'active':''}">Commander</a>
      <a href="contact.html"      class="nav-link ${activePage==='contact'?'active':''}">Contact</a>
      <a href="commander.html"    class="nav-link nav-cart">🛒&nbsp;Panier <span class="cart-badge">0</span></a>
    </div>
    <button class="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="nav-mobile" style="display:none">
    <a href="index.html"        class="nav-link">Accueil</a>
    <a href="menu.html"         class="nav-link">Menu</a>
    <a href="reservation.html"  class="nav-link">Réserver</a>
    <a href="commander.html"    class="nav-link">Commander</a>
    <a href="contact.html"      class="nav-link">Contact</a>
    <a href="commander.html"    class="nav-link nav-cart" style="margin-top:0.5rem">🛒 Panier <span class="cart-badge">0</span></a>
  </div>
  <div id="toast"></div>`;

  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) placeholder.outerHTML = navHTML;
}

function renderFooter() {
  const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div>
        <div class="footer-logo">Tila's</div>
        <p class="footer-desc">Restaurant français & international au cœur de La Chaux-de-Fonds. Cuisine raffinée, produits locaux, ambiance chaleureuse.</p>
        <div style="margin-top:1.2rem;display:flex;gap:0.8rem">
          <a href="#" style="color:rgba(255,255,255,0.5);font-size:1.3rem;transition:color 0.2s" onmouseover="this.style.color='#C9A84C'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">📘</a>
          <a href="#" style="color:rgba(255,255,255,0.5);font-size:1.3rem;transition:color 0.2s" onmouseover="this.style.color='#C9A84C'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">📸</a>
          <a href="#" style="color:rgba(255,255,255,0.5);font-size:1.3rem;transition:color 0.2s" onmouseover="this.style.color='#C9A84C'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">🐦</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="menu.html">Notre menu</a></li>
          <li><a href="reservation.html">Réservation</a></li>
          <li><a href="commander.html">Commander</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Horaires</h4>
        <ul>
          <li>Lundi : <span style="color:#B22222">Fermé</span></li>
          <li>Mar–Ven : 11h30–22h30</li>
          <li>Samedi : 11h30–23h00</li>
          <li>Dimanche : 11h30–22h00</li>
          <li style="margin-top:0.5rem;color:var(--gold)">Service midi : 11h30–14h</li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li>📍 Rue de la Gare 2</li>
          <li>2300 La Chaux-de-Fonds</li>
          <li style="margin-top:0.5rem">📞 <a href="tel:+41329250000">+41 32 925 00 00</a></li>
          <li>✉️ <a href="mailto:info@tilasrestaurant.ch">info@tilasrestaurant.ch</a></li>
          <li style="margin-top:0.5rem;color:rgba(255,255,255,0.4);font-size:0.8rem">🚗 Livraison CHF 5.00</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Tila's Restaurant · Rue de la Gare 2 · 2300 La Chaux-de-Fonds · Suisse · Tous droits réservés</p>
    </div>
  </footer>`;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = footerHTML;
}
