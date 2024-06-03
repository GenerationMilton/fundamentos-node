

//+ Por buenas prácticas heredadas de Linux las variables de entorno que vengan desde fuera (process.env.VARIABLE ) se ponen en mayúscula y se separan mediante guion bajo en vez de espacio.


let nombre= process.env.NOMBRE || 'Sin nombre';
let web= process.env.WEB|| 'no tengo web'
var apiKey = process.env.APIKEY || 'HF33o9oERVERVEEEEs';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);


// Me retornara { Hola Sin nombre, mi web es notengo web} ya que tiene  la expresión OR || me asigna estas variables por defecto

// Para que las variables de entorno me tomen valores puedo hacer varias cosas:

//  Desde la terminal asignarle las variables antes del codigo:
// NOMBRE= MILton WEB= livemilton.com