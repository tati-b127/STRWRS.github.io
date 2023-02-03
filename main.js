import { createHeader } from "./header.js";
// import { createFooter } from './footer.js';

const cssPromises = {};

function loadResource(src) {
  //JS
  if (src.endsWith(".js")) {
    return import(src);
  }
  //CSS
  if (src.endsWith(".css")) {
    if (!cssPromises[src]) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = src;
      cssPromises[src] = new Promise((resolve) => {
        link.addEventListener("load", () => resolve());
      });
      document.head.append(link);
    }
    return cssPromises[src];
  }
  //server
  return fetch(src).then((res) => res.json());
}
const searchParams = new URLSearchParams(location.search);
const filmId = searchParams.get("filmId");
console.log(filmId);
const mainContainer = document.getElementById("main");
const footer = document.getElementById("footer");
let header = createHeader();
// let footer = createFooter()
mainContainer.before(header);
// mainContainer.after(footer)

function renderPage(moduleName, apiURL, css, container) {
  Promise.all([moduleName, apiURL, css].map((src) => loadResource(src))).then(
    ([pageModule, data]) => {
      console.log(container);
      // if (container === mainContainer) {
      //     mainContainer.innerHTML = ''
      // }
      container.append(pageModule.render(data));
    }
  );
}

if (!filmId) {
  renderPage(
    "./footer.js",
    // 'https://swapi.dev/api/',
    "https://swapi.dev/api/films",
    "./main.css",
    footer
  );
  renderPage(
    "./main-page.js",
    // 'https://swapi.dev/api/',
    "https://swapi.dev/api/films",
    "./main.css",
    mainContainer
  );
} else {
  renderPage(
    "./footer.js",
    // 'https://swapi.dev/api/',
    "https://swapi.dev/api/films",
    "./main.css",
    footer
  );
  renderPage(
    "./details.js",
    // 'https://swapi.dev/api/',
    `https://swapi.dev/api/films/${filmId}`,
    "./main.css",
    mainContainer
  );
}
//отмена перезагрузки

let allLinks = document.querySelectorAll('a')
console.log(allLinks)
allLinks.forEach(link  => {
    console.log(link)
    link.addEventListener('click', e => {
        e.preventDefault()
    })
})
