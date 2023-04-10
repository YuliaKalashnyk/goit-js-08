// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const listItemMarkup = createListGalery(galleryItems);

gallery.insertAdjacentHTML('beforeend', listItemMarkup);

function createListGalery (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href = '${original}';
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
      }).join('');
};

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  

