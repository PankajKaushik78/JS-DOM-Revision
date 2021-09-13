function sayHi() {
  console.log("hi");
}

//setTimeout ek function hai, apne use ek dusra function,
// as an argument de rakha hai
// to is function ko callback bolte hai

function f() {
  console.log("this will greet after 2 sec");
}

setTimeout(f, 2000);

// will go to callstack get executed and will be popped off
sayHi();


// One is callback queue and another is microtask queue