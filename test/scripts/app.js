
(function () {
    //create the default object
    var app = {
        localizeReader: null, localizeReaderMin: null
    };

    // global on the server, window in the browser
    var root= this;
    
    // AMD / RequireJS
    if (typeof define !== 'undefined' && define.amd) {

        require(['../lib/localizereader.js', '../lib/localizereader.min.js'], function (lr, lrm) {
            app.localizeReader = lr;
            app.localizeReaderMin = lrm;
        });

        define([], function () {
            return app;
        });
    }
    // Node.js
    else if (typeof module !== 'undefined' && module.exports) {
        app.localizeReader = require('../../lib/localizereader.js');
        app.localizeReaderMin = require('../../lib/localizereader.min.js');
        module.exports = app;
    }
    // included directly via <script> tag
    else {
        root.app = app;
    }
} ());