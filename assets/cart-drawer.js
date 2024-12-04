function openCartDrawer() {
  document.querySelector('.cart-drawer').classList.add('open');
}
function closeCartDrawer() {
  document.querySelector('.cart-drawer').classList.remove('open');
}
async function updateCartDrawer() {
  const res = await fetch('/?section_id=cart-drawer')
  const text = await res.text()

  const html = document.createElement('div')
  html.innerHTML = text;

  const newBox = html.querySelector('.cart-drawer').innerHTML;
  document.querySelector('.cart-drawer').innerHTML = newBox;
  
  console.log(html)
}

document.querySelectorAll('form[action="/cart/add"]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('product added!');

    // Submit form with ajax
    await fetch("/cart/add.js", {
      method: "POST",
      body: new FormData(form),
    });

    // Update cart
    await updateCartDrawer();

    // Open cart Drawer
    openCartDrawer();
  })
})

document.querySelectorAll('.close-drawer, .cart-drawer').forEach((x) => {
  x.addEventListener('click', () => {
    closeCartDrawer();
  })
});
document.querySelector('.drawer').addEventListener('click', (e) => {
  e.stopPropagation();
})
document.querySelectorAll('a[href="/cart"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  })
})