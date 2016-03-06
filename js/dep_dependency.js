var dep_dependency;
(function() {
    var isCommonJS = typeof module === 'object' && module.exports;

    dep_dependency = {
        someAction: function() {
            return true;
        }
    };

    if (isCommonJS) {
        module.exports = dep_dependency;
    }
})()
