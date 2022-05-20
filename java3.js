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

document.getElementById("procesar-pago").addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const domicilio = document.getElementById("domicilio").value;
    if (compra.obtenerProductosLocalStorage().length === 0) {
        swal({
            title: "¡Tu carrito esta vacio!",
            icon: "warning",
          });
    }
    else if (nombre === "" || email === "" || apellido === "" || telefono === "" || domicilio === ""){
        /* SweetAlert */ 
        swal({
            title: "¡Ingresa los datos solicitados!",
            icon: "warning",
          });
    } else {
   
        swal({
            title: "¡Compra realizada con éxito",
            text: "Te enviamos a tu mail el detalle de tu compra",
            icon: "success",
            button: "Cerrar",
          });
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
           mail:"mail",
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

    e.preventDefault();
 })





 