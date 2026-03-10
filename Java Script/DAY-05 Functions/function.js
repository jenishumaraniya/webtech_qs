console.log("function in JS");
//! Function:
//* Function is a block of code which is used to perform set of Instruction.
//* Function it is used to avoid the repetation of the code.

//? Syntax:
function identifier(params){
    // code to be executed
}
// /function call statement
identifier();


// Non-parameterized Function
function greet(){
    console.log("Hello");
}
greet();

// Example: Parameterized Function
function greetWithUserName(name){
    // name-> parameter->Temporary Value
    console.log("hello, How are you",name);
}

// Function Call statement:
// The function call statement it is responsible to invoke or call the function.
greetWithUserName("Jenish");
// /Jenis->Arguments->Actual Value

greetWithUserName();
// undefined

//What is Parameter?
//The parameter is a temporary variable or a placeholder which is declared at the time of the defination
// Which will be replaced by the arguments.

// What is arguments?
// The arguments are the actual vallues which is passed inside the function call statement.

// What is return keyword or statement in function?
// The return keyword returns the value back to caller or fcs for further use.
function add(num1,num2){
    let sum=num1+num2;
    return sum;
}

// 1st way: call the fcs inside the clg
console.log(add(10,20));

// 2nd way: Store the fcs in a variable and print that variable by using clg
result=add(10,20);
console.log(result);

// Note: If your function is not returning any kind of value you will get the undefined as a output.

function sub(num1,num2){
    console.log(num2-num1);
}
console.log(sub(10,20));


// arguments kwyword in function?
function getNumbers(num1, num2, num3, num4, num4){
    console.log(arguments);
    console.log(arguments[1]);
}
getNumbers(10,20,30,40,50);
console.log(Array.isArray(getNumbers(10,20,30,40,50)));

// 'this' keyword in function?
function thisKeyword(){
    console.log(this);
    // Window Object -> Global Object -> Each and every browser.
}
thisKeyword();
