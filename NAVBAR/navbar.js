let boton = [
    {categoria: "Much", href: "../PRODUCTOR/producto.html"},
    {categoria: "Many", href: "../PRODUCTOR/producto.html"},
    {categoria: "D", href: "../PRODUCTOR/producto.html"}]
    
let menu = [];

for(let boton of categorias){
    menu.push(<a href="${boton.href}"> ${boton.categoria} </a>)
}

let nav = document.querySelector("header");
nav.innerHTML = menu;

let navcode =`
    <nav class="navbar navbar-expand-lg d-block bg-body-tertiary fixed-top">
        <div class="container-fluid d-flex">
            <a class-="navbar-brand" href="#">LITIO</a>
            <button class>"navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartiavAltMarkup" aria-controls="navbarttavAltMarkup" aria-expand
                <span class="navbar-togler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarnavaltMarkup">
                <div class="navbar-nav column gap 2">
                ${menu.join().replaceAll(",","")}
            </div>
            <div class="navbar-nav as-auto ne-3">
                ${localStorage.getItem("email") ?
                    <span style='cursor: pointer'>${localStorage.getItem("email")}</span> | <span style='cursor: pointer' onclick="logout()">Cerrar Sesión</span>
            : <a href="login.html" class="text-decoration-none">Iniciar Sesión</a>
            }
            </div>
        </div>
    </nav>`

header.innerHtml = navcode;

function logout(){
    localStorage.clear()
    location.href = "/index.html"
}