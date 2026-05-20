// Password Login
let btn = document.querySelector('#eye')
let pwd = document.querySelector('#pwd')

btn.addEventListener('click', function () {
    let content = document.querySelector('#eye')
    let ouvert = document.querySelector('.fa-eye')
    let fermer = document.querySelector('.fa-eye-slash')

    if (pwd.type == 'password') {
        pwd.type = 'text'
        let ajout = document.createElement('i')
        ajout.setAttribute('class', 'fa-solid fa-eye-slash')
        content.append(ajout)
        ouvert.remove()
    } else {
        pwd.type = 'password'
        let ajout = document.createElement('i')
        ajout.setAttribute('class', 'fa-solid fa-eye')
        content.append(ajout)
        fermer.remove()
    }
})