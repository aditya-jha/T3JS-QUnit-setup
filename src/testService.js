Box.Application.addService('testService', function(application) {
    var factory = {};

    factory.foo = function() {
        return 1;
    };

    factory.bar = function() {
        return "ok";
    };

    return factory;
});
