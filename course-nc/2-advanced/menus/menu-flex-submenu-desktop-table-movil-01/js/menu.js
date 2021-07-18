
addEventListener('DOMContentLoaded', () => {
    const menu_btn = document.querySelector('.menu_btn')

    if (menu_btn) {
        menu_btn.addEventListener('click', () => {
            const menu_ul = document.querySelector('.menu_ul');
            menu_ul.classList.toggle('show')
        })
    }
})