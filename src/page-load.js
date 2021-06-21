function createNav() {
    //create the container to hold the navigation list and the logo
    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');

    //create the logo
    const navImg = document.createElement('img');
    navImg.setAttribute('src', './images/tonys-pastas-logo-black.png');
    navImg.setAttribute('id', 'nav-logo');

    //append the image the the nav container
    navContainer.appendChild(navImg);

    //create the menuitems (helper function)
    function createNavEl(id) {
        const navEl = document.createElement('li')
        navEl.setAttribute('id', `nav-${id}`);
        navEl.classList.add('navEl');
        navEl.textContent = id;
        return navEl;
    } 

    const homeNavEl = createNavEl('home');
    const menuNavEl = createNavEl('menu');
    const contactNavEl = createNavEl('contact');

    //create a ul to hold the navigation elements
    const ul = document.createElement('ul');

    //append the nav elements to the ul
    ul.appendChild(homeNavEl);
    ul.appendChild(menuNavEl);
    ul.appendChild(contactNavEl);

    //append the ul to the navContainer
    navContainer.appendChild(ul);

    return navContainer;
}

function createPageSection() {
    const pageSection = document.createElement('main');
    pageSection.setAttribute('id', 'pageSection');
    return pageSection;
}

function createFooter() {
    //creater the footer container
    const footerContainer = document.createElement('div');
    footerContainer.setAttribute('id', 'footerContainer');

    const instagramIcon = document.createElement('img');
    instagramIcon.classList.add('socialIcon');
    instagramIcon.setAttribute('src', './images/instagram-icon.png');

    const facebookIcon = document.createElement('img');
    facebookIcon.classList.add('socialIcon');
    facebookIcon.setAttribute('src', './images/facebook-icon.png');

    const youtubeIcon = document.createElement('img');
    youtubeIcon.classList.add('socialIcon');
    youtubeIcon.setAttribute('src', './images/youtube-icon.png');

    footerContainer.appendChild(instagramIcon);
    footerContainer.appendChild(facebookIcon);
    footerContainer.appendChild(youtubeIcon);

    return footerContainer;
}

function initPage() {
    const content = document.querySelector('#content');

    content.appendChild(createNav());
    content.appendChild(createPageSection());
    content.appendChild(createFooter());
}

export default initPage;