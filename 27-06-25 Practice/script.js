const title = document.querySelector("#title")
const details = document.querySelector("#details")
const btnSave = document.querySelector("#btn-save")
const taskList = document.querySelector("#task-list")


// btnSave.addEventListener("click", () => {
//Добавление названия задачи в виде заголовка h3
// const h3 = document.createElement("h3")
/*h3 парный тег, внутри h3 будет прописано значение которое считывается с айди title через value*/
// h3.innerHTML = title.value
// document.appendChild(h3)
/*До taskList стояло document.body, просто сейчас у нас есть конкретная секция с конкретным классом для которой задана переменная в скрипте одноименная taskList */
//Добавление описания задачи в виде абзаца
// const p = document.createElement("p")
// p.innerHTML = details.value   /*тут пропишется значение которое укажется в поле с id details*/
// document.appendChild(p)
//Очистка полей  (очистка полей у данных id)
// title.value = ""
// details.value = ""
// })


//Далее нам надо создать с помощью скрипта вывод заголовка 3 и абзаца, чтоб они были внутри дива, для будущего например удалени отдельных задач (Предыдущий скрипт надо закомментить, мешает)
btnSave.addEventListener("click", () => {



    const h3 = document.createElement("h3")
    h3.innerHTML = title.value
    const p = document.createElement("p")
    p.innerHTML = details.value

    // 1. Создаём кнопку
    // 2. В иннерХТМЛ прописать "Удалить задачу"
    // 3. Добавить в div

    const btn = document.createElement('button') /*Создал элемент кнопка*/
    btn.innerHTML = 'Удалить задачу' /*Наполнил названием*/
    btn.addEventListener("click", () => {
        //Обращение к родителю. Обращаемся к родителю кнопки, т.е. к диву в секции taskList через парентНод и удаляем див, Див является узлом для нескольких жлементов h3 p и кнопка.
        btn.parentNode.remove()
    })


    const div = document.createElement("div")
    //Создали в документе переменных  h3, p  и div 
    /*Див уже создаётся непосредственно в секции taskList, а в диве уже и всё остальное*/
    div.appendChild(h3)
    //Размечаем h3  в диве и p аналогично
    div.appendChild(p)

    div.appendChild(btn) /*Создал кнопку и поместил в див*/

    //Размещаем див в секции такслист. h3  и p разместятся в диве
    taskList.appendChild(div) /*Можно расположить и до аппенчайлд заголовка и абзаца*/



    //зададим стиль к диву, теперь у каждого дива будет рамка и отступы
    div.classList.add('task')
    //  можно подключить и несколько стилей через класс лист
    div.classList.add('primary') /*но он просто не задан*/



    title.value = ""
    details.value = ""
})