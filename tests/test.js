QUnit.module('Basic Tests');

QUnit.test("truthy", function(assert) {
	assert.ok(true, "true is truthy");
	assert.equal(1, true, "1 is truthy");
	assert.notEqual(0, true, "0 is NOT truthy");
	assert.equal(1, 1, "1 is equal to 1, of course!");
});
