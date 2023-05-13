let ListaPreguntas = []
class PregYResp {
    constructor(pregunta , lineas , posibilidades , respuesta){

        this.pregunta=pregunta
        this.lineas=lineas
        this.posibilidades=posibilidades
        this.respuesta=respuesta
    }           
}
ListaPreguntas.push( new PregYResp(
    `Qué mensaje aparece en consola en el siguiente código?`,
    [`let numeros = [1,2,3,4,5]`,
    `numeros.splice(1,3)`,
    `console.log(numeros)`
    ],
    [
        `2,3,4`,
        `1,2,3`,
        `1,5`,
        `2,4`

    ],
    `1,5`
))

ListaPreguntas.push( new PregYResp(
    `Cuál es el valor, respectivamente, de las variables primernumero y segundonumero?`,
    [ `let numeros = [ 0 , 1 , 2 , 3 , 4 ];` ,
    `let [primernumero , segundonumero] = ...numeros;`,
    `console.log(numeros)`
    ],
    [  `[ 0 , 1 , 2 , 3 , 4 , 5 ] - [ 0 , 1 , 2 , 3 , 4 ]`,
        `1 - 2`,
        `0 - 1`,
        `0 , 1 , 2 , 3 , 4 , 5 - 0 , 1 , 2 , 3, 4`
    ]
    ,
    `0 - 1`
))

ListaPreguntas.push( new PregYResp(
    `Cuál es la función que permite realizar la operación de la potenciación en JavaScript?`,
    [],
    [   `Math.pow()`,
        `Pow()`,
        `Power()`,
        `^`
    ]
    ,
    `Math.pow()`
))

ListaPreguntas.push( new PregYResp(
    `Qué operador se necesita en el ejemplo para que la consola imprima 'true'?`,
    [
       `console.log(12 __ '12')`, 
    ],
    [   `!=`,
        `=`,
        `==`,
        `===`
    ]
    ,
    `==`
))

ListaPreguntas.push( new PregYResp(
    `Qué evalúa el operador ==? `,
    [
     
    ],
    [   `Si los operandos son iguales en tipo y en valor`,
        `Si los operandos tienen datos del mismo tipo`,
        `Si los operandos tienen datos del mismo valor`,
        `Si ambos operandos tienen asignado el valor true`
    ]
    ,
    `Si los operandos tienen datos del mismo valor`
))

ListaPreguntas.push( new PregYResp(
    `¿Qué devuelve la consola con el siguiente código? `,
    [
     'console.log(true+true);'
    ],
    [   `2`,
        `Error`,
        `true`,
        `false`
    ]
    ,
    `2`
))

ListaPreguntas.push( new PregYResp(
    `¿En qué orden se ejecuta el siguiente código?`,
    [
        'setTimeout(()=>{',
        '   Funcion1()',
        '   },0)',
        `/**/`,
        'for ( ; i<=100 ; i++) {',
        '   Funcion2()',
        '}',
        '//',
        'Funcion3()'
    ],
    [   `Funcion1 - Funcion2 - Funcion3`,
        `Funcion2 - Funcion3 - Funcion1`,
        `Funcion1 - Funcion3 - Funcion2`,
        `Funcion3 - Funcion1 - Funcion2`
    ]
    ,
    `Funcion2 - Funcion3 - Funcion1`
))

ListaPreguntas.push( new PregYResp(
    `¿Qué devuelve la consola con el siguiente código? `,
    [
        'let lista = [1 , 2 , 3]',
        `for (numero of  lista) {`,
        `   console.log(numero)`,
        `}`
    ],
    [   `1 2 3`,
        `0 1 2`,
        `[0 , 1 , 2]`,
        `[0 1 2]`
    ]
    ,
    `1 2 3`
))

ListaPreguntas.push( new PregYResp(
    `¿Que imprime en consola el siguiente código? `,
    [
        `console.log( 4!='4' ? 'A' : 'B')`
        
    ],
    [   `Error`,
        `4=='4'`,
        `A`,
        `B`
    ]
    ,
    `B`
))

module.exports = ListaPreguntas