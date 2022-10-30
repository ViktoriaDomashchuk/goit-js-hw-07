import { galleryItems } from './gallery-items.js';

const listOfGallery = document.querySelector('.gallery');

const markup = galleryItems.map(({
    preview, original, description

}) => `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');
listOfGallery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});

