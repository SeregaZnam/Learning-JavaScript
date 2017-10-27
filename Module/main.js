var counterModule = (function (jQ) {
    console.log(jQ('body'));
    var counter = 0;

    var increaseCounter = function () {
        counter++;
    };

    var getCounter = function () {
        return counter;
    };

    return {
        getCounter: getCounter,
        increaseCounter: increaseCounter
    }
}(jQuery));