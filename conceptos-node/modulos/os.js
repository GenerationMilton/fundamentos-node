const os= require('os');

console.log(os.arch());
console.log(os.platform());

//podemos acceder a la información de las cpus de mi pc.
console.log(os.cpus());

//Me muestran todos los errores de sistema.
console.log(os.constants);


const SIZE= 1024;
function kb(bytes){
    return bytes/SIZE
}
function mb(bytes){
    return kb(bytes)/SIZE
}
function gb(bytes){
    return mb(bytes)/SIZE
}

//Acceder a espacios de memoria es muy útil para saber si tengo a memoria suficiente para realizar esta operación.
//Me dice en bytes la memoria libre que tenemos
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

//Me muestra la memoria disponible del pc.
console.log(os.totalmem());

//Me dice en qué plataforma estoy
console.log(os.platform());


//Me devuelve la arquitecura de mi OS
console.log(os.arch());

//directorio raiz
// Me permite saber cual es el directorio raíz
console.log(os.homedir());
//Me muestra los directorios temporales, temproales una imagen que voy a procesar
console.log(os.tmpdir());

//hostname
//Voy a saber el hostname de la máquina
console.log(os.hostname());
//networkinterfaces
// Puedo acceder a mi interfaz de red activas en mi máquina, puedo saber  IPVX
console.log(os.networkInterfaces());
