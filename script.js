function toggleMenu() {
  var menuContainer = document.querySelector('.menu-container');
  menuContainer.classList.toggle('show');
}

function closeMenu() {
  var menuContainer = document.querySelector('.menu-container');
  menuContainer.classList.remove('show');
}