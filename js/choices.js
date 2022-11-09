const element = document.querySelector('.gallery__filter');

const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    position: 'bottom',
});
