// null vs undefined vs undeclared 

// UNDEFINED = you have declared something but no value exists. you never initialized it
// typeof(undefined) = "undefined" 
let a;
console.log(a);


// NULL = it is actually a value. The empty value
// typeof(null) = "object"
let b = null; 
console.log(b);


// UNDECLARED = variable that was never declared
// It gets created in the global scope by itself
c = 2
console.log(global.c);