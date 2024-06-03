console.log('Algo --log');

console.info('Algo --info');

console.error('Algo --error');

console.warn('Algo --warn');


var tabla =[
    {
        a:1,
        b:'Z'
    },
    {
        a:2,
        b:'Otra'
    }
]
console.table(tabla);



console.group('Conversacion');
console.log('Hola');
console.log('Blblabla');
console.log('Adios');
console.groupEnd('Conversacion');

console.log('Otras cosas de otra funcion');


function funcion1(){
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    funcion2()
    console.log('Hemos vuleto a la 1');
    console.groupEnd('funcion 2');
}

function funcion2(){
    console.group('funcion 2');
    console.log('ahora estamos en la funcion 2');
    console.groupEnd('funcion 2');
}

console.log('empezamos');
funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');