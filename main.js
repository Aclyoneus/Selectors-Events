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