import { galleryItems } from './gallery-items.js';
// Change code below this line
const listOfGallery = document.querySelector('.gallery');

const markup = galleryItems.map(({
    preview, original, description

}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');


listOfGallery.insertAdjacentHTML('beforeend', markup);
listOfGallery.addEventListener('click', onOpenModal);
listOfGallery.addEventListener('keydown', onCloseModal);

let instance;

function onOpenModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  
  instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
  instance.show();
}

function onCloseModal(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}

