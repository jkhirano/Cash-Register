var calculatorModule = function () {
    let memory = 0;
    let total = 0;
    let balance = 20;
    let calculator = {};

    // calculator.load = function (x) {
    //     if (typeof parseInt(x) === 'number') {
    //         if (total == '0') {
    //             total = x;
    //         }else{
    //         total += x;}
    //         return total;
    //     }else{
    //         throw new Error;
    //     }

    // }

    calculator.load = function (x) {
        if (typeof x === 'number'){
            total = x;
        }else{
            throw error;
        }
    }

    calculator.clearTotal = function(x){
        return total = 0;
    }

    calculator.getTotal = function (x) {
        return total;
    }

    calculator.getBalance = function(x){
        return total = balance;
    }

    calculator.deposit = function(x){
        return balance + x;
    }

    calculator.withdraw = function(x){
        return balance - x;
    }

    // calculator.add = function (x, y) {
    //     if (typeof parseInt(x) === 'number' && typeof parseInt(y) === 'number'){
    //         x + y;
    //     }else{
    //         throw new Error;
    //     }
    // }

    calculator.add = function(x){
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

};