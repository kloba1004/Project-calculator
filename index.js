let operator,
    chainedOperator,
    tempOperator,
    secondNumber,
    firstNumber,
    tempEquals;

function add(a,b) {
    sum = String(a+b);
    if (sum.length>9) {
        if (sum.charAt(8)>=5) {
            sum = sum.split('');
            sum[8] = Number(sum[8])+1;
            sum = sum.join('');
        }
        sum = sum.substr(0,9);
        sum = Number(sum);
    } else sum = Number(sum);
    return sum < 1000000 ? sum : 'ERROR';
}

function subtract(a,b) {
    subtraction = String(a-b);
    if (subtraction.length>9) {
        if (subtraction.charAt(8)>=5) {
            subtraction = subtraction.split('');
            subtraction[8] = Number(subtraction[8])+1;
            subtraction = subtraction.join('');
        }
        subtraction = subtraction.substr(0,9);
        subtraction = Number(subtraction);
    } else subtraction = Number(subtraction);
    return subtraction < 1000000 ? subtraction : 'ERROR';
}

function multiply(a,b) {
    product = String(a*b);
    if (product.length>9) {
        if (product.charAt(8)>=5) {
            product = product.split('');
            product[8] = Number(product[8])+1;
            product = product.join('');
        }
        product = product.substr(0,9);
        product = Number(product);
    } else product = Number(product);
    return product < 1000000 ? product : 'ERROR';
}

function divide(a,b) {
    division = String(a/b);
    if (division.length>9) {
        if (division.charAt(8)>=5) {
            division = division.split('');
            division[8] = Number(division[8])+1;
            division = division.join('');
        }
        division = division.substr(0,9);
        division = Number(division);
    } else division = Number(division);
    return (b !== 0 && division < 1000000) ? division : 'ERROR';
}

function operate(operator,firstNumber,secondNumber) {
    return operator(firstNumber,secondNumber);
}

const buttons = document.querySelectorAll('button');

let display = document.querySelector('p');
display.textContent = '0';

buttons.forEach(button => button.addEventListener('click', (e) => {
    
    if (e.target.id == 'sign') {
         if (!display.textContent.includes('-')) {
             display.textContent = '-'.concat(display.textContent);
         } else display.textContent = display.textContent.substr(1);
    }

    if (e.target.id == 'floating-point' && !display.textContent.includes('.')) {
        display.textContent += e.target.textContent;
    }

    if (e.target.id == 'backspace') {
        if (display.textContent.length == 1) {
            display.textContent = '0';
        }
        else display.textContent = display.textContent.substr(0,(display.textContent.length-1));
    }

    if (e.target.className == 'number') {
        if (tempOperator !== '') {
            display.textContent = e.target.textContent;
            tempOperator = '';
        }
        else if (display.textContent === '0' || display.textContent === 'ERROR' || tempEquals ==='0') {
            display.textContent = e.target.textContent;
            tempEquals = '1';
        } else if (display.textContent.length<9) display.textContent += e.target.textContent;
    } 
    
    else if (e.target.className == 'operator') {
        if (chainedOperator == '0' && firstNumber !== '') {
            secondNumber = Number(display.textContent);
            display.textContent = operate(window[operator], firstNumber, secondNumber);
            chainedOperator = '';
        }
        operator = e.target.id;
        firstNumber = Number(display.textContent);
        tempOperator = operator;
        chainedOperator = 0;
    } 
    
    else if (e.target.id == 'equals' && firstNumber !== '') {
        secondNumber = Number(display.textContent);
        display.textContent = operate(window[operator], firstNumber, secondNumber);
        firstNumber = '';
        tempEquals = '0';
    } 
    
    else if (e.target.id == 'delete') {
        firstNumber = '';
        secondNumber = '';
        display.textContent = '0';
    }   
}))

