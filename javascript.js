/* para insertar las cards */
const contenedorProductos = document.getElementById("contenedor")
/* let carrito*/
let carrito = [] 
/* inserte las cards en el html*/
productos.forEach((producto) => {
    const div = document.createElement("div")
    div.innerHTML =  `  
    <div class="card" style="width: 13rem;">
    <img src=${producto.img} class="card-img-top" alt="celular">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="btn btn-light">Agregar al carrito</button>
    </div>
    </div>
    
    `
    contenedorProductos.appendChild(div)

   
})

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