usuario = document.getElementById("usuario");
password = document.getElementById("contra")
btn = document.getElementById("boton1");
error = document.getElementById("error");
function validacion(){

    error.style.color = 'red';

    console.log("enviando comentario");

    let mensajeError = [];

    if( usuario.value == null || usuario.value == ''){
        mensajeError.push('Ingresa tu usuario');
    }

    if(password.value == null || password.value == ''){
        mensajeError.push('Ingresa tu password');
    }

    error.innerHTML = mensajeError.join(', ');
    return false;
}
