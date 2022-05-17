const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventos();

function cargarEventos(){

    /* este se ejecuta cuando se agrega al carrito */
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

     /* este se ejecuta cuando se elimina del carrito*/
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});
     //Al vaciar carrito
     vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    
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
 /* termino el evento */ 