import initPage from './page-load';
import displayHome from './home.js';
import displayMenu from './menu';
import displayContact from './contact';

initPage();
displayHome();

//tab switching logic
const navEls = document.querySelectorAll('.navEl');
navEls.forEach(function(elem) {
    elem.addEventListener('click', function() {
        switchTabs(elem.id.split('nav-')[1]);
    })
})

function switchTabs(elem) {
    //clear all the element in pageSection
    const pageSection = document.querySelector('#pageSection');
    pageSection.innerHTML = '';

    switch (elem) {
        case 'home':
            displayHome();
            break;
        case 'menu':
            displayMenu();
            break;
        case 'contact':
            //display contact
            displayContact();
            break;
    }
}

//home banner button browsing logic
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', () => {switchTabs('menu')});

const contactBtn = document.querySelector('#contactBtn');
contactBtn.addEventListener('click', () => {switchTabs('contact')});