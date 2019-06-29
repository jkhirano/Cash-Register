let cashReg = calculatorModule();

let firstNum = 0;
let secondNum = 0;
let operation = '';

let displayBox = document.getElementById('display');

// EVENT LISTENER - SHOW NUMBERS IN DISPLAY:
let numButton = document.querySelectorAll('.number');

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener('click', showNum);
};

function showNum() {
    // console.log(this.innerHTML);
    let displayBox = document.getElementById('display');
    displayBox.textContent = displayBox.textContent + this.textContent;
    if (!firstNum) {
        firstNum = parseFloat(this.textContent);
        cashReg.load(parseFloat(this.textContent));
    } else if (firstNum && operation) {
        secondNum = parseFloat(this.textContent);
    }
};
    // display.textContent = cashReg.load(this.textContent);

// EVENT LISTENER - OPERATIONS:

let opButton = document.querySelectorAll('.operator');

for (let i = 0; i < opButton.length; i++) {
    opButton[i].addEventListener('click', showOps)
    // console.log(opButton[i]);
};

function showOps() {
    let i = parseInt(displayBox.textContent);
    displayBox.innerHTML = '';
    cashReg.saveMemory();
    cashReg.clearTotal();
    if (this.id == 'divide') {
        operation = '÷';
        // display.textContent = this.textContent;
    } else if (this.id == 'multiply') {
        operation = 'x';
        // display.textContent = this.textContent;
    } else if (this.id == 'minus') {
        operation = '-';
        // display.textContent = this.textContent;
    } else if (this.id == 'add') {
        operation = '+';
        // display.textContent = this.textContent;
    }
};

// CALCULATE:
let equal = document.getElementById('equal');

equal.addEventListener('click', calculate);

function calculate() {
    // let displayNum = parseFloat(display.textContent);
    if (operation === '÷') {
        displayBox.innerHTML = cashReg.divide(secondNum)
    };

    // if (opButton === '÷'){
    //     cashReg.divide(parseFloat(display.textContent));
    //     displayBox.textContent = cashReg.getTotal();
    // }
}

// DECIMAL:
let decimal = document.getElementById('decimal');

decimal = addEventListener('click', addDecimal);

function addDecimal() {
    if (this.id == 'decimal') {
        display.textContent = display.textContent + this.textContent;
    }
}
// ^need to finish, not working

// CLEAR DISPLAY:
let clear = document.getElementById('clear');

clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    displayBox.textContent = cashReg.clearTotal();
};

// GET BALANCE:
let balance = document.getElementById('balance');

balance.addEventListener('click', getBalance);

function getBalance() {
    displayBox.textContent = cashReg.getBalance();
}
// DEPOSIT:
let deposit = document.getElementById('deposit');

deposit.addEventListener('click', addDeposit);

function addDeposit() {
    displayBox.textContent = cashReg.deposit();
}

// WITHDRAW:
let withdraw = document.getElementById('withdraw');

withdraw.addEventListener('click', withdrawMoney);

function withdrawMoney() {
    displayBox.textContent = cashReg.withdraw();
}
