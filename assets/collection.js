document.addEventListener("DOMContentLoaded", function () {
  // Show / Hide Filter Modal
  const filterShow = document.getElementById('filter-show');
  const filterPopup = document.querySelector('.collection-popup');
  const filterHide = document.getElementById('filter-hide');

  filterShow.addEventListener('click', () => {
    filterPopup.classList.add('popup-active');
  })
  filterHide.addEventListener('click', () => {
    filterPopup.classList.remove('popup-active');
  })
});