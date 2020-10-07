var configValues = require("./config.json");

module.exports = {
  getDbConnnectionString: function () {
    // return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '';
    return (
      "mongodb+srv://" +
      configValues.uname +
      ":" +
      configValues.pwd +
      "@nodetodosample.rvsuz.mongodb.net/nodetodo?retryWrites=true&w=majority"
    );
  },
};
