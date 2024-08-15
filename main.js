// 1

const backgroundChangingButton = document.querySelector('#background-changing-button');
const colorInput = document.querySelector('#color-input');

if (backgroundChangingButton && colorInput) {
    backgroundChangingButton.addEventListener('click', function() {
        const inputText = colorInput.value;
        backgroundChangingButton.style.backgroundColor = inputText;
    })
}

// 2

const fontSizeInput = document.querySelector('#font-size-input');
const fontSizeParagraph = document.querySelector('#font-size-paragraph');

if (fontSizeInput) {
    fontSizeInput.addEventListener('input', function() {
        let inputNumber = fontSizeInput.value;
        if (inputNumber <= 0) {
            inputNumber = 12;
        }
        fontSizeParagraph.style.fontSize = `${inputNumber}px`;
    })
}

// 3

const colorChangingButton = document.querySelector('#color-changing-button');
const blackParagraphs = document.querySelectorAll('.black-paragraph');

if (colorChangingButton) {
    colorChangingButton.addEventListener('click', function() {
        blackParagraphs.forEach(function(paragraph) {
            paragraph.classList.toggle('green-color-paragraph');
        })
    })
}

// 4

const textInput = document.querySelector('#text-input');
const textChangingButton = document.querySelector('#text-changing-button');

if (textChangingButton) {

}

// 5

const yellowButton = document.querySelector('.yellow-button');

if (yellowButton) {
    yellowButton.addEventListener('click', function() {
        yellowButton.classList.toggle('red-button');
        yellowButton.classList.toggle('yellow-button');
    })
}