// const  name = "Роман"
// const  surname = "Смит"
// const age = 30
// const height = 180

// const name2 = "Иван"
// const



// const film = {
//     title: "Аватар",
// genres: "фантастика",
// year: 2008

// }


// console.log(film)

// const articles = document.querySelectorAll("#articles")
// window.addEventListener("load", async () => {
//     const result = await fetch("https://odinkeane.github.io/web-developer/react-6/data.json")
//         .then(res => res.json())
//     console.log(result)



//     for (let article of result.articles) {
//         articles.innerHTML += `
//             <article class="card">
//                 <h2>${article.article_name}</h2>
//                 <img src=${article.image}>
//             </article>
//         `
//     }
// })

// const articles = document.querySelector("#articles")
// window.addEventListener("load", async () => {
//     const result = await fetch("https://odinkeane.github.io/web-developer/react-6/data.json")
//         .then(res => res.json())
//     console.log(result)

//     for (let article of result.articles){
//         articles.innerHTML += `
//             <article class='card'>
//                 <h2>${article.article_name}</h2>
//                 <img src=${article.image}>
//             </article>
//         `
//     }
// })


const articles = document.querySelector("#articles")
window.addEventListener("load", async () => {
    const result = await fetch("https://odinkeane.github.io/web-developer/react-6/data.json")
        .then(res => res.json())
    console.log(result)

    for (let article of result.articles){
        articles.innerHTML += `
            <article class='card'>
                <h2>${article.article_name}</h2>
                <img src=${article.image}>
            </article>
        `
    }
})