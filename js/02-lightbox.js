import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const elements = []

galleryItems.forEach(item => {
	const galleryItem = `
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}"
    alt="${item.description}"/>
    </a>`;

	elements.push(galleryItem);	
})

gallery.insertAdjacentHTML('beforeend', elements);

new SimpleLightbox('.gallery a', {
	captionDelay: 250,
})