const image = document.querySelector('.product__images-main');
const popupImg = document.querySelector('.image-popup');

const photo = document.querySelector('.image-popup__photo');
const popup = document.querySelector('.popup');

image.addEventListener('click', () => {
  photo.src = image.src;
  openPopup(popupImg);
});

const openPopup = (popups) => {
  popups.classList.add('popup_opened');
  window.addEventListener('keydown', closeByEscape);
};
const closePopup = (popups) => {
  popups.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeByEscape);
};

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

popup.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(popup);
  }
});
