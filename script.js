// 'use strict';

const textBox = document.querySelector('.text-area');
const saveBtn = document.querySelector('.save-btn');
const noteTaken = document.querySelector('.note-container');
const clearBtn = document.querySelector('.clear');
const exportBtn = document.querySelector('.export');

//foregign code Tab key capture for space
// textBox.addEventListener('keydown', function (e) {
//     if (e.key === 'Tab') {
//         e.preventDefault(); // Prevents the default tab behavior of shifting focus
//         const start = this.selectionStart;
//         const end = this.selectionEnd;
//         this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);
//         this.selectionStart = this.selectionEnd = start + 1; // Move caret position after the inserted tab
//     }
// });

const addNote = function () {
    const notes = document.createElement('div');
    const bar = document.createElement('hr');
    notes.classList.add('notes');
    bar.classList.add('bar')
    notes.textContent = textBox.value;
    notes.innerHTML = textBox.value.replace(/\n/g, '<br>') //.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); //Enter and Tab Space functionality # foreign code to be studied!!
    notes.appendChild(bar)
    noteTaken.appendChild(notes);
    textBox.value = "";

}
const clearNote = function () {
    const notes = document.querySelectorAll('.notes');
    for (let i = 0; i < notes.length; i++) {
        noteTaken.removeChild(notes[i]);
    }

}
const exportNote = function () {
    const bodyCotent = document.body.innerHTML;
    document.body.innerHTML = noteTaken.innerHTML;
    window.print();
    document.body.innerHTML = bodyCotent;
}
saveBtn.addEventListener('click', addNote)
clearBtn.addEventListener('click', clearNote);
exportBtn.addEventListener('click', exportNote)

// document.addEventListener('keydown', function (e) {
//     e.key.clear
//     if (e.key === 'Control') {
//         e.preventDefault();
//         addNote();
//     } else if (e.key === "Escape") {
//         e.preventDefault();
//         clearNote();
//     }
//     console.log(e.key);
// })


// const printdiv = function (elem) {
//     const printable = document.querySelector(elem);
//     const bodyCotent = document.querySelector('body').innerHTML;
//     const body = document.querySelector('body');
//     body.innerHtml = printable;
//     window.print();
//     body.innerHtml = bodyCotent;
// }