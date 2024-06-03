function asincrona(callback){
    setTimeout(function(){
        try{
            let a =3+z;
            cancelIdleCallback(null,a);
        }catch(e){
            callback(e);
        }
    },1000);
}

    asincrona(function(err, dato){
        if(err){
            console.log('Tenemos un error');
            console.log(err);
            return false;
            // throw err; //NO VA A FUNCIONAR
            
        }
        console.log('todo ha ido bien, mi data es', dato);
    })

