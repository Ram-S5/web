// const burgerBtnMenu = document.querySelector("#burger-btn-menu");
const burgerMenu = document.querySelector(".header-nav");
// const burgerBtnMenuClose = document.querySelector("#burger-btn-menu-close");

// burgerBtnMenu.addEventListener('click', () => {
//     burgerMenu.style.right = "0px"
// })

// burgerBtnMenuClose.addEventListener("click", () => {
//    burgerMenu.style.right = "-100px";
// })


const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) { burgerMenu.style.right = "0px"; }
    else { burgerMenu.style.right = "-200px"; }

});