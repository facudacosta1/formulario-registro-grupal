function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// creamos evento para cuando cargue el DOM

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('regBtn').addEventListener('click', validarRegistro);

    // seleccionamos los valores de los elementos del form
    function validarRegistro() {
      var nombre = document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var email = document.getElementById('email').value;
      var password1 = document.getElementById('password1').value;
      var password2 = document.getElementById('password2').value;
      var terminos = document.getElementById('terminos').checked;

    // agregamos seccion de condicion para error si no ingresan valores en los campos
      if (nombre === '' || apellido === '' || email === '' || password1 === '' || password2 === '' || !terminos) {
        showAlertError();
        return;
      }
    
    // condicion para que la contraseña sea mayor a 6 caracteres y sea igual password1 y 2
      if (password1.length < 6 || password1 !== password2) {
        showAlertError();
        return;
      } else {
          showAlertSuccess();  // muestra validacion correcta si se cumple todo
      }
    }
})

    
