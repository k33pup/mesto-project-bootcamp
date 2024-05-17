const likeListen = (element) => {
  element.addEventListener('click', (evt) => {
    const card = evt.target;
    card.classList.toggle('element__like_active')
  })
}

const likeBttns = document.querySelectorAll('.element__like');
likeBttns.forEach(likeListen);
