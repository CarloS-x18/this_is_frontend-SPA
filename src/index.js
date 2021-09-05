// styles
import './sass/style.scss';

// images
import './assets/arrow.png';
import './assets/logo.png';
import './assets/github-icon.png';
import './assets/twitter-icon.png';
import './assets/youtube-icon.png';

// router
import { router } from './router/index.routes';

// Variables
const headerContent = document.querySelector('.header');
const mainContent = document.querySelector('.main');
const buttonToggle = document.querySelector('#button-arrow');
const logo = document.querySelector('.logo');

buttonToggle.addEventListener('click', () => {

    headerContent.classList.add('slide');
    mainContent.classList.add('show-main');

    headerContent.classList.remove('show-header');
    mainContent.classList.remove('slide-main');

});

logo.addEventListener('click', () => {

    headerContent.classList.add('show-header');
    mainContent.classList.add('slide-main');

    headerContent.classList.remove('slide');
    mainContent.classList.remove('show-main');

});

router(window.location.hash);

// Routes Function 
window.addEventListener('hashchange', () => {
    router(window.location.hash);
})