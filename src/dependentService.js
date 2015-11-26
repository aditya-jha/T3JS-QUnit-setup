Box.Application.addService('dependentService', function(application) {
    var factory = {};

    var testService = application.getService('testService');

    factory.dependentFoo = function() {
        return testService.foo()*2;
    }

    return factory;

});
