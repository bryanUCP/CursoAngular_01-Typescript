export {};

function addNumbers(a: number, b: number): number {
  return a + b;
}

/*
En esta funcion estamos recibiendo 2 numeros de tipo number pero estamos retornando un string
entonces el return de quedar de la siguiente manera:
*/
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

/*
Crear una funcion donde el primer argumento sea obligatorio, el segundo sea opcional y el tercero sea por defecto
*/

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

/*const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const result3: number = multiply(5);

console.table({result, result2, result3});*/


//+++++++++++++++++++++++++++++ FUNCIONES CON OBJETOS COMO ARGUMENTOS +++++++++++++++++++++++++++++

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Bryan',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healCharacter(strider, 20);
strider.showHp();