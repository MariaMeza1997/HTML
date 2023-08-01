const form = document.getElementById('form')

const nombre = document.getElementById('name')
const nombre_error= document.getElementById('name_error')

const mail = document.getElementById('email')
const mail_error= document.getElementById('email_error')

const phone = document.getElementById('phone')
const phone_error= document.getElementById('phone_error')

const objet = document.getElementById('object')
const object_error= document.getElementById('object_error')


function Validation(e){
    e.preventDefault()
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombre.value == "" ){
        nombre.classList.add("input_form--errors")
        nombre_error.classList.add('form_error--active')
    }

    if(!regexEmail.test(mail.value || mail.value.length == "")){
        mail.classList.add ('input_form--errors')
        mail_error.classList.add('form_error--active')
    }
}


form.addEventListener("submit", Validation)