var cache = function (fn) {
    var called = false,
        store;

    if (!(fn instanceof Function)) {
        called = true;
        store = fn;
        delete(fn);
    }

    return function () {
        if (!called) {
            called = true;
            store = fn.apply(this, arguments);
            delete(fn);
        }
        return store;
    };
};

module.exports = cache;