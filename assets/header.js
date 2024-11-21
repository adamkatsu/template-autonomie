const shopTrigger = document.getElementById('nav-shop');
const shopMenu = document.querySelector('.dropdown-left');

const searchTrigger = document.getElementById('nav-search');
const searchMenu = document.querySelector('.dropdown-right');

const cartTrigger = document.getElementById('nav-cart');
const userTrigger = document.getElementById('nav-user');

const navOverlay = document.querySelector('.navbar-overlay');

shopTrigger.addEventListener('mouseenter', () => {
  shopMenu.classList.add('dropdown-active');
  navOverlay.classList.add('show');
})
shopMenu.addEventListener('mouseleave', () => {
  shopMenu.classList.remove('dropdown-active');
  navOverlay.classList.remove('show');
})
searchTrigger.addEventListener('mouseenter', () => {
  searchMenu.classList.add('dropdown-active');
  navOverlay.classList.add('show');
})
searchMenu.addEventListener('mouseleave', () => {
  searchMenu.classList.remove('dropdown-active');
  navOverlay.classList.remove('show');
})