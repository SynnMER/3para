

// Кнопка
var flag = false;
const buttonText = document.querySelector('#button-text');
button.onclick = function() {
    buttonText.innerText = flag ? 'OFF' : 'ON';
    flag = !flag;
    if(buttonText.innerText == 'OFF'){
        block1.style.backgroundColor = 'white';
        block3.style.backgroundColor = 'white'
        block2.style.backgroundColor = 'white'
    }
};


block1.addEventListener('click', () => {
    if(buttonText.innerText == 'ON'){
        block1.style.backgroundColor = 'red';
        block3.style.backgroundColor = 'white'
        block2.style.backgroundColor = 'white'
    }

});

block2.addEventListener('click', () => {
    if(buttonText.innerText == 'ON'){
        block2.style.backgroundColor = 'yellow';
        block3.style.backgroundColor = 'white'
        block1.style.backgroundColor = 'white'
    }

});

block3.addEventListener('click', () => {
    if(buttonText.innerText == 'ON'){
        block3.style.backgroundColor = 'green';
        block2.style.backgroundColor = 'white'
        block1.style.backgroundColor = 'white'
    }

});
