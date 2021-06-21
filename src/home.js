import createPageHeader from './page-header';

function createHomeContainer () {
    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'homeContainer');
    return homeContainer;
}

function createLogo() {
    const homeLogo = document.createElement('img');
    homeLogo.setAttribute('src', './images/tonys-pastas-logo-black.png');
    homeLogo.setAttribute('id', 'homeLogo');
    return homeLogo;
}

function createButtons() {
    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('id', 'btnContainer')

    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menuBtn');
    menuBtn.textContent = 'menu';
    menuBtn.classList.add('darkBtn');

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'contact';
    contactBtn.setAttribute('id', 'contactBtn');
    contactBtn.classList.add('lightBtn');

    btnContainer.appendChild(menuBtn);
    btnContainer.appendChild(contactBtn);

    return btnContainer;
}

function displayHome() {
    const pageSection = document.querySelector('#pageSection');
    const homeContainer = createHomeContainer();
    homeContainer.appendChild(createLogo());
    homeContainer.appendChild(createButtons());

    pageSection.appendChild(homeContainer);
}

export default displayHome;