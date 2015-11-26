QUnit.module('dependentService', {
    beforeEach: function() {
        this.sandbox = sinon.sandbox.create();

        // the service object you depend on
        var testService = {
            foo: this.sandbox.stub().returns(1)
        };

        // a fake application object that returns that service
        var application = new Box.TestServiceProvider({
            'testService': testService
        });

        // retrieve a reference to the service to test
        this.service = Box.Application.getServiceForTest('dependentService', application);
    },

    afterEach: function() {
        this.sandbox.verifyAndRestore();
    }
});

QUnit.test('dependentFoo return 2', function(assert) {
    assert.equal(this.service.dependentFoo(), 2, "2 was returned");
});
