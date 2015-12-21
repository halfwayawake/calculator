var calculator = document.createElement('div');
calculator.classList.add('calculator');
document.body.appendChild(calculator);

var display = document.createElement('input');
display.classList.add('display');
calculator.appendChild(display);

// Row  1
row = document.createElement('div');
row.classList.add('row');
calculator.appendChild(row);

var button7 = document.createElement('button');
button7.textContent = '7';
button7.addEventListener('click', inputButtonClicked);
row.appendChild(button7);

var button8 = document.createElement('button');
button8.textContent = '8';
button8.addEventListener('click', inputButtonClicked);
row.appendChild(button8);

var button9 = document.createElement('button');
button9.textContent = '9';
button9.addEventListener('click', inputButtonClicked);
row.appendChild(button9);

var buttonDivide = document.createElement('button');
buttonDivide.textContent = '/';
buttonDivide.classList.add('operation');
buttonDivide.addEventListener('click', inputButtonClicked);
row.appendChild(buttonDivide);

// Row 2
row = document.createElement('div');
row.classList.add('row');
calculator.appendChild(row);

var button4 = document.createElement('button');
button4.textContent = '4';
button4.addEventListener('click', inputButtonClicked);
row.appendChild(button4);

var button5 = document.createElement('button');
button5.textContent = '5';
button5.addEventListener('click', inputButtonClicked);
row.appendChild(button5);

var button6 = document.createElement('button');
button6.textContent = '6';
button6.addEventListener('click', inputButtonClicked);
row.appendChild(button6);

var buttonMultiply = document.createElement('button');
buttonMultiply.textContent = '*';
buttonMultiply.classList.add('operation');
buttonMultiply.addEventListener('click', inputButtonClicked);
row.appendChild(buttonMultiply);

// Row 3
var row = document.createElement('div');
row.classList.add('row');
calculator.appendChild(row);

var button1 = document.createElement('button');
button1.textContent = '1';
button1.addEventListener('click', inputButtonClicked);
row.appendChild(button1);

var button2 = document.createElement('button');
button2.textContent = '2';
button2.addEventListener('click', inputButtonClicked);
row.appendChild(button2);

var button3 = document.createElement('button');
button3.textContent = '3';
button3.addEventListener('click', inputButtonClicked);
row.appendChild(button3);

var buttonSubtract = document.createElement('button');
buttonSubtract.textContent = '-';
buttonSubtract.classList.add('operation');
buttonSubtract.addEventListener('click', inputButtonClicked);
row.appendChild(buttonSubtract);

// Row 4
row = document.createElement('div');
row.classList.add('row');
calculator.appendChild(row);

var buttonDecimal = document.createElement('button');
buttonDecimal.textContent = '.';
buttonDecimal.addEventListener('click', inputButtonClicked);
row.appendChild(buttonDecimal);

var button0 = document.createElement('button');
button0.textContent = '0';
button0.addEventListener('click', inputButtonClicked);
row.appendChild(button0);

var buttonEquals = document.createElement('button');
buttonEquals.textContent = '=';
buttonEquals.classList.add('operation');
buttonEquals.addEventListener('click', equalsButtonClicked);
row.appendChild(buttonEquals);

var buttonAdd = document.createElement('button');
buttonAdd.textContent = '+';
buttonAdd.classList.add('operation');
buttonAdd.addEventListener('click', inputButtonClicked);
row.appendChild(buttonAdd);

function inputButtonClicked(event) {
    var buttonClicked = event.target;
    var buttonValue = buttonClicked.textContent;
    
    display.value = display.value + buttonValue;
}

function equalsButtonClicked() {
    var expression = display.value;
    display.value = math.eval(expression);
}