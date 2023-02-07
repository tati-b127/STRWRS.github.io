export function preloader() {
    const preloader = document.createElement('div')
    const loader = document.createElement('div')
    preloader.classList.add('preloader')
    preloader.classList.add('visible')
    loader.id = 'loader';
    preloader.append(loader)
    return preloader
}