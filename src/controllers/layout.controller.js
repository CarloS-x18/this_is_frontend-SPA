import view from '../views/layout.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    return divElement;
}