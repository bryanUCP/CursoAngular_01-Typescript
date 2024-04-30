export class Person {
    public name: string;
    public address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

const Ironman = new Person('Bryan','Xalapa');

console.table(Ironman);

// +++++++++++++++++++++++++++ Extender de otra clase +++++++++++++++++++++++++++

/*export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age : number,
        public realName: string,
    ){
        super(realName, 'NY');
    }
}

const Ironman2 = new Hero('Ironman', 45, 'Tony Stark');
console.table(Ironman2);*/


//++++++++++++++++ priorizar composicion sobre herencia +++++++++++++++++++++++++++


export class Hero {
    constructor(
        public alterEgo: string,
        public age : number,
        public realName: string,
        public person: Person
    ){}
}

const tony = new Person('Tony', 'NY');
const Ironman2 = new Hero('Ironman', 45, 'Tony Stark', tony);
console.table(Ironman2);