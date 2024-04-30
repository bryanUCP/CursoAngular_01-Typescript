//MODULOS

/*
Las importanciones y exportaciones no es mas y no se resume a mas que que nosotros tengamos una funcionalidad encapsulada.
*/

//Importamos la funcion que vamos a utilizar
import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Samsung Galaxy S10',
        price: 700
    },
    {
        description: 'iPad Air',
        price: 300
    }
];

const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log('Total: ', total);
console.log('Tax: ', tax);