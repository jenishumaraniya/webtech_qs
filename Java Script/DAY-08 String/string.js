console.log("strings in JS");

// String:
// A String is a collection of characters.

// We can create string in 2 ways:
// 1. By using string Literal - ''."",
// 2. By using string constructor new string()

// 2. By using string constructor:
let str = new String("Hello");
console.log(str);

// String properties: length
let str2 = "Hello world!";
console.log(str2.length);

// String Methods:
// 1. charAt()
let str3= "javascript";
console.log(str3.charAt(2));//a
console.log(str3.charAt(40));//log the nothing

// 2. CharCodeAt()
console.log(str3.charCodeAt(1));//97

// 3.IndexOf()
let str4="hasde chera da matalab ye nahi";
console.log(str4.indexOf("da"));//12
console.log(str4.indexOf("a",2));//10

// 4. LastIndexOf()
console.log(str4.lastIndexOf("a"));//20

// 5. slice()
let str5="dum na dasa hage batasa";
console.log(str5.slice(12));//hage batasa
console.log(str5.slice(12,-1));