/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header */ "./src/page-header.js");



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
    
    contactContainer.appendChild((0,_page_header__WEBPACK_IMPORTED_MODULE_0__.default)('contact', 'contact-header-img.jpg'));

    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contactContent');

    contactContent.appendChild(createContactSection('Phone Number', '1-800-tony-pasta'));
    contactContent.appendChild(createContactSection('Opening Hours', 'Fri-Sun: 8am - 11pm'));
    contactContent.appendChild(createContactSection('Address', '1231 Pasta Ave. Los Angeles, CA.'));

    contactContainer.appendChild(contactContent)
    pageSection.appendChild(contactContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header */ "./src/page-header.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header */ "./src/page-header.js");


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
    menuContainer.appendChild((0,_page_header__WEBPACK_IMPORTED_MODULE_0__.default)('menu', 'menu-header-img.jpg'));

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);

/***/ }),

/***/ "./src/page-header.js":
/*!****************************!*\
  !*** ./src/page-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPageHeader);

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();

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
            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();
            break;
        case 'menu':
            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
            break;
        case 'contact':
            //display contact
            (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)();
            break;
    }
}

//home banner button browsing logic
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', () => {switchTabs('menu')});

const contactBtn = document.querySelector('#contactBtn');
contactBtn.addEventListener('click', () => {switchTabs('contact')});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDOzs7QUFHN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQyxxREFBZ0I7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZ0I7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7O0FDNUNtQjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYztBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixxREFBZ0I7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUN6RzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGLE9BQU87QUFDeEY7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7Ozs7QUNkL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsR0FBRztBQUMzQztBQUNBO0FBQ0E7QUFDQSxLOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFOzs7Ozs7VUM5RXZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0M7QUFDSDtBQUNNOztBQUV2QyxtREFBUTtBQUNSLGlEQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxpREFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSw4Q0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFjO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLG1CQUFtQjs7QUFFNUQ7QUFDQSw0Q0FBNEMsc0JBQXNCLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVQYWdlSGVhZGVyIGZyb20gJy4vcGFnZS1oZWFkZXInO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKGgyVGV4dCwgcFRleHQpIHtcbiAgICAvL2NyZWF0ZSBhIGRpdiBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vY3JlYXRlIHRoZSBoMlxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IGgyVGV4dDtcblxuICAgIC8vY3JlYXRlIHRoZSBwXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gcFRleHQ7XG5cbiAgICAvL2FwcGVuZCBib3RoIGgyIGFuZCBwIHRvIHRoZSBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcblxuICAgIHJldHVybiBjb250YWluZXJcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNvbnRhY3QoKSB7XG4gICAgY29uc3QgcGFnZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZVNlY3Rpb24nKTtcblxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdENvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGFnZUhlYWRlcignY29udGFjdCcsICdjb250YWN0LWhlYWRlci1pbWcuanBnJykpO1xuXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RDb250ZW50Jyk7XG5cbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0U2VjdGlvbignUGhvbmUgTnVtYmVyJywgJzEtODAwLXRvbnktcGFzdGEnKSk7XG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oJ09wZW5pbmcgSG91cnMnLCAnRnJpLVN1bjogOGFtIC0gMTFwbScpKTtcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0U2VjdGlvbignQWRkcmVzcycsICcxMjMxIFBhc3RhIEF2ZS4gTG9zIEFuZ2VsZXMsIENBLicpKTtcblxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpXG4gICAgcGFnZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250YWN0OyIsImltcG9ydCBjcmVhdGVQYWdlSGVhZGVyIGZyb20gJy4vcGFnZS1oZWFkZXInO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVDb250YWluZXInKTtcbiAgICByZXR1cm4gaG9tZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9nbygpIHtcbiAgICBjb25zdCBob21lTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVMb2dvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzL3RvbnlzLXBhc3Rhcy1sb2dvLWJsYWNrLnBuZycpO1xuICAgIGhvbWVMb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZUxvZ28nKTtcbiAgICByZXR1cm4gaG9tZUxvZ287XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuQ29udGFpbmVyJylcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudUJ0bicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnbWVudSc7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdkYXJrQnRuJyk7XG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdjb250YWN0JztcbiAgICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdEJ0bicpO1xuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnbGlnaHRCdG4nKTtcblxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICByZXR1cm4gYnRuQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SG9tZSgpIHtcbiAgICBjb25zdCBwYWdlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlU2VjdGlvbicpO1xuICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBjcmVhdGVIb21lQ29udGFpbmVyKCk7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMb2dvKCkpO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9ucygpKTtcblxuICAgIHBhZ2VTZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG9tZTsiLCJpbXBvcnQgY3JlYXRlUGFnZUhlYWRlciBmcm9tICcuL3BhZ2UtaGVhZGVyJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0ocGxhdGVOYW1lLCBwbGF0ZURlc2NyaXB0aW9uLCBwbGF0ZUltYWdlVXJsLCBwcmljZSkge1xuICAgIGNvbnN0IE1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgTWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICAgIC8vaW1hZ2Ugb2YgdGhlIHBsYXRlXG4gICAgY29uc3QgcGxhdGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBsYXRlSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9pbWFnZXMvcGxhdGUtaW1hZ2VzLyR7cGxhdGVJbWFnZVVybH1gKTtcbiAgICBwbGF0ZUltYWdlLmNsYXNzTGlzdC5hZGQoJ3BsYXRlSW1hZ2UnKTtcblxuICAgIC8vdGl0bGUgb2YgdGhlIHBsYXRlXG4gICAgY29uc3QgcGxhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcGxhdGVUaXRsZS50ZXh0Q29udGVudCA9IHBsYXRlTmFtZTtcblxuICAgIC8vcGxhdGUgcHJpY2VcbiAgICBjb25zdCBwbGF0ZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwbGF0ZVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICAvL2Rlc2NyaXB0aW9uIG9mIHRoZSBwbGF0ZVxuICAgIGNvbnN0IHBsYXRlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBsYXRlRGVzYy5jbGFzc0xpc3QuYWRkKCdwbGF0ZURlc2MnKTtcbiAgICBwbGF0ZURlc2MudGV4dENvbnRlbnQgPSBwbGF0ZURlc2NyaXB0aW9uO1xuXG4gICAgLy9hZGQgdGhlIHBsYXRlIHRpdGxlLCBhIGRvdGVkIHNwYW4gYW5kIHRoZSBwcmljZSBpbiB0aGUgb3duIGNvbnRhaW5lclxuICAgIGNvbnN0IHRpdGxlU3BhblByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVTcGFuUHJpY2UuY2xhc3NMaXN0LmFkZCgndGl0bGVTcGFuUHJpY2UnKTtcbiAgICB0aXRsZVNwYW5QcmljZS5hcHBlbmRDaGlsZChwbGF0ZVRpdGxlKTtcbiAgICAvL3RoaXMgaXMgdGhlIGRvdHRlZCBzcGFuXG4gICAgY29uc3QgZG90U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkb3RTcGFuLmNsYXNzTGlzdC5hZGQoJ2RvdFNwYW4nKTtcbiAgICB0aXRsZVNwYW5QcmljZS5hcHBlbmRDaGlsZChkb3RTcGFuKTtcbiAgICB0aXRsZVNwYW5QcmljZS5hcHBlbmRDaGlsZChwbGF0ZVByaWNlKTtcblxuXG4gICAgLy9hZGQgdGhlIHBsYXRlIHRpdGxlIGFuZCBwbGF0ZSBkZXNjcmlwdGlvbiBpbiB0aGVpciBvd24gZGl2XG4gICAgY29uc3QgcGxhdGVOYW1lRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXRlTmFtZURlc2MuY2xhc3NMaXN0LmFkZCgncGxhdGVOYW1lRGVzYycpO1xuXG4gICAgLy9hZGQgdGhlIHRpdGxlIGFuZCBkZXNjcmlwdGlvbiB0byB0aGUgcGxhdGVOYW1lRGVzYyBkaXYgY29udGFpbmV1clxuICAgIHBsYXRlTmFtZURlc2MuYXBwZW5kQ2hpbGQodGl0bGVTcGFuUHJpY2UpO1xuICAgIHBsYXRlTmFtZURlc2MuYXBwZW5kQ2hpbGQocGxhdGVEZXNjKTtcblxuICAgIC8vYWRkIHRoZSBpbWFnZSBhbmQgdGhlIHBsYXRlTmFtZURlc2MgY29udGFpbmVyIHRvIHRoZSBtZW51aXRlbSBjb250YWluZXJcbiAgICBNZW51SXRlbS5hcHBlbmRDaGlsZChwbGF0ZUltYWdlKTtcbiAgICBNZW51SXRlbS5hcHBlbmRDaGlsZChwbGF0ZU5hbWVEZXNjKTtcblxuICAgIHJldHVybiBNZW51SXRlbTtcblxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcbiAgICAvLyBzdGFydCBieSBjcmVhdGluZyB0aGUgcGFnZSBoZWFkZXJcbiAgICBjb25zdCBwYWdlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlU2VjdGlvbicpO1xuICAgIFxuICAgIC8vY3JlYXRlIGEgbWVudUNvbnRhaW5lclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudUNvbnRhaW5lcicpXG5cbiAgICAvL2FkZCB0aGUgbWVudSBoZWFkZXIgdG8gdGhlIG1lbnUgY29udGFpbmVyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYWdlSGVhZGVyKCdtZW51JywgJ21lbnUtaGVhZGVyLWltZy5qcGcnKSk7XG5cbiAgICAvL2NyZWF0ZSBhIG1lbnVHcmlkIGNvbnRhaW51ZXJcbiAgICBjb25zdCBtZW51R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVHcmlkLmNsYXNzTGlzdC5hZGQoJ21lbnVHcmlkJyk7XG5cbiAgICAvL2NyZWF0ZSBhbGwgdGhlIG1lbnUgaXRlbXMgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBtZW51R3JpZCBjb250YWluZXJcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQXNpYW4gRnVzaW9uIEJlZWYgTm9vZGxlcycsXG4gICAgICAgICAgICAndGhpcyBpcyBhIHBsYXRlIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICdhc2lhbi1mdXNpb24tYmVlZi1ub29kbGVzLmpwZycsXG4gICAgICAgICAgICAyMykpO1xuXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0NoZWVzZSBSYXZpb2xpcycsXG4gICAgICAgICAgICAndGhpcyBpcyBhIHBsYXRlIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICdjaGVlc2UtcmF2aW9saS5qcGcnLFxuICAgICAgICAgICAgMTgpKTtcblxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdDaGlja2VuIEZldHVjY2luaSBBbGZyZWRvJyxcbiAgICAgICAgICAgICd0aGlzIGlzIGEgcGxhdGUgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2NoaWNrZW4tZmV0dWNjaW5pLWFsZnJlZG8uanBnJyxcbiAgICAgICAgICAgIDMyKSk7XG5cbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnTGltZSAmIFNocmltcHMgU3BhZ2hldHRpJyxcbiAgICAgICAgICAgICd0aGlzIGlzIGEgcGxhdGUgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2xpbWUtc2hyaW1wLXNwYWdoZXR0aS5qcGcnLFxuICAgICAgICAgICAgMjMpKTtcblxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdNdXNocm9vbSAmIFdoaXRlIFdpbmUgU3BhZ2hldHRpJyxcbiAgICAgICAgICAgICd0aGlzIGlzIGEgcGxhdGUgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ211c2hyb29tLXdoaXRlLXdpbmUtc3BhZ2hldHRpLmpwZycsXG4gICAgICAgICAgICAyNykpO1xuXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ1NocmltcCBNZWRpdGVycmFuZWFuIFNwYWdoZXR0aScsXG4gICAgICAgICAgICAndGhpcyBpcyBhIHBsYXRlIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICdzaHJpbXAtbWVkaXRlcnJhbmVhbi1zcGFnaGV0dGkuanBnJyxcbiAgICAgICAgICAgIDI3KSk7XG5cblxuICAgIC8vYWRkIHRoZSBtZW51R3J0aWQgdG8gdGhlIG1lbnVDb250YWludWVyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51R3JpZCk7XG5cbiAgICBwYWdlU2VjdGlvbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVudTsiLCJmdW5jdGlvbiBjcmVhdGVQYWdlSGVhZGVyKGhlYWRlciwgaW1nVXJsKSB7XG4gICAgY29uc3QgcGFnZWhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VoZWFkZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwYWdlaGVhZGVyQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBoZWFkZXI7XG5cbiAgICBwYWdlaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIC8vc3R5bGUgdGhlIHBhZ2VoZWFkZXJDb250YWluZXIgQmFja2dyb3VuZFxuICAgIHBhZ2VoZWFkZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltYWdlcy8ke2ltZ1VybH1cIilgKTtcbiAgICByZXR1cm4gcGFnZWhlYWRlckNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZUhlYWRlcjsiLCJmdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgLy9jcmVhdGUgdGhlIGNvbnRhaW5lciB0byBob2xkIHRoZSBuYXZpZ2F0aW9uIGxpc3QgYW5kIHRoZSBsb2dvXG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1jb250YWluZXInKTtcblxuICAgIC8vY3JlYXRlIHRoZSBsb2dvXG4gICAgY29uc3QgbmF2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmF2SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzL3RvbnlzLXBhc3Rhcy1sb2dvLWJsYWNrLnBuZycpO1xuICAgIG5hdkltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1sb2dvJyk7XG5cbiAgICAvL2FwcGVuZCB0aGUgaW1hZ2UgdGhlIHRoZSBuYXYgY29udGFpbmVyXG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkltZyk7XG5cbiAgICAvL2NyZWF0ZSB0aGUgbWVudWl0ZW1zIChoZWxwZXIgZnVuY3Rpb24pXG4gICAgZnVuY3Rpb24gY3JlYXRlTmF2RWwoaWQpIHtcbiAgICAgICAgY29uc3QgbmF2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIG5hdkVsLnNldEF0dHJpYnV0ZSgnaWQnLCBgbmF2LSR7aWR9YCk7XG4gICAgICAgIG5hdkVsLmNsYXNzTGlzdC5hZGQoJ25hdkVsJyk7XG4gICAgICAgIG5hdkVsLnRleHRDb250ZW50ID0gaWQ7XG4gICAgICAgIHJldHVybiBuYXZFbDtcbiAgICB9IFxuXG4gICAgY29uc3QgaG9tZU5hdkVsID0gY3JlYXRlTmF2RWwoJ2hvbWUnKTtcbiAgICBjb25zdCBtZW51TmF2RWwgPSBjcmVhdGVOYXZFbCgnbWVudScpO1xuICAgIGNvbnN0IGNvbnRhY3ROYXZFbCA9IGNyZWF0ZU5hdkVsKCdjb250YWN0Jyk7XG5cbiAgICAvL2NyZWF0ZSBhIHVsIHRvIGhvbGQgdGhlIG5hdmlnYXRpb24gZWxlbWVudHNcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAvL2FwcGVuZCB0aGUgbmF2IGVsZW1lbnRzIHRvIHRoZSB1bFxuICAgIHVsLmFwcGVuZENoaWxkKGhvbWVOYXZFbCk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudU5hdkVsKTtcbiAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0TmF2RWwpO1xuXG4gICAgLy9hcHBlbmQgdGhlIHVsIHRvIHRoZSBuYXZDb250YWluZXJcbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgcmV0dXJuIG5hdkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFnZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgcGFnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgcGFnZVNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdwYWdlU2VjdGlvbicpO1xuICAgIHJldHVybiBwYWdlU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIC8vY3JlYXRlciB0aGUgZm9vdGVyIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlckNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaW5zdGFncmFtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGluc3RhZ3JhbUljb24uY2xhc3NMaXN0LmFkZCgnc29jaWFsSWNvbicpO1xuICAgIGluc3RhZ3JhbUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvaW5zdGFncmFtLWljb24ucG5nJyk7XG5cbiAgICBjb25zdCBmYWNlYm9va0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmYWNlYm9va0ljb24uY2xhc3NMaXN0LmFkZCgnc29jaWFsSWNvbicpO1xuICAgIGZhY2Vib29rSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9mYWNlYm9vay1pY29uLnBuZycpO1xuXG4gICAgY29uc3QgeW91dHViZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB5b3V0dWJlSWNvbi5jbGFzc0xpc3QuYWRkKCdzb2NpYWxJY29uJyk7XG4gICAgeW91dHViZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMveW91dHViZS1pY29uLnBuZycpO1xuXG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RhZ3JhbUljb24pO1xuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmYWNlYm9va0ljb24pO1xuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh5b3V0dWJlSWNvbik7XG5cbiAgICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUGFnZVNlY3Rpb24oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRQYWdlIGZyb20gJy4vcGFnZS1sb2FkJztcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGRpc3BsYXlNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgZGlzcGxheUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuaW5pdFBhZ2UoKTtcbmRpc3BsYXlIb21lKCk7XG5cbi8vdGFiIHN3aXRjaGluZyBsb2dpY1xuY29uc3QgbmF2RWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdkVsJyk7XG5uYXZFbHMuZm9yRWFjaChmdW5jdGlvbihlbGVtKSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2hUYWJzKGVsZW0uaWQuc3BsaXQoJ25hdi0nKVsxXSk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIHN3aXRjaFRhYnMoZWxlbSkge1xuICAgIC8vY2xlYXIgYWxsIHRoZSBlbGVtZW50IGluIHBhZ2VTZWN0aW9uXG4gICAgY29uc3QgcGFnZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZVNlY3Rpb24nKTtcbiAgICBwYWdlU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcblxuICAgIHN3aXRjaCAoZWxlbSkge1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGRpc3BsYXlIb21lKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICBkaXNwbGF5TWVudSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgLy9kaXNwbGF5IGNvbnRhY3RcbiAgICAgICAgICAgIGRpc3BsYXlDb250YWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbi8vaG9tZSBiYW5uZXIgYnV0dG9uIGJyb3dzaW5nIGxvZ2ljXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVCdG4nKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7c3dpdGNoVGFicygnbWVudScpfSk7XG5cbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bicpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtzd2l0Y2hUYWJzKCdjb250YWN0Jyl9KTsiXSwic291cmNlUm9vdCI6IiJ9