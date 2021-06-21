function createPageHeader(header, imgUrl) {
    const pageheaderContainer = document.createElement('div');
    pageheaderContainer.setAttribute('id', 'pageheaderContainer');

    const h1 = document.createElement('h1');
    h1.textContent = header;

    pageheaderContainer.appendChild(h1);

    //style the pageheaderContainer Background
    pageheaderContainer.setAttribute('style', `background-image: url("./images/${imgUrl}")`);
    return pageheaderContainer;
}

export default createPageHeader;