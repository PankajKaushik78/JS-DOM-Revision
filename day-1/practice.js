function outer() {
      let queue = [];
    
      return function inner(ops, val) {
        if (ops == "insert") {
          queue.push(val);
          console.log(queue);
        } else if (ops == "out") {
          if (queue.length == 0) {
            console.log("Array is empty");
            return;
          }
          queue.shift();
          console.log(queue);
        } else if (ops == "show") {
          if (queue.length == 0) {
            console.log("Array is empty");
            return;
          }
          console.log(queue[0]);
        }
      };
    }
    
    var myQueue = outer();
    myQueue("out");
    myQueue("insert", 10);
    myQueue("insert", 20);
    myQueue("insert", 30);
    myQueue("insert", 40);
    myQueue("out");
    myQueue("show");
    