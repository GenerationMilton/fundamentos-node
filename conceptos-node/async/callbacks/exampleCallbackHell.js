function frases(){

    let smartFrases = [
  '1. No hay que ir para atrás ni para darse impulso (Lao Tsé) Una frase motivadora que aconseja seguir siempre nuestro camino a pesar de las adversidades.',
  '2. No hay caminos para la paz; la paz es el camino (Mahatma Gandhi) Gandhi nos dejó para la historia esta preciosa frase sobre la paz.  ',
  '3. Haz el amor y no la guerra (John Lennon) El cantante John Lennon siempre tuvo una mentalidad pacificadora.  ',
  '4. Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse (Charles Baudelaire)  El trabajo, a pesar de que siempre apetezca hacerlo, es bueno para nuestra salud mental.',
  '5. Lo peor que hacen los malos es obligarnos a dudar de los buenos (Jacinto Benavente)  Siempre es mejor ser honrado aunque a veces podamos creer lo contrario.',
  '6. Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos (Bob Marley)  El racismo y los prejuicios han sido la causa de muchas guerras.',
  '7. Aprende a vivir y sabrás morir bien (Confucio)  La vida hay que disfrutarla en cada momento y no estar muerto en vida.',
  '8. Cada día sabemos más y entendemos menos (Albert Einstein)  No importa que cada vez haya más conocimiento si no lo sabemos aplicar.',
  '9. El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad (Albert Einstein)  Siempre habrá gente mala, pero no podemos dejar que triunfen.',
  '10. La medida del amor es amar sin medida (San Agustín)  Una frase romántica que significa que debemos amar con todo.',
  '11. No hay nada que un hombre no sea capaz de hacer cuando una mujer le mira (Casanova)  El amor de un hombre por una mujer es capaz de mover el mundo.',
  '12. Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera. (Albert Einstein)  A la hora de educar, es necesario que nosotros mismos seamos coherentes con lo que pretendemos enseñar.',
    ]

    let i = Math.round(Math.random() * smartFrases.length)
    if(smartFrases[i]){
        return console.log(smartFrases[i]) ;
    }else{
        return console.log("Algun sabio mantuvo el silencio, su secreto es que no sabia usar bien el math.random para escoger las frases, ¿podrás ayudarlo?")
    }

}

function Saludo(tipo,nombre, callbackSaludo) {
    setTimeout(function() {
      console.log(tipo + ", " + nombre);
      callbackSaludo(nombre);
    }, 1000);
  }

  function hablar(frases, callbackhablar) {
    setTimeout(function() {
      frases();
      callbackhablar();
    }, 1000);
  }

  

  function conversacion(nombre, veces, callback) {
    if (veces > 0) {
      hablar(frases,function() {
        conversacion(nombre, --veces, callback);
        switch(veces){
           case 11:
               console.log("----------Ha dicho el primer sabio----------")  
            break;
           case 0:
               console.log("----------Ha dicho el último sabio----------")
            break;
           default:
               console.log("----------Ha dicho el siguiente sabio----------");
            break;
        } 
      });
    } else {
      Saludo("Adios",nombre, callback);
    }
  }
  
  
  console.log("Smart Talkers Gonna Talk");

  Saludo("Bienvenidos","Grandes Sabios", function(nombre) {
    conversacion(nombre, 12, function() {
      console.log("El consejo de sabios es muy random, y convocará otra reunión en el palacio Node si lo deseas ;)");
    });
  });