document.getElementById('openModalBtn').onclick = function () {
  document.getElementById('modal').classList.add('show');
};
document.getElementById('closeModalBtn').onclick = function () {
  document.getElementById('modal').classList.remove('show');
};
window.onclick = function (e) {
  const modal = document.getElementById('modal');
  if (e.target === modal) modal.classList.remove('show');
};
document.getElementById('cvUpload').addEventListener('change', function (e) {
  const fileLabel = this.previousElementSibling;
  if (this.files.length > 0) {
    fileLabel.textContent = this.files[0].name;
    fileLabel.style.color = "#fff";
  }
});
document.querySelector('.plus-btn').onclick = function() {
  document.getElementById('cvUpload').click();
};
document.querySelector('.form-grid').onsubmit = function(e) {
  e.preventDefault();
  alert('Card joined successfully!');
};
document.querySelectorAll(".dots").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Options clicked!");
  });
});
const searchInput = document.querySelector('.search input');
const cards = document.querySelectorAll('.card');
const searchCardsContainer = document.querySelector('.search-cards');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();
  searchCardsContainer.innerHTML = ''; // avvalgi natijalarni tozalaymiz

  if (query === '') {
    searchCardsContainer.style.display = 'none';
    return;
  }

  let found = 0;
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const price = card.querySelector('.price').textContent.toLowerCase();
    if (title.includes(query) || price.includes(query)) {
      found++;
      const clone = card.cloneNode(true);
      clone.classList.add('mini-card');
      searchCardsContainer.appendChild(clone);
    }
  });

  searchCardsContainer.style.display = found > 0 ? 'grid' : 'none';
});
