const aBtn = document.querySelector("#a-btn")
const aBody = document.querySelector("#a-body")

aBtn.addEventListener('click', () => {
    // aBody.classList.add('accordeon-body-open')
    aBody.classList.toggle("accordeon-body-open")

    aBtn.classList.toggle("accordeon-btn-open")


})

const changeTheme = document.querySelector("#change-theme")
changeTheme.addEventListener("click", ()=>{
document.body.classList.toggle("dark-theme")




})