const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById("carrito");

finalizarCompra();

function finalizarCompra() {
    /* para que aparesca en compra.html */
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    /* para eliminar el producto */
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();
}