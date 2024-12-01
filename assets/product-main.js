// Quantity Adjustment
const decreaseBtn = document.getElementById("decrease-quantity");
const increaseBtn = document.getElementById("increase-quantity");
const quantityInput = document.getElementById("quantity-input");

decreaseBtn.addEventListener("click", () => {
  if (quantityInput.value > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

increaseBtn.addEventListener("click", () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Accordion

document.querySelectorAll('.product-accordion-head').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.product-accordion-content');
    const isOpen = item.classList.contains('active');

    // Close all open accordions
    // document.querySelectorAll('.product-accordion-item').forEach(i => {
    //   if (i !== item) {
    //     i.classList.remove('active');
    //     i.querySelector('.product-accordion-content').style.maxHeight = '0';
    //   }
    // });

    // Toggle the clicked accordion
    if (!isOpen) {
      item.classList.add('active');
      content.style.maxHeight = `${content.scrollHeight}px`; // Set to full content height
    } else {
      item.classList.remove('active');
      content.style.maxHeight = '0'; // Collapse content
    }
  });
});
