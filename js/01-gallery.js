import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox';
// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const elements = [];

galleryItems.forEach(item => {
	const galleryItem = `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}"
    data-source="${item.original}"alt="${item.description}"/>
    </a>
    </div>`;
	elements.push(galleryItem);
})

gallery.insertAdjacentHTML('beforeend', elements);

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return;
	}

    // const selectedImg = event.target.getAttribute('data-source')
	const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
    onShow: () => {
        window.addEventListener('keydown', onPressEsc);
    },
    onClose: () => {        
        window.removeEventListener('keydown', onPressEsc);
    }
    });

    const onPressEsc = event => {
        console.log(event.code);
        if (event.code === 'Escape') {
            console.log('Escape');
            instance.close();
        }
      };

    instance.show();
})