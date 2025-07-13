// const burgerBtnMenu = document.querySelector("#burger-btn-menu");
// const burgerMenu = document.querySelector(".header-nav");
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
    // if (burger.classList.contains('active')) { burgerMenu.style.right = "0px"; }
    // else { burgerMenu.style.right = "-200px"; }

});



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
