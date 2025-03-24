

const displayElm = document.querySelector("#display");

const btn0 = document.querySelector("#btn-0");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const btn7 = document.querySelector("#btn-7");
const btn8 = document.querySelector("#btn-8");
const btn9 = document.querySelector("#btn-9");


const handleDigitClick = (event) => {
    const digit = displayElm.textContent
    displayElm.textContent = digit;
  
}

btn1.addEventListener("click" , handleDigitClick);
