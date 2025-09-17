class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Header -->
        <header>
            <div class="container">
                <h1>Dokumentasi Tugas PBO</h1>
                <p>Ahmad Loka Arziki – 5025241044</p>
            </div>
        </header>

        <!-- Navigation -->
        style="position: sticky;">
            <div class="container nav-container">
                <div class="logo">PBO Journal</div>
                <div class="nav-links">
                    <a href="index.html">Home</a>
                    <a href="profil.html">Profil</a>
                </div>
            </div>
        </nav>
    `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <!-- Footer -->
        <footer>
            <div class="social-links">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="container">
                <p>© 2025 Ahmad Loka Arziki – Dokumentasi Tugas PBO</p>
            </div>
        </footer>
    `;
  }
}

customElements.define('header-container', SpecialHeader);
customElements.define('footer-container', SpecialFooter);
