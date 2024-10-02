let categorias = [{
    categoria: "Camionetas", href: "/productos.html"},
    {categoria: "Sedanes", href: "/productos.html"},
    {categoria: "De lujo", href: "/productos.html"}]

let menu = [];

for(let boton of categorias){
    menu.push(`<l1><a href="$(boton.href)"><h1>$(boton.categoria)</h1>/a></l1>`);
}
document.querySelector ('header').innerHTML = menu;