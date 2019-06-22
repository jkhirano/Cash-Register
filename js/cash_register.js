// var cashReg = calculatorModule();

let numBox = document.querySelectorAll('.button');

for (let i = 0; i<numBox.length; i++){
    numBox[i].addEventListener('click', showNum);
};

function showNum(){
console.log(this.innerHTML);

}