const btnModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.box-modal');

btnModal.addEventListener('click', () => {
    modal.classList.add('on');
})
modal.addEventListener('click', () => {
    modal.classList.remove('on');
})

const btnMore = document.querySelector('.btn-more')
const snsList = document.querySelector('.sns-list')

btnMore.addEventListener('click', () => {
    snsList.classList.toggle('on')
})
