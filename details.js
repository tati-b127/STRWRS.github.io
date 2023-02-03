import { createContainer, createDetails, createSectionTitle, createListSection, createItemSection, createSectionBlock } from "./view.js";
export function render(data) {

    let container = createContainer()
    let blockDetails = createDetails(data.title, data.episode_id, data.director, data.producer, data.release_date, data.opening_crawl)
    let sectionBlockPlanets = createSectionBlock()
    let sectionBlockSpecies = createSectionBlock()
    let sectionListPlanet = createListSection()
    let sectionListSpecies = createListSection()
    let planetTitle = createSectionTitle('Planet')
    let speciesTitle = createSectionTitle('Species')

    function fetchJson(url) {
        return fetch(url).then(response => response.json())
    }
    // function getSectionData(urlPlanet, urlSpecies) {
    //     return Promise.all([
    //         fetchJson(urlPlanet),
    //         fetchJson(urlSpecies)
    //     ]).then(([planet, species]) => {
    //         return {
    //             planet,
    //             species
    //         }
    //     })
    // }
    function getSectionData(url) {
        return Promise.all([
            fetchJson(url)
        ]).then(arr => {
            return {
                arr
            }
        })
    }

    let newF = getSectionData('https://swapi.dev/api/species')
    newF.then(res => console.log(res))



    for (let item of data.planets) {
        console.log(item);
        let planet = getSectionData(item)
        planet.then(resolve => {
            console.log(resolve.arr[0].name);
            let itemPlanet = createItemSection(resolve.arr[0].name)
            sectionListPlanet.append(itemPlanet)
        })
    }
    for (let item of data.species) {
        let species = getSectionData(item)
        species.then(resolve => {
            let itemSpecies = createItemSection(resolve.arr[0].name)
            sectionListSpecies.append(itemSpecies)
        })
    }
    sectionBlockPlanets.append(planetTitle, sectionListPlanet)
    sectionBlockSpecies.append(speciesTitle, sectionListSpecies)

    blockDetails.episodeBlockDescr.append(sectionBlockPlanets, sectionBlockSpecies)

    container.append(blockDetails.blockDetails)
    console.log(container)
    return container
}