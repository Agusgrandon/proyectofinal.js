/* evento del formulario */ 
document.getElementById("formulario").addEventListener("submit", function (e) {
    const mail = document.getElementById("mail").value;
    alert("Suscripto!");
 
    e.preventDefault();
 })