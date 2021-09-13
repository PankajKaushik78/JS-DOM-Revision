Array.prototype.myFilter = function(cb) {
    let ans = [];
    for(let i=0; i<this.length; i++) {
        if(cb(this[i])) {
            ans.push(this[i]);
        }
    }
    return ans; 
};

function isEven(x) {
    console.log("this is me");
    return x % 2 === 0;
}

let arr = [1,2,3,4]
console.log(arr.myFilter(isEven));