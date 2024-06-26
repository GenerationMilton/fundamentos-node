async function hola(nombre) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Hola, " + nombre);
        resolve(nombre);
      }, 1500);
    });
  }
  
async function hablar(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("bla bla bla bla bla...");
        //resolve(nombre);
        //reject('Hay un error');
        resolve('Hay un error');
      }, 1000);
    });
  }
  
async function adios(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("Adios", nombre);
        resolve();
      }, 1000);
    });
  }

//llamar la asyn await function
async function main(){
    let nombre = await hola('Milton');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
}
  
console.log('Empezamos el proceso');
main();
console.log('Va a ser la segunda instruccion');