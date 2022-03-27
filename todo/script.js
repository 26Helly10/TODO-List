'use strict';
//var:

const btnNew = document.querySelector('.addItem');
const addItemForm = document.querySelector('.addItemForm');
const overlay = document.querySelector('.overlay');
const over = document.querySelector('.close');
const add = document.querySelector('.add');
//function:

function open() {
    addItemForm.classList.remove('hide');
    overlay.classList.remove('hide');
}

function close() {
    addItemForm.classList.add('hide');
    overlay.classList.add('hide');
    document.querySelector('.item').value = '';
}
let adauga = function() {
    let note = document.querySelector('.item').value;
    if (!note) {
        console.log('nu are val');
    } else {
        const elemente = document.getElementById('elemente');
        let html = ` <div class="new"> <p class="liv">${note}</p>
        <div class="close-li">&times;</div></div>`;
        elemente.insertAdjacentHTML('afterend', html);
        let lista = document.querySelectorAll('.close-li');
        for (let i = 0; i < lista.length; i++) {
            lista[i].onclick = function() {
                this.parentNode.remove();
            };
        }
    }
    document.querySelector('.item').value = '';
    addItemForm.classList.add('hide');
    overlay.classList.add('hide');
};

//code:
btnNew.addEventListener('click', open);
over.addEventListener('click', close);
add.addEventListener('click', adauga);