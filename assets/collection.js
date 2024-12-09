document.addEventListener("DOMContentLoaded", function () {
  const productImages = document.querySelectorAll(".collection-product-image");

  productImages.forEach((img) => {
    const hoverSrc = img.getAttribute("data-hover");
    const featuredSrc = img.getAttribute("data-featured");


    img.parentElement.addEventListener("mouseover", () => {
      if (hoverSrc) {
        img.src = hoverSrc;
      }
    });

    img.parentElement.addEventListener("mouseout", () => {
      img.src = featuredSrc;
    });
  });

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