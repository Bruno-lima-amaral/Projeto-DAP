document.querySelector('.menuHamburguer').onclick = function () {
    let btn = document.querySelector('.menuHamburguer')
    let menu = document.querySelector('.wrapper')
    let itensMenu = document.querySelector('.wrapper ul')


    btn.classList.toggle('is-active')

    menu.classList.toggle('is-active')

    itensMenu.classList.toggle('is-active')

    return false

}

// Function para os clicks no menu

document.querySelector('.menu_link1').onclick = function (e) {
    let menu = document.querySelector('.wrapper')
    let btn = document.querySelector('.menuHamburguer')
    let itensMenu = document.querySelector('.wrapper ul')

    menu.classList.remove('is-active')

    btn.classList.remove('is-active')

    itensMenu.classList.remove('is-active')

    e.preventDefault()

}

document.querySelector('.menu_link2').onclick = function (e) {
    let menu = document.querySelector('.wrapper')
    let btn = document.querySelector('.menuHamburguer')
    let itensMenu = document.querySelector('.wrapper ul')

    menu.classList.remove('is-active')

    btn.classList.remove('is-active')

    itensMenu.classList.remove('is-active')

    e.preventDefault()

}

document.querySelector('.menu_link3').onclick = function (e) {
    let menu = document.querySelector('.wrapper')
    let btn = document.querySelector('.menuHamburguer')
    let itensMenu = document.querySelector('.wrapper ul')

    menu.classList.remove('is-active')

    btn.classList.remove('is-active')

    itensMenu.classList.remove('is-active')

    e.preventDefault()

}

document.querySelector('.menu_link4').onclick = function (e) {
    let menu = document.querySelector('.wrapper')
    let btn = document.querySelector('.menuHamburguer')
    let itensMenu = document.querySelector('.wrapper ul')

    menu.classList.remove('is-active')

    btn.classList.remove('is-active')

    itensMenu.classList.remove('is-active')

    e.preventDefault()

}


document.querySelector('#dia1').onclick = function (e) {
    let text1 = document.querySelector('.texto_edicao')
    
    let textDia = "Dia 11"
    let teste = text1
    
    teste.classList.add('show')
    teste.classList.toggle('ani_show')
    
    text1.textContent = textDia

    function resetandoAnimacao() {
        teste.classList.remove('ani_show')
        
    }

    setTimeout(resetandoAnimacao, 2000)
    e.preventDefault()


}

document.querySelector('#dia2').onclick = function (e) {
    let text1 = document.querySelector('.texto_edicao')
    
    let textDia = "Dia 12"
    let teste = text1
    
    teste.classList.add('show')
    teste.classList.toggle('ani_show')
    
    text1.textContent = textDia

    function resetandoAnimacao() {
        teste.classList.remove('ani_show')
        
    }
    setTimeout(resetandoAnimacao, 1000)
    
    e.preventDefault()

}

document.querySelector('#dia3').onclick = function (e) {
    let text1 = document.querySelector('.texto_edicao')
    
    let textDia = "Dia 13"
    let teste = text1
    
    teste.classList.add('show')
    teste.classList.toggle('ani_show')
    
    text1.textContent = textDia

    function resetandoAnimacao() {
        teste.classList.remove('ani_show')
        
    }
    setTimeout(resetandoAnimacao, 1000)
    
    e.preventDefault()

}

document.querySelector('#dia4').onclick = function (e) {
    let text1 = document.querySelector('.texto_edicao')
    
    let textDia = "Dia 14"
    let teste = text1
    
    teste.classList.add('show')
    teste.classList.toggle('ani_show')
    
    text1.textContent = textDia

    function resetandoAnimacao() {
        teste.classList.remove('ani_show')
        
    }
    setTimeout(resetandoAnimacao, 1000)
    
    e.preventDefault()

}

document.querySelector('#dia5').onclick = function (e) {
    let text1 = document.querySelector('.texto_edicao')
    
    let textDia = "Dia 15"
    let teste = text1
    
    teste.classList.add('show')
    teste.classList.toggle('ani_show')
    
    text1.textContent = textDia

    function resetandoAnimacao() {
        teste.classList.remove('ani_show')
        
    }
    setTimeout(resetandoAnimacao, 1000)
    
    e.preventDefault()

}

document.querySelector('#dia6').onclick = function (e) {
    let text1 = document.querySelector('.texto_edicao')
    
    let textDia = "Dia 16"
    let teste = text1
    
    teste.classList.add('show')
    teste.classList.toggle('ani_show')
    
    text1.textContent = textDia

    function resetandoAnimacao() {
        teste.classList.remove('ani_show')
        
    }
    setTimeout(resetandoAnimacao, 1000)
    
    e.preventDefault()

}

