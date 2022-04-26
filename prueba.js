
const contenedorProductos = document.getElementById("contenedor")

productos.forEach((producto => {
    const div = document.createElement("div")
    div.innerHTML =  `  
    <div class="card" style="width: 18rem;">
    <img src=${producto.img} class="card-img-top" alt="celular">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#" class="btn btn-dark">Agregar al carrito</a>
    </div>
    </div>
    
    `

});



