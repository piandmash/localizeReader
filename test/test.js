var Mocha = require('mocha'); //The root mocha path 
var mocha = new Mocha();

var passed = [];
var failed = [];

mocha.addFile('scripts/app.test');
mocha.addFile('scripts/localizereader.test');
mocha.addFile('scripts/localizereader.min.test');

mocha.run(function () {

    console.log(passed.length + ' Tests Passed');
    passed.forEach(function (testName) {
        console.log('Passed:', testName);
    });

    console.log("\n" + failed.length + ' Tests Failed');
    failed.forEach(function (testName) {
        console.log('Failed:', testName);
    });

}).on('fail', function (test) {
    failed.push(test.title);
}).on('pass', function (test) {
    passed.push(test.title);
});