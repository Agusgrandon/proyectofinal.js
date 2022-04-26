let productos = [{ id: 1,  nombre: "Celular Samsung A52", precio: 72000, img: "./img/celulares/CGG_Samsung-Galaxy-A52.jpg"},
                 { id: 2,  nombre: "Celular Samsung A52", precio: 72000, img: "./img/celulares/CGG_Samsung-Galaxy-A52.jpg"},
                 { id: 3,  nombre: "Celular Samsung A52", precio: 72000, img: "./img/celulares/CGG_Samsung-Galaxy-A52.jpg"},
                 { id: 4,  nombre: "Celular Samsung A73", precio: 80000, img: "./img/celulares/CGG_Samsung-Galaxy-A52.jpg"},
                 { id: 5,  nombre: "Celular Samsung A73", precio: 80000, img: "./img/celulares/CGG_Samsung-Galaxy-A52.jpg"},
                 { id: 6,  nombre: "Celular Samsung A73", precio: 80000, img: "./img/celulares/CGG_Samsung-Galaxy-A52.jpg"}];
/* para insertar las cards */
const contenedorProductos = document.getElementById("contenedor")
/* let carrito*/
let carrito = [] 
/* inserte las cards en el html*/
productos.forEach((producto) => {
    const div = document.createElement("div")
    div.innerHTML =  `  
    <div class="card" style="width: 18rem;">
    <img src=${producto.img} class="card-img-top" alt="celular">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="btn btn-dark">Agregar al carrito <i class="fas fa-shopping-cart"></i></button>
    </div>
    </div>
    
    `
    contenedorProductos.appendChild(div)
    
});

/* hago una funcion para agregar la card al carrito*/

const agregarAlCarrito = (prodId) => {
    const item = productos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    console.log("carrito");
}





/* evento del formulario */ 
document.getElementById("formulario").addEventListener("submit", function (e) {
    const mail = document.getElementById("mail").value;
    if(mail === ""){
        alert("completa el dato");
    } else {
        alert("suscripto!");
    }
 
 
    e.preventDefault();
 })
 /* termino el evento */ 