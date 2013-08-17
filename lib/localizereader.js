
(function () {    
    //create the default object
    var localizeReader = {};

    // global on the server, window in the browser
    var root = this;

    localizeReader.get = function(obj, culture){
        var c = (!culture) ? 'default': culture;
        if(obj[c] !== undefined) return obj[c];
        c = c.split('-')[0];
        if (obj[c] !== undefined) return obj[c];
        if (obj['default'] !== undefined) return obj['default'];
        for (var prop in obj) {
            return obj[prop];
        }
    }
    // AMD / RequireJS
    if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return localizeReader;
        });
    }
    // Node.js
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = localizeReader;
    }
    // included directly via <script> tag
    else {
        root.localizeReader = localizeReader;
    }
} ());
