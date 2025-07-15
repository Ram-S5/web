const burgerBtnMenu = document.querySelector("#burger-btn");
const burgerMenu = document.querySelector("#burger-menu");
const burgerBtnMenuClose = document.querySelector("#burger-btn-menu-close");

burgerBtnMenu.addEventListener('click', () => {
    burgerMenu.style.left = "0px"
})

burgerBtnMenuClose.addEventListener("click", () => {
   burgerMenu.style.left = "-400px";
})





const dirCards = document.querySelectorAll(".direction-card")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        buttons.forEach((btn) => btn.style.backgroundColor = "")
        btn.style.backgroundColor = "var(--accent-color)"
        for (card of dirCards) {
            card.style.left = -index * 120 + "%"

        }
    })
})
