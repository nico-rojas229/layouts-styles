const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar-list');
let click = true;

burger.addEventListener('click', (e) => {
    if(click) {
        navbar.style.width = '100vw';
        click = false;
    } else {
        burger.style.width = '0vw';
        click = true;
    }
    
})