// Close the drawer
document.getElementById('close-drawer').addEventListener('click', () => {
  document.getElementById('drawer-cart').classList.remove('open');
});

// Open Drawer
function openDrawer() {
  document.getElementById('drawer-cart').classList.add('open');
}

// Close Drawer
document.getElementById('close-drawer').addEventListener('click', () => {
  document.getElementById('drawer-cart').classList.remove('open');
});

// Add to Cart
function addToCart(variantId, quantity = 1) {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: variantId, quantity })
  })
    .then(response => response.json())
    .then(() => {
      openDrawer();
      updateCart();
    })
    .catch(console.error);
}

// Handle Quantity Change
document.getElementById('drawer-cart-items').addEventListener('click', function (e) {
  const line = e.target.dataset.line; // Capture the line number from the button
  if (line) {
    if (e.target.classList.contains('increment')) {
      handleCartUpdate(e.target, line, 1); // Increment
    } else if (e.target.classList.contains('decrement')) {
      handleCartUpdate(e.target, line, -1); // Decrement
    } else if (e.target.classList.contains('remove')) {
      handleCartUpdate(e.target, line, -Infinity); // Remove item
    }
  }
});


function handleCartUpdate(button, line, delta) {
  button.disabled = true;

  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      // Match the line by variant_id or use direct line mapping
      const currentItem = cart.items[line - 1];

      if (!currentItem) {
        console.error(`Item not found for line: ${line}`);
        button.disabled = false;
        return;
      }

      // Calculate the new quantity
      let newQuantity = delta === -Infinity ? 0 : Math.max(currentItem.quantity + delta, 1);

      // Update the cart
      return fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ line: parseInt(line), quantity: newQuantity }),
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Cart update failed.');
      }
      return response.json();
    })
    .then(() => updateCart())
    .catch(console.error)
    .finally(() => (button.disabled = false));
}




// Update Cart
function updateCart() {
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      const cartItems = cart.items.map((item, index) => `
        <div class="cart-item" data-line="${index + 1}">
          <p>${item.title}</p>
          <p>Price: $${(item.final_line_price / 100).toFixed(2)}</p>
          <div class="quantity-controls">
            <button 
              class="decrement" 
              data-line="${index + 1}" 
              ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
            <input 
              type="number" 
              class="quantity-input" 
              data-line="${index + 1}" 
              data-current-quantity="${item.quantity}" 
              value="${item.quantity}" 
              min="1">
            <button 
              class="increment" 
              data-line="${index + 1}" 
              ${item.quantity >= (item.inventory_quantity || Infinity) ? 'disabled' : ''}>+</button>
            <button class="remove" data-line="${index + 1}">Remove</button>
          </div>
        </div>
      `).join('');
      document.getElementById('drawer-cart-items').innerHTML = cartItems;
      document.getElementById('cart-total').textContent = `$${(cart.total_price / 100).toFixed(2)}`;
    })
    .catch(console.error);
}




function updateCartItem(line, delta) {
  // Fetch the current cart data
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      // Find the current quantity of the item
      const currentItem = cart.items[line - 1]; // Line is 1-based, so adjust with -1
      const currentQuantity = currentItem.quantity;

      // Calculate the new quantity
      const newQuantity = delta > 0 ? currentQuantity + delta : 0;

      // Update the cart item with the new quantity
      fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ line: parseInt(line), quantity: newQuantity })
      })
        .then(() => updateCart())
        .catch(console.error);
    })
    .catch(console.error);
}
