let p = new Promise(function executor(resolve, reject) {
  setTimeout(function afterSomeTime() {
      resolve("yo yo i am resolved");
  }, 2000);
});

// This function behaves asynchronously
async function testing() {
  let res = await p; // res will get the resolved value of this promise p
  console.log(res);
}

testing();



/*
  Pointers:
    1. Async-await is just syntactic sugar over the promises
    2.This whole function behaves aysnchronously
      async function name() {
        let res = await fetch(...) // res will get the resolved or rejected value from this promise
      }
*/ 