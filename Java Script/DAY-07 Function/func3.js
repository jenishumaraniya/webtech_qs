console.log("Remaining Functions......");
// 7. Higher-Order Function
// The higher order function which will accept another function as a parameter or it will return a new function.

// Here, calculate is HOF 
function calculate(num1,num2, operation){
    return operation(num1,num2);
}
// add callback function
function add(num1,num2){
    return num1+num2;
}
// sub callback function
function sub(num1,num2){
    return num2-num1;
}

console.log(calculate(10,20,add));
console.log(calculate(10,20,sub));

// 8. Nested FUnction:
// The function which is present inside another fucntion is called as nested function.

function outerFun(){
    let outerVar=0;
    console.log("Outer function called");

    function innerFun(){
        console.log("Inner Function called");
        console.log(outerFun);
    }
    innerFun();
}
outerFun();

// 9. Closure Function:
// When you are trying to access the value of outer function inside the inner function and it will remember the value of the outer function is known as a Closure Function.

function outer(){
    let count=0;
    function inner(){
        count++;
        console.log("count:",count);
        return count;
    }
    return inner;
}
let counter=outer();
console.log(counter());
console.log(counter());
console.log(counter());

// 10.Function Currying:
// A function currying means passing one arguments at a time to invoke the function.

// Normal Function:
function add(a,b,c){
    return a+b+c;
}
console.log(add(10,20,30));

// curried function:
function fun1(a){
    console.log("a:",a);
    return function fun2(b){
        console.log("b:",b);
        return function fun3(c){
            console.log(a+b+c);
        }
    }
}
console.log(fun1(10(20)(30)));

// 11. Generator FUnction:
// The generator function is a special type of function in js which will be pause and resume its execution

// Ṣyntax: function* name(){
//      yeild value1;
//      yeild value2;
//  }

// yeild keyword is used to pause the execution of the function and it will store the value!
// .next() -> .next() method is used to resume the execution of the function and it will reuturn one object which has two properties -> {value:x,done:true or false}

function* numbers(){
    yield 1;
    yield 2;
    yield 3;
    return "hello";
}

let gen = numbers();
console.log(gen.next)