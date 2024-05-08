document.addEventListener('DOMContentLoaded', function() {
    
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        resetFormulario();
    })
    // Funciones
    function validar(e) {
        
        if(e.target.value.trim() === '')  { // trim() elimina los espacios en blanco. 
            // console.log('Este campo esta vacio!!!');
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('Email no valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase(); // Asignar el valor del input al objeto email. 

        // Comprobar el objeto email para validar que todos los campos esten completos.
        comprobarEmail();
    }
    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);
        
        // Generar alerta de error en HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        // console.log(error);
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
    
        // Inyectar el error al formulario
        referencia.appendChild(error);
    }
    
    function limpiarAlerta(referencia){

        // Comprobar si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }
    
    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const tester = regex.test(email);

        return tester;
    }
    
    function comprobarEmail() {

        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            btnSubmit.classList.add('btn-locked');
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
        btnSubmit.classList.remove('btn-locked');
    }

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.remove('hidden');

        setTimeout(() => {

            spinner.classList.add('hidden');

            resetFormulario();

            // Crear alerta de envío
            const alertaExito = document.createElement('p');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'text-sm', 'font-bold', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 3000);
    }

    function resetFormulario() {
        // Resetear el objeto email
        email.asunto = '';
        email.email = '';
        email.mensaje = '';

        // Resetear el formulario
        formulario.reset();

        comprobarEmail();
    }
})

