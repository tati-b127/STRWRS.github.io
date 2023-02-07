import { createHeader } from "./components/header.js";
import { preloader } from "./components/preloader.js";

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
const preloaderView = preloader()
const mainContainer = document.getElementById("main");
const footer = document.getElementById("footer");
let header = createHeader();
document.body.append(preloaderView)
mainContainer.before(header);

function renderPage(moduleName, apiURL, css, container) {
  Promise.all([moduleName, apiURL, css].map((src) => loadResource(src))).then(
    ([pageModule, data]) => {
      // window.scrollTo({ top: 0, behavior: 'smooth' })
      console.log('load....');
      preloaderView.classList.add('visible');
      container.innerHTML = '';
      container.append(pageModule.render(data));
      console.log('complete loading...')
      preloaderView.classList.remove('visible');
    }
  );
}
export function changeRender() {
  const searchParams = new URLSearchParams(location.search);
  const filmId = searchParams.get("filmId");
  console.log(filmId);

  if (!filmId) {
    renderPage(
      "./components/footer.js",
      "https://swapi.dev/api/films",
      "./style/main.css",
      footer
    );
    renderPage(
      "./pages/main-page.js",
      "https://swapi.dev/api/films",
      "./style/main.css",
      mainContainer
    );
  } else {
    renderPage(
      "./components/footer.js",
      "https://swapi.dev/api/films",
      "./style/main.css",
      footer
    );
    renderPage(
      "./pages/details.js",
      `https://swapi.dev/api/films/${filmId}`,
      "./style/main.css",
      mainContainer
    );
  }
}
changeRender()
window.addEventListener('popstate', changeRender)
