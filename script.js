const btnNavEl = document.querySelector('.mobile-nav');
const navEl = document.querySelector('.header');
const backgroundEl = document.querySelector('.nav__main');

btnNavEl.addEventListener('click', function(){
     navEl.classList.toggle('nav-open');
});


backgroundEl.addEventListener('click', function(){
     navEl.classList.remove('nav-open');
});