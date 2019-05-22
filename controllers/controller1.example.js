const ENV = require('../configuration/env');


function myFunction1(req, res) {
    res.status(200).send("Hello World")
};

async function myFunction2(req, res) {
    var result = await myFunctionPromise();
    res.status(200).send(result);
}

function myFunctionPromise() {
    return new Promise(resolve => {
        resolve("Hello World");
    });
}


module.exports = {
    myFunction1,
    myFunction2
}