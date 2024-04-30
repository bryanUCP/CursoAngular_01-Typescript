/*
¿Como hacemos para que nuestra funcion sepa que tipo de dato es que?

Que yo pueda tener mi valor de retorno basado en el tipo de dato que le paso a mi funcion

Todo esto lo hacemos mediante los genericos

En este caso con los genericos lo que queremos hacer es que Any va depender de el argumento que sea enviado, sea un string, un number o un array, etc.
esto sera con <T> que la funcion va ser de tipo generico


<> = Genericos
*/

/*export function whatsMyType (argument: any): any {
    return argument;
} */

export function whatsMyType <T> (argument: T): T {
    return argument;
}  


/*let amIString = whatsMyType('Hola Mundo');
let amINumber = whatsMyType(100);
let amIArray = whatsMyType([1,2,3,4,5]);*/

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));