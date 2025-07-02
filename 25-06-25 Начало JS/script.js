const btn = document.getElementById("btn")
// Данная функция сверху берёт элемент по его уникальному идентификатору (берёт весь документ и находит нужный айди)  
// Пишем кнопку и добавляем событие после точки, а после в скобках событие (нажатие на кнопку) и следом функцию для события что происходит в круглых и фигурных
btn.addEventListener("click", () => {
    // вся страница html называется document. Поменяем цвет фона. Сначала обращаемся к боди, далее стилизации, затем к фону и после равно пишем значение, синий цвет фона.
    document.body.style.background = "blue"
})
// Отслеживать ошибки можно в браузере



// Это уже из чата от участника
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => { 
    if (document.body.style.background === "blue") { document.body.style.background = "none" } else { document.body.style.background = "blue"} 
});