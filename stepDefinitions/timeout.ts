var {setDefaultTimeout} = require('cucumber');

export = function timeSteps() {
this.setDefaultTimeout(60 * 1000);
}