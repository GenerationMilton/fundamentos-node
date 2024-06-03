function hola(nombre, miCallback) {
  //Funcion asincrona
  setTimeout(function () {
    console.log("Hola," + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla...");
    callbackHablar();
  },2000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

//evitar callbackHell
//En esta parte del código uso funciones recursivas porque
//estoy llamando a conversacion dentro de si misma. y mediante
//un If como estructura de control le digo que cantidad de veces
//va a  ejectuarse la funcion hablar.
function conversacion(nombre, veces, callback){
    if(veces>0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    }else {
        adios(nombre, callback);
    }
}

//--
console.log("Iniciando proceso...");

hola('Milton', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});

//callbackHell
// hola("Milton", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//         hablar(function () {
//             adios(nombre, function () {
//             console.log("Terminando proceso...");
//             });
//         });
//     });
//   });
// });
