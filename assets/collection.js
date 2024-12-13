document.addEventListener("DOMContentLoaded", function () {
  const productImages = document.querySelectorAll(".collection-product-image");

  if (window.matchMedia("(min-width: 640px)").matches) {
    // Run your JavaScript here
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
  }
  

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


  // Show More Filters
  const sections = document.querySelectorAll('.filter-variant-list');
    
    sections.forEach(section => {
      const showMoreBtn = section.querySelector('.show-more-btn');
      const hiddenItems = section.querySelectorAll('.filter-variant-list-item.hidden');
      
      if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function () {
          hiddenItems.forEach(item => {
            item.classList.remove('hidden');
          });
          showMoreBtn.style.display = 'none'; // Hide the button after all items are shown
        });
      }
    });
  
});