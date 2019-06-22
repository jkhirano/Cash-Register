var calculatorModule = (function () {
    let memory = 0;
    let total = 0;
    let calculator = {};

    calculator.load = function (x) {
        if (typeof x === 'number') {
            total = x;
            return x;
        }else{
            throw error;
        }

    }

    calculator.getTotal = function (x) {
        return total;

    }

    calculator.add = function (x) {
        if (typeof x === 'number'){
            total += x;
        }else{
            throw error;
        }
    }

    calculator.subtract = function (x) {
        if (typeof x === 'number'){
            total -= x;
        }else{
            throw error;
        }
    }

    calculator.multiply = function (x) {
        if (typeof x === 'number'){
            total *= x;
        }else{
            throw error;
        }
    }

    calculator.divide = function (x) {
        if (typeof x === 'number'){
            total /= x;
        }else{
            throw error;
        }
    }

    calculator.recallMemory = function (x) {
        return memory;
    }

    calculator.saveMemory = function (x) {
        memory = total;
    }

    calculator.clearMemory = function (x) {
        memory = 0;
    }

    return calculator;

}());