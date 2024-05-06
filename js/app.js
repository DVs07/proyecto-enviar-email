document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos
    inputEmail.addEventListener('blur', capturarDatos);
    inputAsunto.addEventListener('blur', capturarDatos);
    inputMensaje.addEventListener('blur', capturarDatos);
    function capturarDatos(e) {
        //console.log('Capturando datos...');
        //console.log(e.target.value);
        if(e.target.value.trim() === '')  { // trim() elimina los espacios en blanco. 
            // console.log('Este campo esta vacio!!!');
            mostrarAlerta();
        }else {
            console.log('Hay algo en el campo');
        }
    }
})

function mostrarAlerta(){
    // console.log('Hubo un error!!!');
    // Generar alerta de error en HTML
    const error = document.createElement('p');
    error.textContent = 'Hubo un error';
    // console.log(error);
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

    // Inyectar el error al formulario
    formulario.appendChild(error);
}