const {exec, spawn} = require('child_process');
const { stdout, stderr } = require('process');
//const exec = require('child_process').exec;  --equivalente

// exec('node modulos/consola.js', (err, stdout, sterr)=> {
//     if(err){
//         console.log(err);
//         return false;
//     }

//     console.log(stdout);
// })

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('Esta muerto?');
    console.log(process.killed);
    console.log(dato.toString());
})

proceso.on('exit', function(){

    console.log('El proceso termino');
    console.log(proceso.killed);
})