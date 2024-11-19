const shopTrigger = document.getElementById('nav-shop');
const shopMenu = document.querySelector('.dropdown-left');

const searchTrigger = document.getElementById('nav-search');
const searchMenu = document.querySelector('.dropdown-right');

const cartTrigger = document.getElementById('nav-cart');
const userTrigger = document.getElementById('nav-user');

shopTrigger.addEventListener('mouseenter', () => {
  shopMenu.classList.add('dropdown-active');
})
shopMenu.addEventListener('mouseleave', () => {
  shopMenu.classList.remove('dropdown-active');
})
searchTrigger.addEventListener('mouseenter', () => {
  searchMenu.classList.add('dropdown-active');
})
searchMenu.addEventListener('mouseleave', () => {
  searchMenu.classList.remove('dropdown-active');
})