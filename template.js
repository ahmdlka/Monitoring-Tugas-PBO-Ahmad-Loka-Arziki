// Fungsi untuk memuat komponen HTML
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
        
        // Setelah komponen dimuat, update navigasi aktif
        if (id === 'header-container') {
            updateActiveNav();
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

// Fungsi untuk menandai navigasi aktif
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Memuat header dan footer ketika halaman siap
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', 'components/header.html');
    loadComponent('footer-container', 'components/footer.html');
});