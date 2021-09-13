let o = {
  name: "Rahul",
  age: 16,
  address: {
    city: "Delhi",
    zip: 110001,
  },
};

let copyObj = {}

//SHALLOW COPY
for(x in o){
  // primitve values will be copied correctly but for non-primitve values their address will be copied 
  copyObj[x] = o[x] 
}

// console.log(copyObj);
// console.log(o);

// Hack to create a DEEP COPY
let deepCopy = JSON.parse(JSON.stringify(o));
console.log(deepCopy);


let a = [{ name: "Hello" }];

let ansArr = []

for(let i = 0;i<a.length;i++){
    ansArr.push(a[i])
}