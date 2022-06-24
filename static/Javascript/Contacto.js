function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "pruebamicarrito@gmail.com",
      Password: "Prueba1234",
      To: document.getElementById("email").value,
      From: 'pruebamicarrito@gmail.com',
      Subject: "Correo de Contacto",
      Body: document.getElementById("motivo").value,
    })
      .then(function (message) {
        Swal.fire(
            'Correo Enviado',
            'El Correo de Contacto, fue enviado satifactoriamente',
            'success'
          )
      });
  }

  function Clean() {
    document.getElementById("motivo").value("");
    document.getElementById("email").value("");
    document.getElementById("nombre").value("");
  }