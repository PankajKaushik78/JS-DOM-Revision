let p = new Promise(function executor(resolve, reject) {
    setTimeout(function afterSomeTime() {
        resolve("yo yo bitches");
    }, 2000);
});

async function testing() {
    let res = await p;
    console.log(res);
}

testing();