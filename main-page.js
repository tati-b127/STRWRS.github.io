import { createListItems, createLinkItem, createContainer, createMainMenu } from "./view.js";

export function render(data) {

    console.log(data);
    console.log(data.results);

    let container = createContainer()
    let menu = createMainMenu()
    let list = createListItems()

    let itemId = []
    for (let i = 1; i <= data.results.length; i++) {
        console.log(i)
        itemId.push(i)
    }
    for (let item = 0; item < data.results.length; item++) {
        console.log(data.results[item])
        let card = createLinkItem(data.results[item].title, itemId[item], data.results[item].episode_id)
        list.append(card)
    }
    menu.append(list)
    container.append(menu)
    return container
}