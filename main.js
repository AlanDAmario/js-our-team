'use strict';
// CREAZIONE ARRAY CON OGGETTI, MILESTONE 0
const members = [
    {
        firstname: 'Wayne',
        lastname: 'Barnett',
        role: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        firstname: 'Angela',
        lastname: 'Caroll',
        role: 'Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg'
    },

    {
        firstname: 'Walter',
        lastname: 'Gordon',
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg'
    },

    {
        firstname: 'Angela',
        lastname: 'Lopez',
        role: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        firstname: 'Scott',
        lastname: 'Estrada',
        role: 'Developer',
        photo: 'img/scott-estrada-developer.jpg'
    },

    {
        firstname: 'Barbara',
        lastname: 'Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg'
    },
];

//CICLO FOR PER STAMPARE TUTTI GLI ELEMENTI, MILESTONE 1
for (let i = 0; i < members.length; i++) {
    console.log('Nome', members[i].firstname);
    console.log('Cognome', members[i].lastname);
    console.log('Ruolo', members[i].role);
    console.log('Foto', members[i].photo);
}

//STAMPARE SU HTML, Milestone 2
function printCard(functionMembers) {
    const ul = document.querySelector('.list');
    for (let i = 0; i < functionMembers.length; i++) {
        //CREAZIONE CLASSE PER RIPRENDERE IL CONTENUTO DELL OGGETTO STAMPATO DAL FOR PER RICHIMARLO DOPO SINGOLARMENTE 
        const currentobj = functionMembers[i];
        // CREAZIONE ELEMENTI DA APPEND SU HTML
        const li = document.createElement('li');
        const div = document.createElement('div');
        //CREAZIONE DI UN CLASSE NON STILIZZATA IN CSS
        div.classList.add('.card');
        // CREAZIONE VARIABILI PER CREARE ELEMENTI DA APPEND IN HTML
        const fName = document.createElement('h2');
        const lName = document.createElement('h2');
        const pRole = document.createElement('p');
        //METODOLOGI PER APPEND UN IMG 
        const photo2 = document.createElement('img');
        //METODO PER STAMPARE LA FOTO
        photo2.src = currentobj.photo;
        //INIZIO DEL METODO APPEND, TRAMITE CURRENTOBJ (CON IL PUNTO RICHIAMO SIGNOLARMENTE IL CONTENUTO DELL OGGETTO) 
        fName.append(currentobj.firstname);
        lName.append(currentobj.lastname);
        pRole.append(currentobj.role);
        photo2.append(currentobj.photo);
        //RICHIAMO E FINE DELL APPEND TRAMITE ILL SUO METODO
        div.append(fName, lName, pRole, photo2);
        li.append(div);
        ul.append(li);
    }
}
//RICHIAMO FUNZIONE PER FAR APPARIRE TUTTO SU SCHERMO
printCard(members);

