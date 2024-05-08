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

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        // Resetear el objeto email
        email.asunto = '';
        email.email = '';
        email.mensaje = '';

        // Resetear el formulario
        formulario.reset();

        comprobarEmail();
    })
    // Funciones
    function validar(e) {
        //console.log('Capturando datos...');
        //console.log(e.target.value);
        // console.log(e.target.id); // ID del input, email, asunto, etc.
        // console.log(e.target.parentElement);
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
        // console.log('Despues del if');

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase(); // Asignar el valor del input al objeto email. 
        // console.log(email);

        // Comprobar el objeto email para validar que todos los campos esten completos.
        comprobarEmail();
    }
    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);
        
        // console.log('Hubo un error!!!');
        // Generar alerta de error en HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        // console.log(error);
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
    
        // Inyectar el error al formulario
        referencia.appendChild(error);
    }
    
    function limpiarAlerta(referencia){
        // console.log('Desde limpiar alerta');
        // Comprobar si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }
    
    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const tester = regex.test(email);
        // console.log(tester);
        return tester;
    }
    
    function comprobarEmail() {
        // console.log(email);
        // console.log(Object.values(email).includes(''));
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
        
    }
})

