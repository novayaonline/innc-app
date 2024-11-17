export function scrollToSec(e) {
    e.preventDefault()
    let element = e.target.getAttribute('href')
    let toSection = document.querySelector(element).offsetTop

    window.scroll({
        top: toSection - 100,
        behavior: "smooth",
    })
}
