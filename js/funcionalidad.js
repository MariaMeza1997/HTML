var num1 = 10//number
var name = "Maria Meza"//String
var num3 = true//bolean
var num4 = "10" //string
var num5= "dddadadada"

//*Tipo datos 
//console.log("El tipo de dato del num1 es : " + typeof(num4))

//*Cambiar el tipo de dato
//String ---> number

console.log("El tipo de dato previo es :" + typeof(num4))
var StringNew = Number(num4)
console.log("El tipo de dato es nuevo: " + typeof(StringNew))

//number -->String
console.log("El tipo de dato previo es :" + typeof(StringNew))//Number
var NumberNew = String(StringNew)
console.log("El tipo de dato es nuevo: " + typeof(NumberNew))

//String o number a bolean
console.log("El tipo de dato previo es :" + typeof(num5))
var BoleanNew = Boolean(num5)
console.log("El tipo de dato es nuevo: " + typeof(BoleanNew))
console.log("El tipo de bolean es : " + BoleanNew)//*true o false

//*Definir un arreglo

//*CRUD
//create
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
/*const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');*/
console.log(salad.length)


//*CRUD
//agregar
salad.push("🥜")//*AL FINAL
console.log(salad)

salad.unshift("🥜")//*Al inicio
console.log(salad) 

//Delete
salad.pop()//*Eliminar el dato
console.log(salad) 


salad.shift()//*Eliminar el primer dato
console.log(salad) 


//Copy
const saldCopy = salad.slice()
console.log(saldCopy)


/*Ejercio
1) Definir un arreglo 
2) Agregar elemento al final del arreglo -->emoji
3) Eliminar primer dato del arreglo 
4) Realizar una copia de ese arreglo */