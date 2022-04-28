const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');

cargarEventos();

function cargarEventos(){

    /* este se ejecuta cuando se agrega al carrito */
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

     /* este se ejecuta cuando se elimina del carrito*/
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});
}

/* evento del formulario */ 
document.getElementById("formulario").addEventListener("submit", function (e) {
    const mail = document.getElementById("mail").value;
    if(mail === ""){
        /* SweetAlert */ 
        swal({
            title: "¡Ingresa el dato solicitado!",
            icon: "warning",
          });

    } else {
       
        swal({
            title: "¡Suscripto con éxito!",
            icon: "success",
          });
    }
    e.preventDefault();
 })
 /* termino el evento */ 