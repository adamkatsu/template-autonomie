document.addEventListener("DOMContentLoaded", function () {
  // Select all variant buttons
  const variantButtons = document.querySelectorAll(".variant-button");

  variantButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const variantId = this.getAttribute("data-variant-id");

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
            window.location.href = "/cart";
          } else {
            alert("Error adding to cart. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
});