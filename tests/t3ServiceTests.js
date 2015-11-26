QUnit.module('testService', {
    beforeEach: function() {
        this.service = Box.Application.getServiceForTest('testService');
    }
});

QUnit.test('foo returns 1', function(assert) {
    assert.equal(this.service.foo(), 1, "1 was returned");
    assert.ok(typeof(this.service.bar()) === 'string', "string it is");
});
