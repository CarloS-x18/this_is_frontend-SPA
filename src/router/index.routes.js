import { pages } from "../controllers";

const main = document.getElementById('root');

const router = route => {

    main.innerHTML = '';

    switch (route) {
        case '#/': 
            return main.appendChild(pages.Home());
        case '#/layout': 
            return main.appendChild(pages.Layout());
        case '#/interactivity':
            return main.appendChild(pages.Interactivity());
        case '#/tools':
            return main.appendChild(pages.Tools());
    }
}

export { router };