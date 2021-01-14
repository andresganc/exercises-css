
addEventListener('DOMContentLoaded', () => {
    const menu__btn = document.querySelector('.menu__btn')

    if (menu__btn) {
        menu__btn.addEventListener('click', () => {
            const menu__ul = document.querySelector('.menu__ul');
            menu__ul.classList.toggle('show')
        })
    }
})