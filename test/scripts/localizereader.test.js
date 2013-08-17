
//to allow for node testing
if (typeof module !== 'undefined' && module.exports) {
    chai = require('chai');
    assert = chai.assert;
    expect = chai.expect;
    should = chai.should;
    app = require('./app.js');
}

describe('Localization Reader - localizeReader.test.js', function () {

    //use a local version of the module
    var localizeReader;

    it('localizeReader should be present', function () {
        //set the local version from the app
        localizeReader = app.localizeReader;
        assert.ok(localizeReader);
    });

    it('localizeReader.get should be a function', function () {
        assert.isFunction(localizeReader.get);
    });

    describe('get(locals, culture) - string tests', function () {

        var locals = { 'en': 'Local hi', 'de': 'German (de) Local hi', 'de-DE': 'German (de-DE) Local hi' };

        it('should throw error when sending nothing', function () {
            expect(localizeReader.get).to.throw(TypeError);
        });

        it('should return en value when no culture sent', function () {
            var result = localizeReader.get(locals);
            assert.typeOf(result, 'string');
            assert.equal(result, 'Local hi')
        });

        it('should return en value when null culture sent', function () {
            var result = localizeReader.get(locals, null);
            assert.typeOf(result, 'string');
            assert.equal(result, 'Local hi')
        });

        it('should return en value when "" culture sent', function () {
            var result = localizeReader.get(locals, '');
            assert.typeOf(result, 'string');
            assert.equal(result, 'Local hi')
        });

        it('should return en value when en culture sent', function () {
            var result = localizeReader.get(locals, 'en');
            assert.typeOf(result, 'string');
            assert.equal(result, 'Local hi')
        });

        it('should return en value when no matching culture sent', function () {
            var result = localizeReader.get(locals, 'no matching culture');
            assert.typeOf(result, 'string');
            assert.equal(result, 'Local hi')
        });


        it('should return de-DE value when de-DE culture sent', function () {
            var result = localizeReader.get(locals, 'de-DE');
            assert.typeOf(result, 'string');
            assert.equal(result, 'German (de-DE) Local hi');
        });

        it('should return de value when de culture sent', function () {
            var result = localizeReader.get(locals, 'de');
            assert.typeOf(result, 'string');
            assert.equal(result, 'German (de) Local hi');
        });

        it('should return de value when de-AT culture sent', function () {
            var result = localizeReader.get(locals, 'de-AT');
            assert.typeOf(result, 'string');
            assert.equal(result, 'German (de) Local hi');
        });


        var locals2 = { 'en': 'Local hi', 'de': 'German (de) Local hi', 'de-DE': 'German (de-DE) Local hi', 'default': 'Hi Default' };

        it('should return default value when no culture sent', function () {
            var result = localizeReader.get(locals2);
            assert.typeOf(result, 'string');
            assert.equal(result, 'Hi Default')
        });

        it('should return default value when null culture sent', function () {
            var result = localizeReader.get(locals2, null);
            assert.typeOf(result, 'string');
            assert.equal(result, 'Hi Default')
        });

        it('should return default value when "" culture sent', function () {
            var result = localizeReader.get(locals2, '');
            assert.typeOf(result, 'string');
            assert.equal(result, 'Hi Default')
        });
    });

    describe('get(locals, culture) - object tests', function () {

        var locals = { 'en': { 'message': 'Local hi' }, 'de': { 'message': 'German (de) Local hi' }, 'de-DE': { 'message': 'German (de-DE) Local hi' } };

        it('should throw error when sending nothing', function () {
            expect(localizeReader.get).to.throw(TypeError);
        });

        it('should return en value when no culture sent', function () {
            var result = localizeReader.get(locals);
            assert.typeOf(result, 'object');
            assert.deepEqual(result, { 'message': 'Local hi' })
        });

        it('should return en value when null culture sent', function () {
            var result = localizeReader.get(locals, null);
            assert.typeOf(result, 'object');
            assert.deepEqual(result, { 'message': 'Local hi' })
        });

        it('should return en value when "" culture sent', function () {
            var result = localizeReader.get(locals, '');
            assert.typeOf(result, 'object');
            assert.deepEqual(result, { 'message': 'Local hi' })
        });

        it('should return en value when en culture sent', function () {
            var result = localizeReader.get(locals, 'en');
            assert.typeOf(result, 'object');
            assert.deepEqual(result, { 'message': 'Local hi' })
        });

        it('should return en value when no matching culture sent', function () {
            var result = localizeReader.get(locals, 'no matching culture');
            assert.typeOf(result, 'object');
            assert.deepEqual(result, { 'message': 'Local hi' })
        });


        it('should return de-DE value when de-DE culture sent', function () {
            var result = localizeReader.get(locals, 'de-DE');
            assert.typeOf(result, 'object');
            assert.deepEqual(result, { 'message': 'German (de-DE) Local hi' });
        });

        it('should return de value when de culture sent', function () {
            var result = localizeReader.get(locals, 'de');
            assert.typeOf(result, 'object');
            assert.deepEqual(result, { 'message': 'German (de) Local hi' });
        });

        it('should return de value when de-AT culture sent', function () {
            var result = localizeReader.get(locals, 'de-AT');
            assert.typeOf(result, 'object');
            assert.deepEqual(result, { 'message': 'German (de) Local hi' });
        });
    });
});