// Declaring the module on the top will add it to the `window` object for legacy
// applications, while in a CommonJS module, it wouldn't pollute the global
// scope.
var entry;
(function() {
    var isCommonJS = typeof module === 'object' && module.exports;

    // I found this way of handling dependencies the most reliable.
    // This way you have to handle both situations explicitly here.
    var dependency = isCommonJS ? require('./dependency') : window.dependency;

    entry = {
        run: function() {
            console.log('Dependency response:', dependency.someAction());
        }
    };

    if (isCommonJS) {
        module.exports = entry;
    }
})();
