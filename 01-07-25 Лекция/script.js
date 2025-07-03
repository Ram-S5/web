const login = document.querySelector('#login')
const password = document.querySelector('#password')
const passwordErrors = document.querySelector('#password-errors')
const repeatPassword = document.querySelector('#repeat-password')
const repeatPasswordErrors = document.querySelector('#repeat-password-errors')
const registerBtn = document.querySelector('#register-btn')


registerBtn.addEventListener("click", () => {


    const equalPassword = password.value == repeatPassword.value  /*и ниже будет иквал Пассворд*/
    if (/*password.value == repeatPassword.value*/ equalPassword) {
        repeatPasswordErrors.innerHTML = ""
    }
    else {
        //когда обращаемся к свойствам то это innerHTML
        repeatPasswordErrors.innerHTML = "Пароли не совпадают"
    }

    //Более 8ми символов в пароле
    //Хотябы одна цифра
    //Хотябы одна большая буква


    passwordErrors.innerHTML = ""
    const hasLength = password.value.length > 8
    if (!hasLength) {
        passwordErrors.innerHTML += "Длина пароля менее 8 символов <br>"

    }

    const hasNumber = /[0-9]/.test(password.value)  //здесь идёт проверка есть ли цифра в нашем пароле
    if (!hasNumber) {
        passwordErrors.innerHTML += "В пароле нет цифр <br>"
    }

    const hasBigLetter = /[A-Z]/.test(password.value)
    if (!hasBigLetter) {
        passwordErrors.innerHTML += "В пароле нет больших букв<br>"
    }


    // ! Логические НЕ
    // $$ Логическое И
    // || Логическое ИЛИ

    if (equalPassword && hasLength && hasNumber && hasBigLetter) {
        alert("Аккаунт зарегистрирован")
    }

})



//скрипт вывода времени , у всех разное
const timeBlock = document.querySelector('#time')
// timeBlock.innerHTML=new Date

const hour = new Date().getHours("#time")
setInterval(() => {
    if (hour < 6) {
        timeBlock.innerHTML = new Date() + "<br>Доброй ночи"
    } else if (hour < 12) {
        timeBlock.innerHTML = new Date() + "<br>Доброе утро"
    } else if (hour < 18) {
        timeBlock.innerHTML = new Date() + "<br>Добрый день"
    } else {
        timeBlock.innerHTML = new Date() + "<br>Добрый вечер"
    }
}, 1000)

