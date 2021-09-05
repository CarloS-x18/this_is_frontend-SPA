import view from '../views/interactivity.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    return divElement;
}