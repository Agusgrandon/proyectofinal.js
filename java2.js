

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