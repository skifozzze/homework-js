const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

window.addEventListener("keydown", onEscPress);

const galleryContainerEl = document.querySelector('.js-gallery');
const itemsMarkup = createGalleryMarkap(galleryItems);
const lightboxEl = document.querySelector('.js-lightbox');
const lightboxImgEl = document.querySelector('.lightbox__image');
const closeModalBtnEl = document.querySelector('[data-action="close-lightbox"]');
const backdropEl = document.querySelector('.lightbox__overlay')

galleryContainerEl.innerHTML = itemsMarkup;
galleryContainerEl.addEventListener('click', onGalleryItemClick);
closeModalBtnEl.addEventListener('click', onCloseModalBtnClick);
backdropEl.addEventListener('click', onBackdropClick)



function createGalleryMarkap(item) {
  return item.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a
       class="gallery__link"
       href="${original}"
      >
        <img
         class="gallery__image"
         loading="lazy"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
        />
      </a>
    </li>
    `;
  }).join('');
}

function onGalleryItemClick(evt) {
  const isItemSwatchEl = evt.target.classList.contains('gallery__image');
  
  if (!isItemSwatchEl) {
    return
  };

  const swatchEl = evt.target;  
  lightboxEl.classList.add('is-open');
  
  lightboxImgEl.src = swatchEl.dataset.source;
  lightboxImgEl.alt = swatchEl.alt;   
}

function onCloseModalBtnClick(evt) {
  lightboxEl.classList.remove('is-open');
  lightboxImgEl.src = '';
}

function onBackdropClick(evt) {  
  if (evt.currentTarget === evt.target) {    
    onCloseModalBtnClick();
  }
}

function onEscPress(evt) {
  const ESC_KEY_CODE = "Escape";  

  if (evt.code === ESC_KEY_CODE) {
    onCloseModalBtnClick();
  }
}