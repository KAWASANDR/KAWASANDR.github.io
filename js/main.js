const btn = document.querySelector('.menu-btn');
const header__line = document.querySelector('.header__line');

btn.addEventListener('click',()=>{
  header__line.classList.toggle('menu-open')
});