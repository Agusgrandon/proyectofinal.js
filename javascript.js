/* carrito */ 








/* evento de la card */ 
document.getElementById("agregarProducto").addEventListener("click", function(){
                       const celular = document.getElementById("celular");
                       const precio = document.getElementById("precio");

                       console.log(new Product(celular, precio));

})









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