// VARIABLES
let bloc = document.querySelector('.pages-div-fixed-button-login-bloc')
let login = document.querySelector('.pages-div-fixed-button-login')
let pageLogin = document.querySelector('.pages-div-login')
let register = document.querySelector('.pages-div-fixed-button-register')
let pageRegister = document.querySelector('.pages-div-register')
let btnRegister = document.querySelector('#btnRegister')
let btnLogin = document.querySelector('#btnLogin')

// ACTIONS LOGIN
login.addEventListener('click', () => {
    bloc.style.position = "absolute" 
    bloc.style.top = "0"
    pageRegister.style.position = "absolute" 
    pageRegister.style.left = "-400%"
    pageLogin.style.position = "relative" 
    pageLogin.style.left = "0"
    pageLogin.style.transition = "1s"
})
btnLogin.addEventListener('click', () => {
    bloc.style.position = "absolute" 
    bloc.style.top = "0"
    pageRegister.style.position = "absolute" 
    pageRegister.style.left = "-400%"
    pageLogin.style.position = "relative" 
    pageLogin.style.left = "1rem"
    pageLogin.style.transition = "1s"
})
// ACTIONS REGISTER
register.addEventListener('click', () => {
    bloc.style.position = "absolute" 
    bloc.style.top = "3rem"
    pageRegister.style.position = "relative" 
    pageRegister.style.left = "0"
    pageLogin.style.position = "absolute" 
    pageLogin.style.left = "-400%"
    pageRegister.style.transition = "1s"
})
btnRegister.addEventListener('click', () => {
    bloc.style.position = "absolute" 
    bloc.style.top = "3rem"
    pageRegister.style.position = "relative" 
    pageRegister.style.left = "0"
    pageLogin.style.position = "absolute" 
    pageLogin.style.left = "-400%"
    pageRegister.style.transition = "1s"
})

