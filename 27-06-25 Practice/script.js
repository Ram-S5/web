const title = document.querySelector("#title")
const details = document.querySelector("#details")
const btnSave = document.querySelector("#btn-save")
const taskList = document.querySelector("#task-list")


btnSave.addEventListener("click", () => {
    //Добавление названия задачи в виде заголовка 3
    const h3 = document.createElement("h3")
    h3.innerHTML = title.value
    document.body.appendChild(h3)
    //Добавление описания задачи в виде абзаца
    const p = document.createElement("p")
    p.innerHTML = details.value
    document.body.appendChild(p)
    //Очистка полей
    title.value = ""
    details.value = ""


})
