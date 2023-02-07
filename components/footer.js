// export function createFooter(data) {
import { createContainer, createFooterItemLink, createFooterList } from "../pages/view.js";
export function render(data) {
    console.log(data.results);
    // const footer = document.getElementById('footer');
    let container = createContainer()
    let footerList = createFooterList()
    let footerLogo = document.createElement('img')
    footerLogo.src = './img/logo-star-wars.png';
    footerLogo.alt = 'Star Wars Logo';
    footerLogo.width = '20%';
    // footerLogo.height = '100%';
    footerLogo.classList.add('footer__logo');
    container.classList.add('flex-raw')
    let itemId = []
    for (let i = 1; i <= data.results.length; i++) {
        // console.log(i)
        itemId.push(i)
    }
    for (let item = 0; item < data.results.length; item++) {
        let footerItem = createFooterItemLink(itemId[item], data.results[item].episode_id)
        footerList.append(footerItem)
    }
    container.append(footerLogo, footerList)
    // footer.append(container)
    return container
}
