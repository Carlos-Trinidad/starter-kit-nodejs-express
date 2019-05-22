const IBMCloudEnv = require('ibm-cloud-env');

IBMCloudEnv.init("/mapping.json");

let ENV = {
    service1_credentials = IBMCloudEnv.getDictionary("service1_credentials"),
    environment_variable = IBMCloudEnv.getDictionary("environment_variable").value,
}

module.exports = ENV;