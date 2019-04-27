
var formulario = document.querySelector("form");
//var nombre = document.getElementById("name");

formulario.onsubmit = function(e){
e.preventDefault();



var nombre_form = formulario.elements[0];
var apellido_form = formulario.elements[1];
var edad_form = formulario.elements[2];
var nacionalidad_form = formulario.elements[3];
var soltera_form = formulario.elements[4];
var casada_form = formulario.elements[5];
var ninguno_form = formulario.elements[6];

var nombre = nombre_form.value;
var apellido = apellido_form.value;
var edad = edad_form.value;
var estado = "";
var i = nacionalidad_form.selectedIndex;
var nacionalidad = nacionalidad_form.options[i].value

if (nombre.length === 0){    
    nombre_form.classList.add("vacio");
}

if (edad < 18 || edad > 120){
    alert("Tu edad es incorrecta");
}

if (soltera_form.checked){
    estado = soltera_form.value;
}
  else if (casada_form.checked){
      estado = casada_form.value;
  }
     else {
         estado = "vacío";
     }

     console.log(nombre,apellido, edad);
     console.log(estado);
     console.log(nacionalidad);

     var nuevoDiv = document.createElement("div");
var caja = document.getElementById("formulario");
caja.appendChild(nuevoDiv);
nuevoDiv.id = "estiloDiv";
     
}







//function pegarDatos(nombre, apellido, edad, estado, nacionalidad) {}






/*var form = document.querySelector("form");




form.onsubmit = function (e){
    var nombre = document.getElementById("username");
    e.preventDefault();   
    //console.log(nombre.value);
    if (nombre.value.length < 3) {
        nombre.classList.add("malEscrito")
    } else {
        alert("Bienvenida");
        
    }
    var apellido = document.getElementById("pass");
    var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
   //console.log(apellido.value);
   if (pass.value.length < 8) {
       for (var i = 0; i < pass.value.length; i++) {
           //console.log(pass.value[i]);
       }
       for (var j = 0; j < numeros.length; j++) {
        //console.log(numeros[j]); 
           
    }
    
    if (pass.value[i] == numeros[j]) {
        alert(envio);
    } else{
        pass.classList.add("malEscrito");
    }
  
   }
   

}





form.onsubmit = function(evento) {
 evento.preventDefault();
console.log(select.options);  // retorna la colección de elementos options
console.log(select.selectedIndex);  // retorna el índice del valor seleccionado
var indice = select.selectedIndex
select.options[indice]; // retorna el option seleccionado
console.log(select.options[indice]); // retorna el elemento seleccionado.
console.log(select.options[indice].value); // retorna el valor del elemento seleccionado.
}


var checkboxes = document.getElementById("check")
var gato = checkboxes[0]; //manera cabeza de interactuar con las opciones dek checkbox
var perro = checkboxes[1];
var gato = document.querySelector("checked:input") // selecciona todos los que eligió el usuario

console.log(gato.checked);
console.log(gato.value); */






/* Tarea: formulario
Input que pida el nombre
- Si el nombre tiene menos de 3 caracteres,
al enviar el formulario se pone rojo

Input que pida un password
- Si el password tiene menos de 8 caracteres
o no tiene ningun numero, al enviar
el formulario se pone en rojo

- Select de opciones (mascotas, pokemones, etc)
Al enviar el form, si esta bien todo, navegamos a
la opcion seleccionada */