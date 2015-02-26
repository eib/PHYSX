var Color = require('color'),
    mixinUpdater = require('./mixinUpdater'),;

module.exports = function mixinHSL(obj, huePropName, colorPropName) {
    var colorFormatter = function (tick) {
        var hue = obj[huePropName],
            color = Color(hue).hslString();
        obj[colorPropName] = color;
    };
    mixinUpdater(obj, colorFormatter);
};