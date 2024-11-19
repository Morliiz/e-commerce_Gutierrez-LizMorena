Cart.js
document.addEventListener ("DOMContentLoaded", () => {
    const div = document.queryselector (".cartProducts");
    const price = document. queryselector(".finalPrice");
    const navCart = document. querySelector ("#quantity");
    let cart = JSON.parse(localstorage.getItem("cart")) || [];

    const cartaCards = (cart) => { 
        const cartCard = cart.map((card) => `
            <div class="card row mb-3 ms-1 me-2">
                <div id="cardDiv" class="col-x1-8">
                    <div>
                        <div class="card-body">
                            <div class="d-flex align-items-start border-bottom pb-3">
                                <div class="me-4">
                                    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${card.product.url}.jpg" height="200px" class="avatar"></img>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="text-truncate font-size-18">${card.product.modelo}</h5>
                                </div>
                                </div>
                                <div class="row mt-3">
                                <div class="col-md-4">
                                <p class="text-muted mb-2">Precio</p>
                                <h5 class="mb-0 mt-2">$${card.product.precio}</h5>
                                </div>
                                <div class="col-md-4">
                                <p class="text-muted mb-2">Cantidad</p>
                                <h5 class="mb-0 mt-2">$(card.quantity)</h5>
                                </div>
                                <div class="col-md-4">
                                <p class="text-muted mb-2">Total a pagar</p>
                                <h5>${(card.quantity * card-product-precio).toFixed(2)}</h5>
                                <p onclick="removeCart(${card-product.id})">Eliminar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        )
    }
}
)