/*console.warn("Advertencia")

console.error("Error")*/
var i = 0 
var a =9 //string
var b = 10 //number
var c = true //boolean

var d = ["Maria","Jose","Javier","Mariana","Leonora","Fany"]
var e = new Array("Maria","Jose","Javier","Mariana","Leonora","Fany")
const veggies = ['🥦', '🥒', '🌽', '🥕','🥦'];
const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');
const saladCopy = [...salad, ...veggies]



let [tomate, hongo, zanahoria] = ['🍅', '🍄', '🥕'];

//var calificacion = a === b ?  console.log("Verdarero") : console.log("Falso");

if ( veggies.length >0 ){

    console.log("Dentro de la condicional ")
    
    var i = 0 

    // Condición: Mientras la variable contador sea menor de 5
   /* while (i <= veggies.length) {

      switch(veggies[i]){
        case '🥦':
            console.log("brocoli")
        break;

        case '🥒':
            console.log("pepino")
        break;

        case '🌽':
            console.log("elote")
        break;

        case '🥕':
            console.log("zanahoria")
        break;

    }
    
      i = i + 1; // Incrementamos el valor de i
    }*/

    for( i ; i <= veggies.length; i = i + 1 ){
        
        switch(veggies[i]){
            case '🥦':
                console.log("brocoli")
            break;
    
            case '🥒':
                console.log("pepino")
            break;
    
            case '🌽':
                console.log("elote")
            break;
    
            case '🥕':
                console.log("zanahoria")
            break;
    
        }

    }
   

}