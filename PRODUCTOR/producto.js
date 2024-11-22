const data = [
    {
    id: 1,
    TITULO: "Chevrolet",
    DETALLE: "Traverse",
    PRECIO: 32,
    STOCK: 18,
    IMAGEN: "#473"
  }, {
    id: 2,
    TITULO: "Hummer",
    DETALLE: "H3",
    PRECIO: 19,
    STOCK: 34,
    IMAGEN: "#362"
  }, {
    id: 3,
    TITULO: "Dodge",
    DETALLE: "Ram 3500 Club",
    PRECIO: 99,
    STOCK: 33,
    IMAGEN: "#339"
  }, {
    id: 4,
    TITULO: "Lotus",
    DETALLE: "Elan",
    PRECIO: 70,
    STOCK: 98,
    IMAGEN: "#a18"
  }, {
    id: 5,
    TITULO: "Mazda",
    DETALLE: "B2000",
    PRECIO: 62,
    STOCK: 98,
    IMAGEN: "#036"
  }, {
    id: 6,
    TITULO: "BMW",
    DETALLE: "325",
    PRECIO: 2,
    STOCK: 25,
    IMAGEN: "#c07"
  }, {
    id: 7,
    TITULO: "Pontiac",
    DETALLE: "Sunfire",
    PRECIO: 25,
    STOCK: 25,
    IMAGEN: "#35e"
  }, {
    id: 8,
    TITULO: "Hyundai",
    DETALLE: "XG300",
    PRECIO: 78,
    STOCK: 23,
    IMAGEN: "#7af"
  }, {
    id: 9,
    TITULO: "Oldsmobile",
    DETALLE: "Achieva",
    PRECIO: 65,
    STOCK: 56,
    IMAGEN: "#8c4"
  }, {
    id: 10,
    TITULO: "Pontiac",
    DETALLE: "Bonneville",
    PRECIO: 26,
    STOCK: 19,
    IMAGEN: "#775"
  }]
function ca(data) {
    let main = document.querySelector("main");

    let id = Number(window.location.search.split("=")[1]);

    const auto = data.find((car) => car.id === id);

    let contenido =`
    <div class="card">
     <img class="product-img" src="${auto.IMAGEN}" alt="${auto.TITULO}">
     <div class="card-body">
        <h3 class="product-title">${auto.TITULO} </h3>
        <p class="product-pricing">${auto.PRECIO} </p> 
        <p class= "product-description">${auto.DETALLE}</p>
        <div class="product-button-container"> 
    ${localStorage.getItem ("email")
      ? `<div class="input-group">
      <button class="btn btn-danger" id="mas" type="button" onclick="increaseItem()">+</button>
      <input type="number"  id="number" class= "form-control" value="1">
      <button class="btn btn-danger" id="menos" type="button" onclick="decreaseltem()">-</button>
      </div>
      <a class="btn btn-primary col-12" onclick="addItems()">Agregar al carrito</a>`
      : '<a href="./login.html" class="btn btn-primary col-12">Iniciar sesión para comprar</a>'
      }
      
      </div>
    </div>
  </div>`
    main.innerHTML = contenido
}

ca(data)

let counter = document.querySelector("#number")

function increaseItem(){
    const idProduct = Number(window.location.search.split("=")[1])
    const product = data.find(item => item.id === idProduct)

    if (counter.value < product.STOCK) {
        counter.value = Number(counter.value) + 1
    }
}


function decreaseltem(){
    if (1 < counter.value) {
        counter.value = Number(counter.value) - 1
    }
}

function addItems(){
    let cart = JSON.parse(localStorage.getItem("cart"))
    const idProduct = Number(window.location.search.split("=")[1])
    const product = data.find(item => item.id === idProduct)
    const existeIdEnCart = cart.some(item => item.product.id === idProduct)

    if (existeIdEnCart) {
        cart = cart.map(item => {
            if (item.product.id === idProduct) {
                return { ... item, quantity : item.quantity + Number(counter.value) }
            } else{
                return item;
            }
        })
    } else{
        cart.push({ product: product, quantity: Number(counter.value) })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    document.querySelector("#number").value = 1

    let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)

    localStorage.setItem("quantity", JSON.stringify(quantity))

    Toastify({
        text:"......",
        style:{
            background: "#DB5079"
        },
    }
    ).showToast()
}

