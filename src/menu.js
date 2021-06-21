import createPageHeader from './page-header';

function createMenuItem(plateName, plateDescription, plateImageUrl, price) {
    const MenuItem = document.createElement('div');
    MenuItem.classList.add('menuItem');

    //image of the plate
    const plateImage = document.createElement('img');
    plateImage.setAttribute('src', `./images/plate-images/${plateImageUrl}`);
    plateImage.classList.add('plateImage');

    //title of the plate
    const plateTitle = document.createElement('h3');
    plateTitle.textContent = plateName;

    //plate price
    const platePrice = document.createElement('h3');
    platePrice.textContent = price;

    //description of the plate
    const plateDesc = document.createElement('p')
    plateDesc.classList.add('plateDesc');
    plateDesc.textContent = plateDescription;

    //add the plate title, a doted span and the price in the own container
    const titleSpanPrice = document.createElement('div');
    titleSpanPrice.classList.add('titleSpanPrice');
    titleSpanPrice.appendChild(plateTitle);
    //this is the dotted span
    const dotSpan = document.createElement('span');
    dotSpan.classList.add('dotSpan');
    titleSpanPrice.appendChild(dotSpan);
    titleSpanPrice.appendChild(platePrice);


    //add the plate title and plate description in their own div
    const plateNameDesc = document.createElement('div');
    plateNameDesc.classList.add('plateNameDesc');

    //add the title and description to the plateNameDesc div containeur
    plateNameDesc.appendChild(titleSpanPrice);
    plateNameDesc.appendChild(plateDesc);

    //add the image and the plateNameDesc container to the menuitem container
    MenuItem.appendChild(plateImage);
    MenuItem.appendChild(plateNameDesc);

    return MenuItem;

}

function displayMenu() {
    // start by creating the page header
    const pageSection = document.querySelector('#pageSection');
    
    //create a menuContainer
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menuContainer')

    //add the menu header to the menu container
    menuContainer.appendChild(createPageHeader('menu', 'menu-header-img.jpg'));

    //create a menuGrid containuer
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menuGrid');

    //create all the menu items and append them to the menuGrid container
    menuGrid.appendChild(createMenuItem('Asian Fusion Beef Noodles',
            'this is a plate description',
            'asian-fusion-beef-noodles.jpg',
            23));

    menuGrid.appendChild(createMenuItem('Cheese Raviolis',
            'this is a plate description',
            'cheese-ravioli.jpg',
            18));

    menuGrid.appendChild(createMenuItem('Chicken Fetuccini Alfredo',
            'this is a plate description',
            'chicken-fetuccini-alfredo.jpg',
            32));

    menuGrid.appendChild(createMenuItem('Lime & Shrimps Spaghetti',
            'this is a plate description',
            'lime-shrimp-spaghetti.jpg',
            23));

    menuGrid.appendChild(createMenuItem('Mushroom & White Wine Spaghetti',
            'this is a plate description',
            'mushroom-white-wine-spaghetti.jpg',
            27));

    menuGrid.appendChild(createMenuItem('Shrimp Mediterranean Spaghetti',
            'this is a plate description',
            'shrimp-mediterranean-spaghetti.jpg',
            27));


    //add the menuGrtid to the menuContainuer
    menuContainer.appendChild(menuGrid);

    pageSection.appendChild(menuContainer);

}

export default displayMenu;