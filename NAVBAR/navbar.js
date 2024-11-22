let boton = [
    { categoria: "Much", href: "../PRODUCTOR/producto.html" },
    { categoria: "Many", href: "../PRODUCTOR/producto.html" },
    { categoria: "D", href: "../PRODUCTOR/producto.html" }
];

let menu = [];

for (let item of boton) {
    menu.push(`<a href="${item.href}">${item.categoria}</a>`);
}

let nav = document.querySelector("header");

if (nav) { 
    let navcode = `
        <nav class="navbar navbar-expand-lg d-block bg-body-tertiary fixed-top">
            <div class="container-fluid d-flex">
                <a class="navbar-brand" href="../index.html">LITIO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnavaltMarkup" aria-controls="navbarnavaltMarkup" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarnavaltMarkup">
                    <div class="navbar-nav column gap-2">
                        ${menu.join("").replaceAll(",", "")}
                    </div>
                    <div id="cart-section"> </div>
                    <div class="navbar-nav ms-auto me-3">
                        ${localStorage.getItem("email") ? 
                            `<span style='cursor: pointer'>${localStorage.getItem("email")} </span>  |  
                             <span style='cursor: pointer' onclick="logout()"> Cerrar Sesión </span>` 
                        : `<a href="../LOGIN+CAR/login.html" class="text-decoration-none">Iniciar Sesión</a>`}
                    </div>
                </div>
            </div>
        </nav>`;

    nav.innerHTML = navcode;
}

function logout() {
    localStorage.clear();
    location.href = "../index.html";
}

/*let navBar = document.querySelector("#cart-section");
let carBuy = `<span>|</span><li><img width="55px" src="./fotos/online-shopping-stroke-icon-online-shopping-edb6af.webp" alt="comprar" class="cart-img"></span></a>
        <b class="cantidad" id="quantity">${localStorage.getItem("quantity")}</b></li><span>|</span>`
navBar.innerHTML = carBuy;*/
let navBar = document.querySelector("#cart-section");
let quantity = localStorage.getItem("quantity") || 0;
let carBuy = `
    <div class="carro">
        <a href="../LOGIN+CAR/cart.html">
            <img id="carrito" src="./fotos/online-shopping-stroke-icon-online-shopping-edb6af.webp" alt="comprar" class="cart-img">
        </a>
        <b class="cantidad ms-2" id="quantity">${quantity}</b>
    </div>`;
navBar.innerHTML = carBuy;

if(localStorage.getItem("cart").length == 0){
    const quantityTag = document.querySelector("#quantity")
    quantityTag.innerText = quantity;
}
