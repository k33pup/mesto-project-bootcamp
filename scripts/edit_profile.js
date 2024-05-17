const overlayEdit = document.querySelector('.popup_edit');
const openPopupEdit = document.querySelector('.profile__edit');
const closePopupEdit = document.querySelector('.popup_edit__close');

openPopupEdit.addEventListener('click', () => {
  overlayEdit.classList.add('popup_opened');
});

closePopupEdit.addEventListener('click', () => {
  overlayEdit.classList.remove('popup_opened');
});

const formEdit = document.querySelector('.popup_edit__form');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const saveEdit = document.querySelector('.popup_edit__save');

saveEdit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = formEdit.querySelector('.popup_edit__name').value;
  const description = formEdit.querySelector('.popup_edit__description').value;
  profileName.textContent = name;
  profileDescription.textContent = description;
  overlayEdit.classList.remove('popup_opened');
});

