// Fungsi untuk memuat template
function loadTemplate() {
  fetch('template.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('template-container').innerHTML = data;
    });
}

// Panggil fungsi saat halaman dimuat
window.onload = loadTemplate;