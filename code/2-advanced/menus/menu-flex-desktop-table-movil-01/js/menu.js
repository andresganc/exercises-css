
addEventListener('DOMContentLoaded', () => {
    const nav_btn = document.querySelector('.nav_btn')

    if (nav_btn) {
        nav_btn.addEventListener('click', () => {
            const nav_menu = document.querySelector('.nav_menu');
            nav_menu.classList.toggle('show')
        })
    }
})