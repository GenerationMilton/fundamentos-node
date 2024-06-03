
console.log('interval funct)))')
console.log(setInterval);

let i=0;
let intervalo = setInterval(function(){

    console.log('Hola');
    if(i===3){
        clearInterval(intervalo);
    }
    i++;
},1000);

console.log('immediate funct***')
setImmediate(function(){
    console.log('Hola');
})


//Variables globales
console.log('Global variables***')
global.miVariable= 'elValor';
console.log(miVariable);


//Ejemplo Interval

console.log(setInterval);
let j =10
let intervalo2=setInterval(()=>{
    if(j===0){
        clearInterval(intervalo2)
        console.log("go go go 🚀")

    }else{
        console.log("conteo para despegue: ",j)
    }
    
    j--


},1000);