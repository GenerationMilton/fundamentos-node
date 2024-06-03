function otraFuncion(){
    return serompre();
}

function serompe(){
    return 3+z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){
        try {
            return 3+z;
        } catch (error) {
            console.error('Error en mi funcion asincrona');
            cb(error);
        }
        
    })
}



try{
   // otraFuncion();
   //serompe();
   seRompeAsincrona(function(error){
    console.log(error.message);
   });
} catch(err){
    console.error('Vaya, algo se a roto...');
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('esto de aqui esta al final');
