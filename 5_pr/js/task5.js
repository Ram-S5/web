const burgerBtnMenu = document.querySelector("#burger-btn-menu");
const burgerMenu = document.querySelector("#burger-menu");
const burgerBtnMenuClose = document.querySelector("#burger-btn-menu-close");

burgerBtnMenu.addEventListener('click', () => {
    burgerMenu.style.left = "0px"
})

burgerBtnMenuClose.addEventListener("click", () => {
    burgerMenu.style.left = "-100%"
})
