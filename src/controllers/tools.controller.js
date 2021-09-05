import view from '../views/tools.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    return divElement;
}