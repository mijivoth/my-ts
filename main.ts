let myName:string = 'Miji';
let myAge:number = 35;
let isAccepted:boolean= true;

let Goods:any;
Goods = 25;
Goods = 'Hall';

let heros:any[] = ['superman','batman','spiderman'];
heros[0] ="Flower";
console.log(heros);


//Tupel
let classB:[string,number] = ["Student",20];
classB = ["Teachers",3];
console.log(classB[0]);

//enum
enum Colors {
    Blue,
    Red = 10,
    Green
}

let color1 = Colors.Green;
console.log(color1);

//any - avoid using any-type
let batmenCar:any = "K5";
console.log(batmenCar);
batmenCar = {maker: 'KIA', manufactured: 2018};
console.log(batmenCar); 

//function type == return type 
function returnMyname(): string{
    return myName;
}

console.log(returnMyname());

//function argument type
function multiply(val1:number,val2:number):number{
    return val1 * val2;
}

console.log(multiply(4,5));

// function types
let superMultiply:(a:number,b:number) => number;

superMultiply = multiply;
//superMultiply = returnMyname;

console.log(superMultiply(3,9) );
