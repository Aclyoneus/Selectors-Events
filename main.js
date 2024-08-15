const backgroundChangingButton = document.querySelector('#background-changing-button');
const colorInput = document.querySelector('#color-input');

if (backgroundChangingButton && colorInput) {
    backgroundChangingButton.addEventListener('click', function() {
        const inputText = colorInput.value;
        backgroundChangingButton.style.backgroundColor = inputText;
    })
}