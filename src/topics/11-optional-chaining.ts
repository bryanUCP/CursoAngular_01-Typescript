//Encadenamiento opcional

export interface Passenger {
    name: string;
    children?: string[];
}

const pasenger1: Passenger = {
    name: 'Bryan'
};

const pasenger2: Passenger = {
    name: 'Ricardo',
    children: ['Erick', 'Ricardo Jr']
};

const printChildren = ( passenger: Passenger ) => {
    const howmanyChildren = passenger.children?.length || 0;
    console.log(passenger.name +": "+ howmanyChildren);
}

printChildren(pasenger1);
printChildren(pasenger2);