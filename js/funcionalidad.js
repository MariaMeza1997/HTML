const button = document.querySelector('.landing_page_box_one')
const modal = document.querySelector('.landing_page_modal')
const deleteModal = document.querySelector('.delete')

function abrir () {

    modal.classList.toggle('landing_page_modal--active')

}

function closeModal () {

    modal.classList.remove('landing_page_modal--active')

}

deleteModal.addEventListener('dblclick', closeModal )
button.addEventListener('click', abrir)