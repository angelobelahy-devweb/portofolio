
function changeImage(e) {
    let oldImage = document.getElementById("oldImage");
    let file = e.target.files[0];
    let image = document.getElementById("image");
    if (!file) {
        // Si aucun fichier sélectionné → revenir à l’ancienne image
        image.style.display = "none";
        oldImage.style.display = "block";
        image.src = "";
        return;
    } else {
        image.src = URL.createObjectURL(e.target.files[0]);
        image.style.display = "block";
        oldImage.style.display = "none";
        image.style.width = "100%"
        image.style.height = "100%"
        image.style.objectFit = "contain"
    }
}
function changeImage1(e) {
    let oldImage = document.getElementById("oldImage1");
    let file = e.target.files[0];
    let image = document.getElementById("image1");
    if (!file) {
        // Si aucun fichier sélectionné → revenir à l’ancienne image
        image.style.display = "none";
        oldImage.style.display = "block";
        image.src = "";
        return;
    } else {
        image.src = URL.createObjectURL(e.target.files[0]);
        image.style.display = "block";
        oldImage.style.display = "none";
        image.style.width = "100%"
        image.style.height = "100%"
        image.style.objectFit = "contain"
    }
}

let btn = document.querySelector('#eye')
let pwd = document.querySelector('#pwd')
let confpwd = document.querySelector('#confpwd')

btn.addEventListener('click', function () {
    let content = document.querySelector('#eye')
    let ouvert = document.querySelector('.fa-eye')
    let fermer = document.querySelector('.fa-eye-slash')
    let texte = document.querySelector('.page-login-description')

    if (pwd.type == 'password' || confpwd == 'password') {
        pwd.type = 'text'
        confpwd.type = 'text'
        let ajout = document.createElement('i')
        ajout.setAttribute('class', 'fa-solid fa-eye-slash')
        content.insertAdjacentElement("beforebegin", ajout)
        ouvert.remove()
        texte.textContent = 'Masquez le mot de passe'
    } else {
        pwd.type = 'password'
        confpwd.type = 'password'
        let ajout = document.createElement('i')
        ajout.setAttribute('class', 'fa-solid fa-eye')
        content.insertAdjacentElement("beforebegin", ajout)
        fermer.remove()
        texte.textContent = 'Affichez le mot de passe'
    }
})