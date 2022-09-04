const burger = document.querySelector('.burger-btn')
const burgerClose = document.querySelector('.menu-close-icon')
const menuShown = document.querySelector('.menu-shown')
const menuMobile = document.querySelector('.mobile-menu')

// burger.addEventListener('click',()=>{
//     menu.classList.toggle('menu-shown')
// })
//
// burgerClose.addEventListener('click',() =>{
//     menu.classList.toggle('menu-shown')
//
// })

burger.addEventListener('click', () => {
        menuMobile.hasAttribute('data-visible')
            ? burger.setAttribute('aria-expanded', false)
            : burger.setAttribute('aria-expanded', true)
        menuMobile.toggleAttribute('data-visible')
    }
)
burgerClose.addEventListener('click', () => {
        menuMobile.hasAttribute('data-visible')
            ? burger.setAttribute('aria-expanded', false)
            : burger.setAttribute('aria-expanded', true)
        menuMobile.toggleAttribute('data-visible')
    }
)