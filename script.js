const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Previously provided JavaScript code for the hamburger menu
// ... (previously provided JavaScript code) ...

// Calculator functionality
let currentInput = '';

function appendSymbol(symbol) {
    currentInput += symbol;
    updateResult();
}

function clearResult() {
    currentInput = '';
    updateResult();
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = String(result);
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}
