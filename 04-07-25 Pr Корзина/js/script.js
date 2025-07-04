const URL = "https://odinkeane.github.io/web-developer/data.json";
const cardsDiv = document.querySelector("#cards");
let result
let basket = /*[]*/ JSON.parse(localStorage.getItem("basket")) || []
//|| [] подругому можно записать так
// if(basket== undefined){
//     basket=[]
// }


window.addEventListener("load", async () => {
    result = await fetch(URL)
        .then(res => res.json())
    // console.log(result);
    generateCards()

})


function generateCards() {
    for (let card of result) {
        cardsDiv.innerHTML += generateCardHTML(card)
    }
}

function generateCardHTML(card) {
    return `
    <div class="card">
        <img src=${card.imageURL}>
        <h3>${card.name}</h3>
        <p>${card.price * 79}</p>    
        <button onclick='addToBasket(${card.id})'>Добавить</button>
    </div>  
    `
}


function addToBasket(id) {
    for (let card of result) {
        if (card.id == id) {
            basket.push(card)
            break
        }
    }
 /*отвечает за установку*/  localStorage.setItem("basket", JSON.stringify(basket))

}









