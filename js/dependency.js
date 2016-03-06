var dependency;
(function() {
    var isCommonJS = typeof module === 'object' && module.exports;

    var dep_dependency = isCommonJS ? require('./dep_dependency') : window.dep_dependency;

    dependency = {
        someAction: function() {
            return dep_dependency.someAction();
        }
    };

    if (isCommonJS) {
        module.exports = dependency;
    }
})();
