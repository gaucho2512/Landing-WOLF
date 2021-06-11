




 /* Validacion de Formulario */
 const formulario =  document.getElementById("formulario");
 
  function validarFormulario(event) {

    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el Nombre*');
      return;
    }

    
    let rut = document.getElementById('rut').value;
    if( rut == null || rut.length == 0 || isNaN(rut)){
        alert('Debe ingresar un RUT Valido*');
        return false;
    }

    

    let telefono = document.getElementById('telefono').value;
    if( telefono == null || telefono.length == 0 || isNaN(telefono)){
        alert('Debe ingresar un Telefono*');
        return false;
    }


  }

   formulario.addEventListener('submit' , validarFormulario);


