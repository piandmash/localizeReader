
//to allow for node testing
if (typeof module !== 'undefined' && module.exports) {
    chai = require('chai');
    assert = chai.assert;
    expect = chai.expect;
    should = chai.should;
    app = require('./app.js');
}

describe('App - app.test.js', function () {

    it('app should be present', function () {
        assert.ok(app);
    });

    it('app.localizeReader should be present', function () {
        assert.ok(app.localizeReader);
    });

    it('app.localizeReaderMin should be present', function () {
        assert.ok(app.localizeReaderMin);
    });
});