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
     <img class="product-img" alt = "">
     <div class="card-body">
        <h3 class="product-title">${auto.TITULO} </h3>
        <p class="product-pricing">${auto.PRECIO} </p> 
        <p class= "product-description">${auto.DETALLE}</p>
        <div class="produc-button-container"> 
         <a href="../PRODUCTOR/producto.html?prod=${auto.id}" class="product-button">Comprar</a> 
        </div>
     </div>
    </div>`    
    main.innerHTML = contenido
}

ca(data);