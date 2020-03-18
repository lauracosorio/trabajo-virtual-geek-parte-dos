'use strict';

const teacher1= document.querySelector('.teacher--isra');
const teacher2 = document.querySelector('.teacher--tuerto');
const teacher3 = document.querySelector('.teacher--nasi');

teacher1.addEventListener('click', teacher);
teacher2.addEventListener('click', teacher);
teacher3.addEventListener('click', teacher);

function teacher(event) {
    const chosenTeacher = event.currentTarget;
    if (chosenTeacher.classList.contains('teacher--selected')) {
        chosenTeacher.classList.remove('teacher--selected');
        chosenTeacher.querySelector('.favorite').innerHTML = 'Añadir';
    } else {
        chosenTeacher.classList.add('teacher--selected');
        chosenTeacher.querySelector('.favorite').innerHTML = 'Quitar';
    }

}

