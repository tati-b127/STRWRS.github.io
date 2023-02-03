export function createLinkItem(title, itemId, episodeId) {
    let menuCard = document.createElement('div');
    let menuItem = document.createElement('li');
    let cardLink = document.createElement('a');
    let cardImg = document.createElement('img');
    menuItem.classList.add('menu__item');
    menuCard.classList.add('menu__card', 'card');
    cardLink.classList.add('card__link');
    cardImg.classList.add('card__img');

    cardLink.textContent = title;
    //proverit ssilky
    cardLink.href = `?filmId=${itemId}`;
    console.log(cardLink.href);
    cardImg.src = `./img/episode-${episodeId}.jpg`;
    cardImg.alt = `Star Wars Episode ${title}`;

    menuCard.append(cardImg, cardLink);
    menuItem.append(menuCard)
    return menuItem
}
export function createListItems() {
    let menuList = document.createElement('ul')
    menuList.classList.add('menu__list', 'grid')
    return menuList
}
export function createContainer() {
    let container = document.createElement('div');
    container.classList.add('container')
    return container
}
export function createMainMenu() {
    let menu = document.createElement('div');
    menu.classList.add('menu')
    return menu
}
export function createFooterList() {
    let footerList = document.createElement('ul');
    footerList.classList.add('footer__list', 'flex-raw', 'justify-end')
    return footerList
}
export function createFooterItemLink(item, episodeId) {
    let footerLink = document.createElement('a');
    let footerItem = document.createElement('li');
    footerLink.classList.add('footer__link')
    footerItem.classList.add('footer__item')
    footerLink.textContent = `Episode ${episodeId}`;
    //proverit ssilky
    footerLink.href = `?filmId=${item}`;

    footerItem.append(footerLink)
    return footerItem
}
export function createDetails(title, episodeId, director, producer, date, openingCrawl) {
    let blockDetails = document.createElement('div');
    blockDetails.classList.add('episode', 'flex-raw', 'align-start')

    let episodeBlockImg = document.createElement('div');
    episodeBlockImg.classList.add('episode__block', 'episode__block_img', 'flex-column-center')

    let episodeBlockDescr = document.createElement('div')
    episodeBlockDescr.classList.add('episode__block', 'episode__block_descr', 'flex-column-start')


    let img = document.createElement('img');
    img.classList.add('episode__img')
    img.src = `./img/episode-${episodeId}.jpg`
    img.alt = `Episode ${episodeId}`

    let linkBack = document.createElement('a')
    linkBack.classList.add('episode__btn-home')
    linkBack.href = 'index.html'
    linkBack.textContent = 'BACK TO EPISODES'

    let titleBlock = document.createElement('h1')
    titleBlock.classList.add('episode__title')
    titleBlock.textContent = `Episode ${episodeId}`

    let subtitle = document.createElement('h2')
    subtitle.classList.add('episode__subtitle')
    subtitle.textContent = title

    let description = document.createElement('p')
    description.classList.add('episode__description')
    description.textContent = openingCrawl

    let aboutBlock = document.createElement('div')
    aboutBlock.classList.add('episode__about')

    let attrBlock = document.createElement('div')
    attrBlock.classList.add('episode__attr', 'flex-raw', 'justify-start')

    let directorBlock = createAttrList('Director', director)
    let produserBlock = createAttrList('Producer', producer)
    let dateBlock = createAttrList('Release date', date)

    aboutBlock.append(directorBlock, produserBlock, dateBlock)
    episodeBlockImg.append(img, linkBack)
    episodeBlockDescr.append(titleBlock, subtitle, aboutBlock, description)
    blockDetails.append(episodeBlockImg, episodeBlockDescr)
    return {
        blockDetails,
        episodeBlockDescr
    }

}
export function createSectionBlock() {
    let sectionBlock = document.createElement('div')
    sectionBlock.classList.add('episode__section', 'flex-column-start', 'section')
    return sectionBlock
}
export function createSectionTitle(section) {
    let sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section__title')
    sectionTitle.textContent = section
    return sectionTitle
}
export function createListSection() {
    let list = document.createElement('ul');
    list.classList.add('section__list', 'flex-raw', 'align-start', 'justify-start')
    return list
}
export function createItemSection(name) {
    let item = document.createElement('li')
    item.classList.add('section__item', 'flex-column-center')
    let itemImg = document.createElement('img')
    itemImg.classList.add('section__img')
    itemImg.alt = name
    // itemImg.src = `./img/${name}.png`
    itemImg.src = `./img/${name}.png`
    itemImg.onerror = function () {
        itemImg.src = `./img/default.png`
    };
    let itemName = document.createElement('h3')
    itemName.classList.add('section__name')
    itemName.textContent = name
    item.append(itemImg, itemName)
    return item
}
export function createAttrList(attr, value) {
    let attrBlock = document.createElement('div')
    attrBlock.classList.add('episode__attr', 'flex-raw', 'justify-start')
    let attrTitle = document.createElement('h3')
    attrTitle.classList.add('episode__attr-title')
    attrTitle.textContent = attr
    let attrName = document.createElement('h3')
    attrName.classList.add('episode__attr-name')
    attrName.textContent = value
    attrBlock.append(attrTitle, attrName)
    return attrBlock
}