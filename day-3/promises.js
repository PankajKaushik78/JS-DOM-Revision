//Creation of a new promise

let p = new Promise(function executor(resolve, reject) {
  setTimeout(function () {
    resolve("kaam hogya");
    resolve("kaam hogya 2"); //ignored
    resolve("kaam hogya 3"); //ignored
  }, 2000);
});

//CONSUMERS => then; catch; finally
p.finally(function () {
  //finally is used for cleanup, it does not takes any value
  console.log("finally was called");
}).then(function (v) {
  console.log(v);
}).catch(function(err) {
  console.log(err);
});



let p1 = fetch("https://jsonplaceholder.typicode.com/posts");
let p2 = fetch("https://jsonplaceholder.typicode.com/users");

//takes an array of promises
//gives back a promise
//which resolves when all the promises in the array resolves
let p3 = Promise.all([p1, p2]);

//when the returned promise from promise.all resolves, it
// contains an array with values of the promises passed to promise.all in the same order
p3.then(function (valArr) {
  console.log(valArr); // array of responses
});





/*
  Pointers:
    1. Even when promise is complete and after some time we call 'then' on it, we will get correct value
       and it will work
    2. If we have have multiple then registered to a promise, then they will execute in the order in which they are written
    3. If we have multiple resolve calls in our promise then only first one will be execute and rest will be ignored
    4. Promise object has two things in it
          - Initial state
            [
              state: 'pending',   
              result: undefined
            ] 
          - After success
            [
              state: 'successful',   
              result: value
            ] 
          - After failure
            [
              state: 'unsuccessful',   
              result: error
            ] 
    
    5. Why Promises over Callback? 
            Reason1 = Inversion of control
            Reason2 = Code becomes more readable. Prevents callback hell
*/