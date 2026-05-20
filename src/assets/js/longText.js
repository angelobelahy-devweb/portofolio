let text1 = document.querySelectorAll('.content-paragraph')
text1.forEach(e => {

    let text2 = e.innerText.split('')
    let longeur = text2.length
    if (longeur >= 40) {
        let text3 = text2.slice(0, 40)
        e.innerHTML = text3.join('').concat('...')
    }
})