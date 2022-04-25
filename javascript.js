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