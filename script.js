const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const clearAllButton = document.querySelector('.clearAll');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');

let currentText = '';
let previousText = '';
let operation = null;


const executeTask = () => {
    const numberOne = Number(previousText);
    const numberTwo = Number(currentText);
    previousText = currentText;
    if(operation === '+') {
        currentText = numberOne + numberTwo;
        previousText = '';
        operation = null;
    } else if(operation === '-') {
        currentText = numberOne - numberTwo;
        previousText = '';
        operation = null;
    } else if(operation === 'x') {
        currentText = numberOne * numberTwo;
        previousText = '';
        operation = null;
    } else if(operation === '÷') {
        if(numberTwo === 0) {
            clearEverything();
            return;
        }
        currentText = numberOne / numberTwo;
        previousText = '';
        operation = null;
    } else if(operation === '^') {
        currentText = Math.pow(numberOne, numberTwo);
        previousText = '';
        operation = null;
    } else if(operation === '%') {
        currentText = numberOne / 100 * numberTwo;
        previousText = '';
        operation = null;

    }
    return;
}

const clearEverything = () => {
    currentText = '';
    previousText = '';
    operation = null;
}


const chooseOperation = (operator) => {
    if(currentText === '') {
        return;
    }
    if(previousText !== '') {

    }
    operation = operator;
    previousText = currentText;
    currentText = '';
};

const displayCurrentTask = () => {
    currentOperandTextElement.innerText = currentText;
    const operationToDisplay = operation || '';
    previousOperandTextElement.innerText = previousText + operationToDisplay;
};

const addNumber = (numberValue) => {
    if(numberValue === '.') {
        if(currentText.includes('.')) {
            return;
        }
        numberValue = '.';
    }
    currentText = currentText.toString() + numberValue.toString();
};

const deleteNumber = () => {
    currentText = currentText.toString().slice(0, -1);
};


numberButtons.forEach((numberValue) => {
    numberValue.addEventListener('click', () => {
        addNumber(numberValue.innerText);
        displayCurrentTask();
    })
});

deleteButton.addEventListener('click', () => {
    deleteNumber();
    displayCurrentTask();
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
        displayCurrentTask();
    })
});

equalsButton.addEventListener('click', () => {
    executeTask();
    displayCurrentTask();
})

clearAllButton.addEventListener('click', () =>{
    clearEverything();
    displayCurrentTask();
})








