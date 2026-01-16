const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

menuBtn.addEventListener('click', () => {
  menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
});
