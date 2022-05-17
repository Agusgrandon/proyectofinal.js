class Carrito {

    /*  para añadir un producto al carrito */ 
    comprarProducto(e){
        e.preventDefault();
        /* apretando el boton se agrega el producto */ 
        if(e.target.classList.contains('agregar-carrito')){
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
            id: producto.querySelector('a').getAttribute('data-id'),
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
         <td><button class="borrar-producto btn btn-outline-danger" data-id="${producto.id}">Eliminar</button></td>
         `;
        listaProductos.appendChild(row);
        /* para guardarlo */ 
        this.guardarProductoEnLocalStorage(producto);
     }
    /* para que eliminar producto del carrito */ 
    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains("borrar-producto")){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
        }
        
    }
    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        return false;
    }

}