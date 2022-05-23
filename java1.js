class Carrito {

    /*  para añadir un producto al carrito */ 
    comprarProducto(e){
        e.preventDefault();
        /* apretando el boton se agrega el producto */ 
        if(e.target.classList.contains("agregar-carrito")){
            /*se almacena el producto que seleccione en esta const */ 
            const producto = e.target.parentElement.parentElement;
             /*para leer el producto */ 
             this.leerDatosProducto(producto);
            
        }
    }
    /* indico los datos del producto para que los agrege */ 
    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector("img").src,
            titulo: producto.querySelector("h5").textContent,
            precio: producto.querySelector(".precio").textContent,
            modelo: producto.querySelector(".modelo").textContent,
            id: producto.querySelector("a"),
            cantidad: 1
        } 
        this.insertarCarrito(infoProducto);
    }
     /* para que aparesca en el carrito */ 
     insertarCarrito(producto){
         const row = document.createElement("tr");
         row.innerHTML =  ` 
         <td><img src="${producto.imagen}" alt="#" width=50></td>
         <td>${producto.titulo}</td>
         <td>${producto.precio}</td>
         <td>${producto.modelo}</td>
         <td><button class="borrar-producto btn btn-outline-danger" data-id="${producto.id}">Eliminar</button></td>
         `;
        listaProductos.appendChild(row);
        /* para guardarlo */ 
        this.guardarProductosLocalStorage(producto);
     }
    /* para que eliminar producto del carrito */ 
    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains("borrar-producto")){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector("a");
        }
        this.eliminarProductoLocalStorage(productoID);
    }
    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }
   /* local storage */
guardarProductosLocalStorage(producto){
    let productos;
    productos = this.obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
}
obtenerProductosLocalStorage(){
    let productoLS;
    /* para ver si hay algo en el carrito */
    if(localStorage.getItem("productos") === null){
        productoLS = [];
    }
    else {
        productoLS = JSON.parse(localStorage.getItem("productos"));
    }
    return productoLS;
}

eliminarProductoLocalStorage(productoID){
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function(productoLS, index){
        if(productoLS.id === productoID){
            productosLS.splice(index, 1);
        }
    });
    localStorage.setItem("productos", JSON.stringify(productosLS));
}
 /* si se actualiza, el carrito no se pierde */
leerLocalStorage(){
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (producto){
        const row = document.createElement("tr");
         row.innerHTML =  ` 
         <td><img src="${producto.imagen}" alt="#" width=50></td>
         <td>${producto.titulo}</td>
         <td>${producto.precio}</td>
         <td>${producto.modelo}</td>
         <td><button class="borrar-producto btn btn-outline-danger" data-id="${producto.id}">Eliminar</button></td>
         `;
        listaProductos.appendChild(row);
    });
}
/* para que aparesca en compra.html */
leerLocalStorageCompra(){
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (producto){
        const row = document.createElement("tr");
         row.innerHTML =  ` 
         <td><img src="${producto.imagen}" alt="#" width=50></td>
         <td>${producto.titulo}</td>
         <td>${producto.precio}</td>
         <td>${producto.modelo}</td>
         <td>${producto.precio * producto.cantidad}</td>
         <td><button class="borrar-producto btn btn-outline-danger" data-id="${producto.id}">Eliminar</button></td>
         `;
        listaCompra.appendChild(row);
    });
}
vaciarLocalStorage(){
    localStorage.clear();
}

/* link para que te lleve a compra.html */
procesarPedido(e){
    e.preventDefault();
    if(this.obtenerProductosLocalStorage().length === 0){
        /* SweetAlert */ 
        swal("¡Tu pedido esta vacio!");
        } else {
        location.href = "compra.html";
    }
}
/* para calcular el total */
calcularTotal(){
    let productosLS;
    let total = 0, subtotal = 0;
    productosLS = this.obtenerProductosLocalStorage();
    for(let i = 0; i < productosLS.length; i++){
        let element = Number(productosLS[i].precio * productosLS[i].cantidad);
        total = total + element;
        }
    subtotal = parseFloat(total).toFixed(2);
    document.getElementById("subtotal").innerHTML = " " + subtotal;
    document.getElementById("total").value = " " + total.toFixed(2);
}
}

