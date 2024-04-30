const skills: string[] = ['Angular', 'React', 'Vue', 'Svelte'];



// Object
/*
Como definir que el tipo de dato como name o age sea un string, como obligarlo a que sea siempre un string y no me permita un number o cualquier otro tipo de dato.

la forma de hacerlo mas comun es con interfaces

La interfaz algo genial que tiene es que cuando nuestro codigo esta inspirado a javascript, no tiene ninguna representacion fisica en javascript, es decir
aunque uno tenga un millon de interfaces en un archivo o 1 millon de interfaces equivale a cero linea de codigo de javascript.
*/

interface Person {
    name: string;
    age: number;
    skills: string[];
    hometown?: string;
}

const strider: Person = {
    name: 'Strider',
    age: 35,
    skills: skills,
    hometown: 'Xalapa'
}

strider.name = 'bryan';

console.table(strider);

export{};

