export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung Galaxy S10',
    price: 700
}

const tablet: Product = {
    description: 'iPad Air',
    price: 300
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//Normal
//function taxCalculation( options: TaxCalculationOptions): number[] {
  //  let total = 0;

    // Normal
    /*options.products.forEach( product  => {
        total += product.price;
    });*/

    // Con destructuracion
    /*options.products.forEach( ({price})  => {
        total += price;
    });

    return [total, total * options.tax];
}*/

// Con destructuracion
export function taxCalculation( options : TaxCalculationOptions): number[] {
    let total = 0;
    
    const { tax, products } = options;

    // Con destructuracion
    products.forEach( ({price})  => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.16;

//Normal
/*const result = taxCalculation({
    tax,
    products: shoppingCart
 });*/

 //Con destructuracion
 const [total, totalTax] = taxCalculation({
    tax,
    products: shoppingCart
 });

console.log('Total', total);
console.log('Tax', totalTax);