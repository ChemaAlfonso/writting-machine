var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var WritterMachine = /** @class */ (function () {
    function WritterMachine(writterElement, _a) {
        var _b = _a.texts, any = _b === void 0 ? [''] : _b, _c = _a.speed, speed = _c === void 0 ? 250 : _c, _d = _a.lowerLimit, lowerLimit = _d === void 0 ? 0 : _d, _e = _a.upperLimit, upperLimit = _e === void 0 ? 0 : _e, _f = _a.endDelay, endDelay = _f === void 0 ? 0 : _f, _g = _a.prefix, prefix = _g === void 0 ? '' : _g, _h = _a.sufix, sufix = _h === void 0 ? '' : _h;
        if (writterElement)
            this.makeWritter(writterElement, texts, speed, prefix, sufix, lowerLimit, upperLimit, endDelay);
        else
            throw new Error('HTML element was not provided');
    }
    WritterMachine.prototype.makeWritter = function (writterElement, texts, speed, prefix, sufix, lowerLimit, upperLimit, endDelay) {
        var actualIndex = 0;
        var lastIndex = actualIndex - 1;
        var actualText = 0;
        var actualTextUpperLimit = texts[actualText].length - upperLimit;
        this.machineInterval = setInterval(function () {
            if (actualIndex > lastIndex)
                actualIndex++;
            else
                actualIndex--;
            // Reach the end of actual text
            if (actualIndex === actualTextUpperLimit)
                lastIndex = actualTextUpperLimit + 1;
            // Returned to start of actual text
            if (actualIndex === lowerLimit) {
                lastIndex = lowerLimit - 1;
                actualText++;
                if (!texts[actualText])
                    actualText = 0;
                actualTextUpperLimit = texts[actualText].length - upperLimit;
            }
            ;
            writterElement.innerHTML = prefix + texts[actualText].substr(0, actualIndex) + (actualIndex % 2 === 0 ? '|' : '') + sufix;
        }, speed);
    };
    WritterMachine.prototype.stopWritter = function () {
        if (this.machineInterval)
            clearInterval(this.machineInterval);
    };
    WritterMachine.prototype.wait = function (ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    };
    return WritterMachine;
}());
var writerElement = __spreadArrays(document.querySelectorAll('.written-text'));
var texts = ['Lorem, ipsum dolor', 'Adios', 'Hola', 'Que tal'];
writerElement.map(function (elm) { return new WritterMachine(elm, { texts: texts, speed: 250, endDelay: 1000, prefix: 'Yeah! ', sufix: '...' }); });
