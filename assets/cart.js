document.addEventListener("DOMContentLoaded", function () {
  const decrementButtons = document.querySelectorAll(".decrement");
  const incrementButtons = document.querySelectorAll(".increment");

  decrementButtons.forEach(button => {
    button.addEventListener("click", function () {
      const input = this.nextElementSibling;
      const currentValue = parseInt(input.value, 10) || 1;
      if (currentValue > 1) {
        input.value = currentValue - 1;
        input.dispatchEvent(new Event("input")); // Trigger the input event
      }
      for (const dec of decrementButtons) {
        dec.style.pointerEvents = 'none'
      }
      for (const inc of incrementButtons) {
        inc.style.pointerEvents = 'none'
      }
    });
  });

  incrementButtons.forEach(button => {
    button.addEventListener("click", function () {
      const input = this.previousElementSibling;
      const currentValue = parseInt(input.value, 10) || 1;
      input.value = currentValue + 1;
      input.dispatchEvent(new Event("input")); // Trigger the input event
      for (const dec of decrementButtons) {
        dec.style.pointerEvents = 'none'
      }
      for (const inc of incrementButtons) {
        inc.style.pointerEvents = 'none'
      }
    });
  });

  document.querySelectorAll(".product-quantity input").forEach(input => {
    console.log(input)
    input.addEventListener("input", function () {
      console.log('quantity changed');
      this.closest("form").submit();
    });
  });
});