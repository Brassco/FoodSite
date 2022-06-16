// OPEN/CLOSE MENU BAR
const menu = document.getElementById('menu-bar');
const navBar = document.querySelector('.header__navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}