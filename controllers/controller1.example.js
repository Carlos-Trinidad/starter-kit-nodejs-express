const IBMCloudEnv = require('../configuration/env');

const service1_credentials = IBMCloudEnv.getDictionary("service1_credentials");
const environment_variable = IBMCloudEnv.getDictionary("environment_variable").value;

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