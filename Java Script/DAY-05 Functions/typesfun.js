console.log("Types of Functions");

//! Types of Functions:
//? 1. Named Function
//? 2. Anonymous Function
//? 3. Function as an Expression
//? 4. IIFE Function
//? 5. Arrow Function
//? 6. Callback Function
//? 7. Higher-Order Function (HOF)
//? 8. Nested Function
//? 9. Closure Fuunction
//? 10. Function Currying
//? 11. Generator Function

//! 1. Named Function:
//* The function which has a identifier or name is called as Named Function.
//* It is also called as Function Declaration.

function jetha(person) {
  console.log('Jetha: Good Morning ${person} jiii!!');
}
jetha("Babita");

//! 2. Anonymous Function:
//* The function which don't have an identifier or name is called as anonymous function.

// function () {
//     console.log("I am Mr.x");
// }

//? 1st option: Wrap the entire function in empty () and call the () inside the main () just after the function declaration.

(function () {
  console.log("I am Mr.x");
}());

//! 3. Function as an Expression: (First Order Function)
//? 2nd option: Store the entire function inside the variable and use the variable to call the anonymous function.

let fun = function () {
  console.log("I am a anonymous function");
};
console.log(fun);
fun();

//! 4. IIFE:
//* IIFE stands for Immediate Invoking Function Expression.
//* It will invokedjust after the function declaration.
//* It will be executed only once.

console.log("Interputed the IIFE function");
(function () { 
    // console.log("IIFE function");
    alert("IIFE invoked")
 })();

// 5. Arrow Function:
// * The Arrow function is shorthand syntax to create the function in JS.
// This is the modern or recommended way to use the function.
// Arrow function was introduced in the ES6 concepts which was released in the year of 2015.

// Syntax: () => {}

let arrFun = () => {
    console.log("This is an arrow function");
};
console.log(arrFun);
arrFun();

// 1. Implicit return in Arrow function:
// Automatically -> Internally

let greet = () => console.log("hello");
greet();

let add = (num1,num2) => num1+num2;
console.log(add(10,20));

// 2. Explicit Return in Arrow Function:
// Manually

let mul = (num1,num2) => {
    console.log("multiplication funtion");
    return num1*num2;
};
console.log(mul(10,20));

// Arguments keyword in arrow function:
let arguFun = () => {
    // console.log(arguments); arguments is not defined
}
arguFun(10,20,30,40,50);

// 6. Callback Function:
// the function which is passed to the another function as an argument is called as callback function.
// callback Function wiil be executed just after the completion of main function.

// main function:
function mainFun(demo){
    console.log("main function is running...");
    demo();
}
mainFun(callBackFun);

// callback function:

function callBackFun(){
    console.log("this is the call back function");
}

// Realtime Example:
function orderFood(waiter){
    console.log('waiter: Paneer Tikka Masala Garlic Naan Masala Papad Chaad');
    waiter();
}

function serveFood(){
    console.log("waiter: food is ready sir Enjoy you meal");
}

function parcelFood(){
    console.log("Pack the food!");
}

document.getElementById("btn1").addEventListener("click", () => {
    orderFood(serveFood);
});

document.getElementById("btn2").addEventListener("click", () => {
    orderFood(parcelFood);
});

function assignment(student) {
    console.log("Teacher assigned you one task!");
    student();
}

assignment(function () {
    console.log("Assignment complted teacher has given marks");
});