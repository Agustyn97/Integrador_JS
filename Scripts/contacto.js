
    const contenedorInputs = document.querySelector(".contenedor-inputs");
    const formularioContacto = document.querySelector(".form-contacto");
    const botonSubmit = document.querySelector(".buttonIS");
    const inputNombre = document.querySelector(".input-nombre");
    const inputEmail = document.querySelector(".input-email");
    const inputMensaje = document.querySelector(".input-mensaje");
    
    const mensageInitial = {
        nombre: "",
        email: "",
        mensaje: ""
    }
    
    /* contacto */
    
    formularioContacto.addEventListener("submit", (e) => {
        e.preventDefault()
        submitMensaje(alert("aaa"))
        console.log(preventDefault);
    })
    
    botonSubmit.addEventListener("click", () => {
        mensageInitial.nombre = inputNombre.value;
        mensageInitial.email = inputEmail.value;
        mensageInitial.mensaje = inputMensaje.value;
    })
    
    function submitMensaje() {
        contenedorInputs.innerHTML = `
        <div class="mensaje">
            <h3 class="mensaje-title">Muchas gracias por tu mensaje <span class="nombreUsuario">${mensageInitial.nombre}</span> en breve nos pondremos en contacto.</h3>
        </div>`
    }