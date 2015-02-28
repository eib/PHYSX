module.exports = function (obj, updater) {
    var oldUpdate = obj.update;
    var updaters = obj.updaters;
    if (!updaters) {
        updaters = [];
        Object.defineProperty(obj, 'updaters', {
            value: updaters,
            enumerable: false,
        });
        obj.update = function () {
            for (var ii = 0; ii < updaters.length; ii++) {
                updaters[ii].apply(obj, arguments);
            }
        };
        if (oldUpdate) {
            updaters.push(oldUpdate);
        }
    }
    updaters.push(updater);
};
