// Welcome to my first doc in JavaScript
// console.log('Hola mundo')

    //TIPOS DE DATOS

/**NUMBER - Es un tipo de dato que permite alojar 
*numeros de tipo entero y decimal
*/

// console.log(typeof 50) 
// console.log(typeof 50.2) 

/**STRING - Los tipo string son una cadena de texto
 *  el cual definimos a partir de colocar ('' "")
 */

// console.log(typeof 'Fr3d Murillo')
// console.log(typeof 'a') 
//En JavaScript, no hay tipo de datos de valor Char

/**BOOLEAN - Son tipo de datos que solamente devuelven 
 * true o false
*/

// console.log(typeof true)

/**
 *  TIPOS DE DATOS - Coleccion de datos
 * 
 * OBJETOS
 * Colecciones de datos (Informacion)
 * que tienen un identificador y un valor
 */

//ARRAY
// console.log(typeof['Fred', 'Lex','Almar'])
// console.log(['Fred', 'Lex','Almar'])

// console.log({
//     nombre: 'Fred',
//     apellido: 'Murillo'
// })

/**
 * TIPOS DE DATOS - NO DEFINIDOS
 * UNDEFINED
 */
 
/**
 * VARIABLES
 */

//  Declaracion - let
// let name 

//  Asignacion
// name = 'Fred'
// console.log(name)

//Declaracion y asignacion
// let name2 = 'Murillo'
// console.log(name2)

/**
 * ASIGNACION POR REFERENCIA
 */

// let hermana = 'Lex'
// let fastidio = hermana
//  console.log(hermana)
//  console.log(fastidio)

/**
 *      CONTANTES
 * 
 *  Dentro de las contantes, declaramos valores que no
 * van a cambiar a lo largo del uso de la aplicacion
 */

// const NOMBRE_AUTOR = 'Fr3d'

let user = {
    edad: 18,
    dni: 29601241,
}

let nombre =''
let apellido = ''

nombre = Input('Dame tu nombre')

let nombreCompleto = (nombre + ' ' + apellido)

console.log(nombreCompleto)
