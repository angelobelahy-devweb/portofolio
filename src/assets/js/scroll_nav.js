// Scroll navigation
let nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
    // if (window.scrollY > 100) {
    //     nav.style.backgroundColor = '#fbfbfbde'
    // } else {
    //     nav.style.backgroundColor = 'transparent'
    // }
    if (window.innerWidth < 768) {
        nav.style.backgroundColor = 'transparent';
    } else {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = '#fbfbfbde'
        } else {
            nav.style.backgroundColor = 'transparent'
        }
    }
})