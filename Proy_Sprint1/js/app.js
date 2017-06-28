var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

return estudiantes;
console.log(estudiantes);
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nom,p_tec,p_hse;
    var arr=[];

    nom= prompt("Ingrese nombre de estudiante:",'');
    p_tec= prompt("Ingrese porcentaje tecnico de estudiante:",'');
    p_hse= prompt("Ingrese habilidades socioemocionales de estudiante:",'');
    nom=nom.toLowerCase();
    //insertando en un array
    arr.push(nom);
    arr.push(p_tec);
    arr.push(p_hse);

          var texto={};

          for(var i=0;i<arr.length;i++)
            {
              texto[ "nombre"+(i+1)] = arr[i];

            }

     estudiantes.push(texto);

     console.log(estudiantes);
     var a=texto;

         return a;

}

 function mostrar(estudiante) {
     // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
     var resultado = "";

       resultado += "<div class='row'>";
       resultado += "<div class='col m12'>";
       resultado += "<div class='card blue-grey darken-1'>";
       resultado += "<div class='card-content white-text'>";

        resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre1 + "</p>";
        resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.nombre2 + "</p>";
        resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.nombre3 + "</p>";

        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";

     return resultado;
 }
 function mostrarLista(estudiantes) {
     // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
     // Retornar el template de todos los estudiantes

  console.log(estudiantes);

          var resultado = "";
          resultado += "<div class='row'>";
          resultado += "<div class='col m12'>";
          resultado += "<div class='card blue-grey darken-1'>";
          resultado += "<div class='card-content white-text'>";
          for(var i=0; i<estudiantes.length; i++)
       {
         resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre1 + "</p>";
          resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].nombre2 + "</p>";
          resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].nombre3 + "</p>";

        }

        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        return resultado;

 }

 function buscar(nombre, estudiantes) {
     // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
     // Retornar el objeto del estudiante buscado
     // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
     nombre=nombre.toLowerCase();
     var res="";

     for(var i=0; i<=estudiantes.length; i++)
      {
           if( nombre == estudiantes[i].nombre1)
           {
             res=estudiantes[i];

             return res;

           }
      }
 }

 function topTecnico(estudiantes) {
     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

     var res = [];

     var newEs=[];
     for(var i=0; i< estudiantes.length; i++)
     {
        // ordenando primero los valores tecnicos y agregando en un arreglo
        newEs[i] = estudiantes[i].nombre2;

     }
      newEs.sort(function(a,b) { return a - b});
      var k = 0; // contador para para arreglo rest top tecnico
      for(var i=newEs.length; i >= 0; i--)
      {
        console.log('primero en la lista '+newEs[i]);
        for(var j = 0; j < estudiantes.length; j++){

          if(newEs[i] === estudiantes[j].nombre2){ // si el orden esta
            res[k] = estudiantes[j];
            k++;
          }
        }
      }

      console.log(res);
     return res;

 }
//
function topHSE(estudiantes) {
     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

     var res = [];

    var newEs=[];
    for(var i=0; i< estudiantes.length; i++)
    {
       // ordenando primero los valores tecnicos y agregando en un arreglo
       newEs[i] = estudiantes[i].nombre3;

    }
     newEs.sort(function(a,b) { return a - b});
     var k = 0; // contador para para arreglo rest top tecnico
     for(var i=newEs.length; i >= 0; i--)
     {
       for(var j = 0; j < estudiantes.length; j++){

         if(newEs[i] === estudiantes[j].nombre3){ // si el orden esta
           res[k] = estudiantes[j];
           k++;
         }
       }
     }

     console.log(res);
    return res;
 }
