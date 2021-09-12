// Q - Create a queue which supports the push, pop and top operation
// S - Here we are using closure to achieve this

function queue() {
  let arr = [];

  return function (op, value) {
    if (op === "insert") {
      arr.push(value);
    } else if (op === "out") {
      arr.shift();
    } else if (op === "show") {
      console.log(arr);
    }
  };
}


let f = queue()

f("insert",2)
f("insert",1)
f("insert",3)
f("insert",4)
f("show")
f("out")
f("show")


//FIFO

