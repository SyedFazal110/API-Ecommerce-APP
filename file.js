const div = document.querySelector("div")
axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data)
    res.data.map((item)=>{
        div.innerHTML +=`
        <div class="card" style="width: 18rem;">
          <div class="card-body">
             <img width='200' height='250' src="${item.image}" class="card-img-top" alt="image">
             <h4 class="card-text">Category : ${item.category}</h4>
             <h5 class="card-title">ID : ${item.id}</h5>
             <h6>Price : ${item.price}</h6>
             <h6>Title : ${item.title}</h6>
          </div>
       </div>`
    })
})
.catch((err)=>{
    console.log(err)
})