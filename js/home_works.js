document.getElementById('gmail_button')?.addEventListener('click', function() {
    const gmailInput = document.getElementById('gmail_input');
    const resultSpan = document.getElementById('gmail_result');

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    const email = gmailInput.value.trim();

    if (!email) {
        resultSpan.textContent = 'Введите ваш Gmail';
        resultSpan.style.color = '#ff5252';
        gmailInput.style.borderColor = '#ff5252';
        return;
    }

    if (gmailRegex.test(email)) {
        resultSpan.textContent = 'Gmail введен верно';
        resultSpan.style.color = '#4caf50';
        gmailInput.style.borderColor = '#4caf50';
    } else {
        resultSpan.textContent = 'Используйте только @gmail.com адреса';
        resultSpan.style.color = '#ff5252';
        gmailInput.style.borderColor = '#ff5252';
    }
}) ;


const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0 , positionY = 0;

const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight;

const moveBlock = () => {
    requestAnimationFrame(moveBlock);
    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    if (positionX < offsetWidth && positionY === 0) {
        positionX++;
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++;
    } else if (positionY >= offsetHeight && positionX > 0) {
        positionX--;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
    }
};

moveBlock();

const secondsEl = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let seconds = 0;
let intervalId = null;

function updateDisplay() {
    secondsEl.textContent = seconds;
}

startBtn.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    updateDisplay();
});





const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/characters.json', true);

xhr.onload = () => {
    if (xhr.status === 200) {
        const characters = JSON.parse(xhr.responseText);
        const list = document.querySelector('.characters-list');

        characters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';

            card.innerHTML = `
        <div class="character-photo">
          <img src="${character.image}" alt="${character.name}">
        </div>
        <h3>${character.name}</h3>
        <p>House: ${character.house}</p>
      `;

            list.appendChild(card);
        });
    } else {
        console.error('Ошибка загрузки characters.json');
    }
};

xhr.send();



let request = new XMLHttpRequest();
request.open('GET', '../data/any.json', true);
request.responseType = 'json';

request.onload = function() {
    if (request.status === 200) {
        console.log(request.response);
    } else {
        console.log('Ошибка загрузки файла: ' + request.status);
    }
};

request.onerror = function() {
    console.log('Сетевая ошибка');
};

request.send();














