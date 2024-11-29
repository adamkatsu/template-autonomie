document.addEventListener("DOMContentLoaded", function () {
  // Select all variant buttons
  const variantButtons = document.querySelectorAll(".variant-button");

  variantButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const variantId = this.getAttribute("data-variant-id");
      e.preventDefault();

      // Add variant to cart using Shopify AJAX API
      fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: variantId,
          quantity: 1, // Adjust quantity as needed
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Redirect to the cart page
            document.getElementById('drawer-cart').classList.add('open');
            updateCart();
          } else {
            alert("Error adding to cart. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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