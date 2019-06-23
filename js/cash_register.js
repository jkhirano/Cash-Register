// var cashReg = calculatorModule();

// EVENT LISTENER - SHOW NUMBERS IN DISPLAY:
let numBox = document.querySelectorAll('.button');

for (let i = 0; i<numBox.length; i++){
    numBox[i].addEventListener('click', showNum);
};

function showNum(){
console.log(this.innerHTML);

}