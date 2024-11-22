const cardsSection = document.querySelector(`#cart`)

function getCart(cards){
    const list = cards.map(
        card => `<div class="card border shadow-none">
      <div class="card-body">
       <div class="d-flex align-items-start border-bottom pb-3">
        <div class="me-4">
         <img class="img"
          src="${card.product.img}"
          alt=""
          class="avatar-lg rounded"
         />
        </div>
        <div class="flex-grow-1 overflow-hidden">
         <h5 class="text-truncate font-size-18">${card.product.title}</h5>
         <div class="row">
          <div class="col-md-4">
           <div class="mt-3">
            <p class="text-muted mb-2">Cantidad</p>
            <h5 class="mb-0 mt-2">${card.quantity}</h5>
           </div>
          </div>
          <div class="col-md-5">
           <div class="mt-3">
            <p class="text-muted mb-2">Precio</p>
            <h5 class="mb-0 mt-2">$${card.product.price}</h5>
           </div>
          </div>
          <div class="col-md-3">
           <div class="mt-3">
            <button class="btn-delete" onclick="deleteItem(${card.product.id})"><span class="material-symbols-outlined">delete</span></button>
            <p class="text-muted mb-2">Total</p>
            <h5>$${card.product.price * card.quantity}</h5>
           </div>
          </div>
         </div>
        </div>
        </div>
        </div>
        </div>`
    )
    cardsSection.innerHTML = list.join("");

}


getCart(JSON.parse(localStorage.getItem("cart")))

function Total(cards){
    let cardTotal = document.querySelector("#cart-total");

    let total = cards.reduce(
        (acumulado, actual) => acumulado + actual.product.price * actual.quantity, 0

    )
    
    cardTotal.innerText = "$" + total;
}
Total(JSON.parse(localStorage.getItem("cart")))



function clearCart(){
    localStorage.setItem("cart", JSON.stringify([]));
    getCart([]);
    Total([]);
    
    localStorage.setItem("quantity", 0)
}



function deleteItem(id){
    const cards = JSON.parse(localStorage.getItem("cart")) || [];
    const newCards = cards.filter(card => card.product.id !== id)
    localStorage.setItem("cart", JSON.stringify(newCards))

    getCart(newCards)
    total(newCards)

    let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
    localStorage.setItem("quantity", quantity)
    const quantityTag = document.querySelector("#quantity")
    quantityTag.innerText = quantity;

}

function back(){
    window.location.href = "/index.html"
}


function checkoutBtn() {
    const order = {
        user: localStorage.getItem("email"),
        items: JSON.parse(localStorage.getItem("cart")),
    };

    fetch("https://673ac5fc339a4ce44519130a.mockapi.io/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order),
    })
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                title: `La orden #${data.id} ha sido procesada exitosamente, ${data.user}.`,
                text: "100% real",
                icon: "success"
            });
            clearCart();
        })
        .catch(() => {
            Swal.fire({
                icon: "error",
                title: "Uyuyuy...",
                text: "¡Sucedió un error!",
                footer: '<a href="/cart.html">Volver al carrito</a>'
            });
        });
}