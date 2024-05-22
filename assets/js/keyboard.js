export class Keyboard {
    note;
    key;
    
    constructor(note, key) {
        this.note = note;
        this.key = key;
        this.element = document.createElement('div');
        this.element.classList.add('piano-key', 'align-content-center', 'text-center', 'rounded-3', 'fs-3');
        this.element.innerText = key;
        this.element.setAttribute('data-note', this.note);
        this.element.addEventListener('click', this.reproduce.bind(this));
    }

    reproduce() {
        let audio = new Audio(`assets/audio/${this.note}`);
        audio.play();
    }
}
