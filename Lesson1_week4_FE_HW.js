let student = {name: "Tyler", age: 28, attendance: "Active" }; 
console.log(student);



// -------------------------------------- //

let a = 5;
let b = 3;
let total = a + b;

console.log("Sum:", total)

let x = 5;
let y = 3;
let subtract = x - y;

console.log("Difference:", subtract)

let c = 5;
let d = 3;
let times = c * d;

console.log("Product:", times)

let num1 = 15;
let num2 = 3;
let division = num1 / num2;

console.log("Quotient:", division)

//--------------------//

c = 10;
d = 2;

console.log("Updated c:", c)
console.log("Updated d:", d)

//-------------------//
// Task 5

let isCGreaterThan = c > d
console.log(isCGreaterThan)


if (c > d){
    console.log("c is greater than d")
}
else if (c < d) {
    console.log("c is less than d")
}


let number1 = 8;
let number2 = -3;

let isPositive = (number1 > 0) && (number2 > 0);
let isEven = (number1 % 2 == 0) || (number2 % 2 == 0)

console.log(isPositive)
console.log(isEven)