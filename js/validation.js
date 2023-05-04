const form = document.getElementById('form')

//*Name
const nombre = document.getElementById('name')
const nombreErrors = document.querySelector('.input_form_name_error')
const inputNombre = document.querySelector('.input_form_name')


//*Email
const mail = document.getElementById('email')
const emailErrors = document.querySelector('.input_form_email_error')
const inputEmail = document.querySelector('.input_form_email')

//*Password
const password = document.getElementById("password")
const passwordErrors = document.querySelector('.input_form_password_error')
const inputPassword = document.querySelector('.input_form_password')

function Validation(e){
    e.preventDefault()

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  

    if(nombre.value === ""){
        nombreErrors.classList.add('input_form_name_error--active')
        inputNombre.classList.add('input_form_name--active')
    }

    if(!regexEmail.test(mail.value || mail.value.length == "")){
        emailErrors.classList.add('input_form_email_error--active')
        inputEmail.classList.add('input_form_email--active')
    }

    if(password.value.length < 6){
        passwordErrors.classList.add('input_form_email_password--active')
        inputPassword.classList.add('input_form_password--active')
    }


}

form.addEventListener("submit" , Validation)