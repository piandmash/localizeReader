# Testing

This module is tested using [Mocha](http://visionmedia.github.com/mocha/) and [Chai](http://chaijs.com)

## Browser Testing

To test in your modules in a browser load up [index.html](index.html)

To set up browser testing for your modules complete the following steps:

### Step 1: Create Test Scripts

If you create your test scripts with the following format then they will work in both browser and Node testing.

```javascript

	//to allow for node testing
	if (typeof module !== 'undefined' && module.exports) {
		chai = require('chai');
		assert = chai.assert;
		expect = chai.expect;
		should = chai.should;
		app = require('./app.js');
	}
	
	describe('Module Test - module.test.js', function () {
		it('app.mymod should be present', function () {
			assert.ok(app.mymod);
		});
	});
```

### Step 2: Copy files

* index.html 
* scripts/require.js
* scripts/setup.js
* scripts/app.js


### Step 3: Setup app.js

Create your app.js file similar to the one in this project.  It's structure will work in the browser with requirejs and in node.

```javascript

(function () {
    //create the default object
    var app = {
        module1: null, module2: null
    };

    // global on the server, window in the browser
    var root, previous_app;

    root = this;
    if (root != null) {
        previous_app = root.app;
    }  
    
    // AMD / RequireJS
    if (typeof define !== 'undefined' && define.amd) {
		//set paths to mods
        require(['../lib/mod1.js', '../lib/mod2.js'], function (m1, m2) {
            app.module1 = m1;
            app.module2 = m2;
        });

        define([], function () {
            return app;
        });
    }
    // Node.js
    else if (typeof module !== 'undefined' && module.exports) {		
        app.module1 = require('../../lib/mod1.js');
        app.module2 = require('../../lib/mod2.js');
        module.exports = app;
    }
    // included directly via <script> tag
    else {
        root.app = app;
    }
} ());

```

### Step 4: Apply to index.html file

Then alter the index.html adding in your test module scripts.

```html

  <script src="scripts/module1.test.js"></script>
  <script src="scripts/module2.test.js"></script>

```

## Node Testing

To test in your modules in Node run ``node test.js``

To set up Node testing for your modules complete the following steps:


### Step 1: Create Test Scripts

If you create your test scripts with the following format then they will work in both browser and Node testing.

```javascript

	//to allow for node testing
	if (typeof module !== 'undefined' && module.exports) {
		chai = require('chai');
		assert = chai.assert;
		expect = chai.expect;
		should = chai.should;
		app = require('./app.js');
	}
	
	describe('Module Test - module.test.js', function () {
		it('app.mymod should be present', function () {
			assert.ok(app.mymod);
		});
	});
```

### Step 2: Create The Test.js Script

Copy the test.js file from this project or create a new one with the following code.

You only need to alter the add file for your modules.

```javascript
var Mocha = require('mocha'); //The root mocha path 
var mocha = new Mocha();

var passed = [];
var failed = [];

mocha.addFile('scripts/app.test');
mocha.addFile('scripts/module1.test');
mocha.addFile('scripts/module2.test');

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
```