let display = document.getElementById('display');

// Append numbers and operators to the display
function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear the display
function clearDisplay() {
    display.innerText = '0';
}

// Delete the last character
function deleteChar() {
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

// Calculate the result
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
