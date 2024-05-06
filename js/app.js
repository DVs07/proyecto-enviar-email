document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    function validar(e) {
        //console.log('Capturando datos...');
        //console.log(e.target.value);
        // console.log(e.target.id); // ID del input, email, asunto, etc.
        // console.log(e.target.parentElement);
        if(e.target.value.trim() === '')  { // trim() elimina los espacios en blanco. 
            // console.log('Este campo esta vacio!!!');
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        }else {
            console.log('Hay algo en el campo');
        }
    }
})

function mostrarAlerta(mensaje, referencia){
    // console.log('Hubo un error!!!');
    // Generar alerta de error en HTML
    const error = document.createElement('p');
    error.textContent = mensaje;
    // console.log(error);
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

    // Inyectar el error al formulario
    referencia.appendChild(error);
}