document.addEventListener('DOMContentLoaded', function() {
  fetch('template.html')
    .then(res => res.text())
    .then(data => {
      console.log("Isi template.html:", data); // debug
      document.body.insertAdjacentHTML("afterbegin", data); // langsung tempel tanpa <template>
    })
    .catch(err => console.error("Fetch error:", err));
});
