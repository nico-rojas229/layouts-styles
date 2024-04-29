const burgerMenu = document.querySelector('.burger');
const navbarList = document.querySelector('.navbar-list');
let clicked = true;

burgerMenu.addEventListener('click', (e) => {
    if(clicked) {
        navbarList.style.width = '100vw';
        clicked = false;
    } else {
        navbarList.style.width = '0vw'; 
        clicked = true;
    }
    
});