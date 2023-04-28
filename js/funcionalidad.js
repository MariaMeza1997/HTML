/*console.warn("Advertencia")

console.error("Error")*/
var i = 0 
var a =9 //string
var b = 10 //number
var c = true //boolean

var d = ["Maria","Jose","Javier","Mariana","Leonora","Fany"]
const veggies = ['🥦', '🥒', '🌽', '🥕','🥦'];
const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');


const saladCopy = [...salad, ...veggies]

let [tomate, hongo, zanahoria] = ['🍅', '🍄', '🥕'];

//var calificacion = a === b ?  console.log("Verdarero") : console.log("Falso");

if ( veggies.length >0 ){
    
    var i = 0

    // Condición: Mientras la variable contador sea menor de 5
    do {

    console.log("Dentro de la condicional ")

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
    }while(i <= veggies.length)


    //console.log("what's your name!");
     //var x = readline();
     //console.log("Hi ! "+input);

    /*for( i ; i <= veggies.length; i = i + 1 ){
        
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

    }*/
   

}


function ejercicio1(){
    var e = new Array()

    if(e.length !== 0){
        console.log("%c¡ESTE ARREGLO NO ESTA VACIO", 
        "background:red; color:#fff; padding: 5px 10px;")

    }else{
        console.log("%c¡ESTE ARREGLO ESTA VACIO", 
        "background:red; color:#fff; padding: 5px 10px;")
        //var e = ["Maria","Jose","Javier","Mariana","Leonora","Fany" ]
        var e = new Array("Maria","Jose","Javier","Mariana","Leonora","Fany")
    }

    console.log(e)

}

ejercicio1()