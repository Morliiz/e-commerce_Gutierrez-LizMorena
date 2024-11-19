  const data = [
    {
    id: 1,
    TITULO: "Chevrolet",
    DETALLE: "Traverse",
    PRECIO: 32,
    STOCK: 18,
    IMAGEN: "#473",
    categoria: "Nuevo",
  }, {
    id: 2,
    TITULO: "Hummer",
    DETALLE: "H3",
    PRECIO: 19,
    STOCK: 34,
    IMAGEN: "#362",
    categoria: "Nuevo",
  }, {
    id: 3,
    TITULO: "Dodge",
    DETALLE: "Ram 3500 Club",
    PRECIO: 99,
    STOCK: 33,
    IMAGEN: "#339",
    categoria: "Nuevo",
  }, {
    id: 4,
    TITULO: "Lotus",
    DETALLE: "Elan",
    PRECIO: 70,
    STOCK: 98,
    IMAGEN: "#a18",
    categoria: "Usado",
  }, {
    id: 5,
    TITULO: "Mazda",
    DETALLE: "B2000",
    PRECIO: 62,
    STOCK: 98,
    IMAGEN: "#036",
    categoria: "Nuevo",
  }, {
    id: 6,
    TITULO: "BMW",
    DETALLE: "325",
    PRECIO: 2,
    STOCK: 25,
    IMAGEN: "#c07",
    categoria: "Usado",
  }, {
    id: 7,
    TITULO: "Pontiac",
    DETALLE: "Sunfire",
    PRECIO: 25,
    STOCK: 25,
    IMAGEN: "#35e",
    categoria: "Usado",
  }, {
    id: 8,
    TITULO: "Hyundai",
    DETALLE: "XG300",
    PRECIO: 78,
    STOCK: 23,
    IMAGEN: "#7af",
    categoria: "Nuevo",
  }, {
    id: 9,
    TITULO: "Oldsmobile",
    DETALLE: "Achieva",
    PRECIO: 65,
    STOCK: 56,
    IMAGEN: "#8c4",
    categoria: "Usado",
  }, {
    id: 10,
    TITULO: "Pontiac",
    DETALLE: "Bonneville",
    PRECIO: 26,
    STOCK: 19,
    IMAGEN: "#775",
    categoria: "Usado",
  }]

function card(data) {
  let main = document.querySelector("main");

  let array = data.map(auto => (`
    <div class="card" style="width: 18rem;">
     <img src="..." class="card-img-top" alt="...">
     <div class="card-body">
        <h3 class="product-title">${auto.TITULO} </h3>
        <p class="product-pricing">${auto.PRECIO} </p> 
        <p class= "product-description">${auto.DETALLE}</p>
        <p class= "product-nvorus">${auto.categoria}</p>
        <div class="produc-button-container"> 
         <a href="../PRODUCTOR/producto.html?prod=${auto.id}" class="product-button">Ver mas</a> 
        </div>
     </div>
    </div>`       
  ))
  main.innerHTML = array
}
card(data);

//buscador
let Buscadorinput = document.querySelector ("input");

function buscador(){
  
  let filtered = data.filter((auto) => auto.TITULO.toLowerCase() === Buscadorinput.value.toLowerCase())

  let Card = filtered.map ((auto) =>
  `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
          <h3 class="product-title">${auto.TITULO} </h3>
          <p class="product-pricing">${auto.PRECIO} </p> 
          <p class= "product-description">${auto.DETALLE}</p>
          <p class= "product-nvorus">${auto.categoria}</p>
          <div class="produc-button-container"> 
          <a href="../PRODUCTOR/producto.html?prod=${auto.id}" class="product-button">Ver mas</a> 
          </div>
      </div>
    </div>` 
  );
    document.querySelector("main").innerHTML = Card.join().replaceAll(",", "");

//}else{ console.log("producto no encontrado")}
}

let btnFilter = document.getElementById("FilterAuto");
btnFilter.addEventListener("click", buscador);

//CATEGORIAS

function filtrar(category) { 
  if(category == "Todos"){
    card(data)
    document.querySelector ("header").innerHTML = Filtrar.join().replaceAll(",", "");
  } else {
  let filterData = data.filter((auto) => auto.categoria === category);
    card(filterData);
    document.querySelector(".container").innerHTML = Filtrar.join().replaceAll(",", "");
   }
}

//BOTON DE BORRAR INPUT

let btnClean = document.getElementById("reset");
btnClean.addEventListener ("click", () => { Buscadorinput.value = ""; card(data)});

