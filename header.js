export function createHeader() {
    const header = document.createElement('header');
    let container = document.createElement('div');
    let headerLink = document.createElement('a');
    let logoImg = document.createElement('img');

    header.classList.add('header', 'flex-column-center');
    container.classList.add('container');
    logoImg.classList.add('header__img');
    headerLink.classList.add('header__logo');

    headerLink.href = 'index.html';
    logoImg.src = './img/logo-star-wars.png';
    logoImg.alt = 'Star Wars Logo';
    // logoImg.width = '100%';
    // logoImg.height = 150;
    headerLink.append(logoImg)
    container.append(headerLink);
    header.append(container);
    return header;
}