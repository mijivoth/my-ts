"use strict";
var myName = 'Miji';
var myAge = 35;
var isAccepted = true;
var Goods;
Goods = 25;
Goods = 'Hall';
var heros = ['superman', 'batman', 'spiderman'];
heros[0] = "Flower";
console.log(heros);
//Tupel
var classB = ["Student", 20];
classB = ["Teachers", 3];
console.log(classB[0]);
//enum
var Colors;
(function (Colors) {
    Colors[Colors["Blue"] = 0] = "Blue";
    Colors[Colors["Red"] = 10] = "Red";
    Colors[Colors["Green"] = 11] = "Green";
})(Colors || (Colors = {}));
var color1 = Colors.Green;
console.log(color1);
//any - avoid using any-type
var batmenCar = "K5";
console.log(batmenCar);
batmenCar = { maker: 'KIA', manufactured: 2018 };
console.log(batmenCar);
//function type == return type 
function returnMyname() {
    return myName;
}
console.log(returnMyname());
//function argument type
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(4, 5));
// function types
var superMultiply;
superMultiply = multiply;
//superMultiply = returnMyname;
console.log(superMultiply(3, 9));
