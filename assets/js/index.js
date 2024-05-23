import { Keyboard } from './keyboard.js';

let pianoKeys = [
    new Keyboard('nota1.mp3', 'a'),
    new Keyboard('nota2.mp3', 's'),
    new Keyboard('nota3.mp3', 'd'),
    new Keyboard('nota4.mp3', 'f'),
    new Keyboard('nota5.mp3', 'g'),
    new Keyboard('nota6.mp3', 'h'),
    new Keyboard('nota7.mp3', 'j'),
    new Keyboard('nota8.mp3', 'k'),
];

const pianoContainer = document.querySelector('#piano');
pianoKeys.forEach((key) => {
    pianoContainer.appendChild(key.element);
});

document.addEventListener('keydown', (event) => {
    let value = event.key.toLowerCase();
    pianoKeys.forEach((key) => {
        if (value === key.key) {
            key.reproduce();
            key.element.classList.add('active');
            setTimeout(() => key.element.classList.remove('active'), 100);
        }
    });
});
