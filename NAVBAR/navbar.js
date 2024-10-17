let boton = [
    {categoria: "Much", href: "../PRODUCTOR/producto.html"},
    {categoria: "Many", href: "../PRODUCTOR/producto.html"},
    {categoria: "D", href: "../PRODUCTOR/producto.html"}]
    
let menu = [];

for(let boton of categorias){
    menu.push(`<a href="${boton.href}"> ${boton.categoria} </a>`)
}

let nav = document.querySelector("header");
nav.innerHTML = menu;