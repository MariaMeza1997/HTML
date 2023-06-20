const target = document.getElementById('target_button')
const modal = document.querySelector('.modal_example')
const buttonDelete = document.querySelector('.close_modal')

//*declaracion

const open = () =>{
    modal.classList.add('modal_example--active')
}

//*Expresion
var closeModal = function(){
    modal.classList.remove('modal_example--active')
}


target.addEventListener('click', open)
buttonDelete.addEventListener('click', closeModal)