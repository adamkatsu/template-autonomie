const shopTrigger = document.getElementById('nav-shop');
const shopMenu = document.querySelector('.dropdown-left');

const searchTrigger = document.getElementById('nav-search');
const searchMenu = document.querySelector('.dropdown-right');

const cartTrigger = document.getElementById('nav-cart');
const userTrigger = document.getElementById('nav-user');

const navOverlay = document.querySelector('.navbar-overlay');
const navbarCont = document.querySelector('.navbar-cont');

shopTrigger.addEventListener('mouseenter', () => {
  shopMenu.classList.add('dropdown-active');
  navOverlay.classList.add('show');
  navbarCont.style.zIndex = 999;
})
// shopMenu.addEventListener('mouseleave', () => {
//   shopMenu.classList.remove('dropdown-active');
//   navOverlay.classList.remove('show');
// })
searchTrigger.addEventListener('click', () => {
  searchMenu.classList.add('dropdown-active');
  navOverlay.classList.add('show-transparent');
  navbarCont.style.zIndex = 999;
})
searchMenu.addEventListener('click', (e) => {
  e.stopPropagation();
})
shopMenu.addEventListener('click', (e) => {
  e.stopPropagation();
})
// searchMenu.addEventListener('mouseleave', () => {
//   searchMenu.classList.remove('dropdown-active');
//   navOverlay.classList.remove('show');
// })
navOverlay.addEventListener('click', () => {
  shopMenu.classList.remove('dropdown-active');
  navOverlay.classList.remove('show');
  navOverlay.classList.remove('show-transparent');
  searchMenu.classList.remove('dropdown-active');
  navbarCont.style.zIndex = 9;
})