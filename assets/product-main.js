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

  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const form = this.closest('form');
      const formData = new FormData(form);
  
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Open the drawer
        document.getElementById('drawer-cart').classList.add('open');
        updateCart();
      })
      .catch(error => console.error('Error:', error));
    });
  });
  
  function updateCart() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartItems = cart.items.map(item => `
          <div class="cart-item">
            <p>${item.title}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${(item.final_line_price / 100).toFixed(2)}</p>
          </div>
        `).join('');
        document.getElementById('drawer-cart-items').innerHTML = cartItems;
        document.getElementById('cart-total').textContent = `$${(cart.total_price / 100).toFixed(2)}`;
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Close the drawer
  document.getElementById('close-drawer').addEventListener('click', () => {
    document.getElementById('drawer-cart').classList.remove('open');
  });
});
