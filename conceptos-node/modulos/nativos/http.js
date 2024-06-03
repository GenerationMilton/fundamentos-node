const http = require('http');
// importamos el modulo
// es recomenado no inicializar la funcion aquñi por los callbacks

http.createServer(router).listen(3000);

function router(req,res){
    console.log('Nueva peticion!');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            let saludo = hola();
            res.write(saludo);
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

    // res.writeHead(201,{'Content-type':'text/plain'})

    // Escribir respuesta al usuario
    // res.write('Hola, ya se user Http de NodeJs!');
    // res.end();

}
function hola(){
    return 'Hola, que tal';
}

console.log("Escuchando en el puerto 3000");