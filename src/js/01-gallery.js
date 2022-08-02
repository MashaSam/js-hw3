import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listGallery = document.querySelector('.gallery');

const divCardMarcup = galleryMarcup(galleryItems);
listGallery.insertAdjacentHTML('beforeend', divCardMarcup);
function galleryMarcup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
<li>
  <a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>
        `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
