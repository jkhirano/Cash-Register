let cashReg = calculatorModule();

let displayBox = document.getElementById('display');

// EVENT LISTENER - SHOW NUMBERS IN DISPLAY:
let numButton = document.querySelectorAll('.number');

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener('click', showNum);
};

function showNum() {
    // console.log(this.innerHTML);
    // let displayBox = document.getElementById('display');
    // displayBox.textContent = this.textContent;
    display.textContent = cashReg.load(this.textContent);
};

// EVENT LISTENER - OPERATIONS:

let opButton = document.querySelectorAll('.operator');

for (let i = 0; i < opButton.length; i++) {
    opButton[i].addEventListener('click', showOps)
    // console.log(opButton[i]);
};

function showOps() {
    cashReg.saveMemory();
    cashReg.clearTotal();
    if (this.id == 'divide') {
        // operator = '÷';
        display.textContent = this.textContent;
    } else if (this.id == 'multiply') {
        display.textContent = this.textContent;
    } else if (this.id == 'minus') {
        display.textContent = this.textContent;
    } else if (this.id == 'add') {
        display.textContent = this.textContent;
    }
};

// DECIMAL:
let decimal = document.getElementById('decimal');
// ^need to finish

// CALCULATE:
let equal = document.getElementById('equal');

equal.addEventListener('click', calculate);

function calculate(){
    let displayNum = parseFloat(display.textContent);
if (opButton === '÷'){
return display.innerHTML = cashReg.divide(displayNum)
};

    // if (opButton === '÷'){
    //     cashReg.divide(parseFloat(display.textContent));
    //     displayBox.textContent = cashReg.getTotal();
    // }
}

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
