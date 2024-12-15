const card = document.getElementById("cardSection")
const inputField = document.getElementById("input")

let search=()=>{
    
     const API_key = `https://newsapi.org/v2/everything?q=${inputField}&from=2024-11-08&sortBy=publishedAt&apiKey=e4b26ecf72d146d8925195abfbbf499a`
    fetch(API_key)
    .then((res)=> res.json() )
    .then((data)=>{
    console.log(data);

    data.articles.map((e,i)=>{
    // console.log(e);
    card.innerHTML+=`<div class="card" style="width: 18rem;">
      <img src=${e.urlToImage} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
        <p class="card-text">${e.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`  
    }) 
    })
    .catch((error)=>{
        console.log(error.message);
        
    })
}
