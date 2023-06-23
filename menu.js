const menu = document.querySelector('[data-menu]')
const menuList = menu.querySelectorAll('.catalog-nav__list');
const close = menu.querySelector('[data-close]')

const ACTIVE_CLASS = 'catalog-nav__item--active';

menu.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-button]')) {
        menu.classList.toggle('menu--active')
    }
})

close.addEventListener('click', (evt) => {
    menu.classList.remove('menu--active')
    menuList.forEach(list => {
        const allActiveItems = list.querySelectorAll('.catalog-nav__item--active');
        allActiveItems.forEach(el => el.classList.remove(ACTIVE_CLASS))
    })
    evt.stopPropagation()
})

menuList.forEach(list => {
    list.addEventListener('click', (evt)=> {
        const activeItem = evt.target.closest('li');
        activeItem.classList.add(ACTIVE_CLASS);
        const backButton = activeItem.querySelector('[data-back]')
        backButton.addEventListener('click', () => activeItem.classList.remove(ACTIVE_CLASS))
    })
})