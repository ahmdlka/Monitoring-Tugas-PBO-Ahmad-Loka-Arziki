// template-loader.js
document.addEventListener('DOMContentLoaded', function() {
  // Load template.html
  fetch('template.html')
    .then(response => response.text())
    .then(data => {
      // Parse the HTML
      const parser = new DOMParser();
      const templateDoc = parser.parseFromString(data, 'text/html');
      
      // Get the templates
      const headerTemplate = templateDoc.getElementById('header-template');
      const footerTemplate = templateDoc.getElementById('footer-template');
      
      // Clone and insert header
      if (headerTemplate) {
        const headerContent = headerTemplate.content.cloneNode(true);
        document.body.insertBefore(headerContent, document.body.firstChild);
      }
      
      // Clone and insert footer
      if (footerTemplate) {
        const footerContent = footerTemplate.content.cloneNode(true);
        document.body.appendChild(footerContent);
      }
      
      // Update active navigation link
      updateActiveNavLink();
    })
    .catch(error => {
      console.error('Error loading template:', error);
    });
});

// Function to update active navigation link
function updateActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage || 
        (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}