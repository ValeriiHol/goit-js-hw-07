import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'
console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const elements = []

galleryItems.forEach(item => {
	const galleryItem = document.createElement('div')
	galleryItem.className = 'gallery__item'
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = item.original
	const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = item.preview;
    galleryImage.setAttribute('data-source', item.original)
    galleryImage.alt = item.description;


	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	elements.push(galleryItem)
})

gallery.append(...elements)

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    // const selectedImg = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show()
    
    gallery.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			instance.close()
		}
	})
})