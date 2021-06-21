import createPageHeader from './page-header';


function createContactSection(h2Text, pText) {
    //create a div container
    const container = document.createElement('div');

    //create the h2
    const h2 = document.createElement('h2');
    h2.textContent = h2Text;

    //create the p
    const p = document.createElement('p');
    p.textContent = pText;

    //append both h2 and p to the container
    container.appendChild(h2);
    container.appendChild(p);

    return container
}

function displayContact() {
    const pageSection = document.querySelector('#pageSection');

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contactContainer');
    
    contactContainer.appendChild(createPageHeader('contact', 'contact-header-img.jpg'));

    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contactContent');

    contactContent.appendChild(createContactSection('Phone Number', '1-800-tony-pasta'));
    contactContent.appendChild(createContactSection('Opening Hours', 'Fri-Sun: 8am - 11pm'));
    contactContent.appendChild(createContactSection('Address', '1231 Pasta Ave. Los Angeles, CA.'));

    contactContainer.appendChild(contactContent)
    pageSection.appendChild(contactContainer);
}

export default displayContact;