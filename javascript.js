/* carrito */ 
class Producto {
    constructor(nombre, celular, precio, cantidad) {
        this.celular= celular
        this.precio = precio
        this.cantidad = cantidad
        this.nombre = nombre
    }
}
/* carrito */  
let li
let divCarrito = document.getElementById("carrito")
let divDelLi =document.getElementById("lista")

function crearDropdown(divi){
    for (i of JSON.parse(localStorage.getItem("carrito"))){
        li = document.createElement("li")
        li.innerHTML = `
          <div class="filaDelCarrito d-flex justify-content-evenly">
            <p class="parrafo" >${i.celular}<p>
            <p class="parrafo" >${i.cantidad} und.<p>
            <button class="btn" id="btn-eliminar${i.id}"></button>
            <p class="parrafo">$${i.precio*i.cantidad}<p>
          <div>
          `
        divi.append(li)
    }
}
/* carrito */ 
function actualizarDom(div, cantidades) {
    let cantidad = div.querySelector(".cantidad")
    cantidad.innerHTML = cantidades
}

function irAlCarrito(producto){
    let comprar = document.getElementById("boton")
    comprar.onclick = () => {
        if (carrito.find((el) => el.nombre == producto.celular)){
            producto.cantidad++;
        }
        else{
            carrito.push(producto)
        }
    
    }
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