

export function Menu(){
    const $menu = document.createElement("nav")
    $menu.innerHTML =
    `
    <a href="#/">Menu</a>
    <a href="#/search">Search</a>
    <a href="#/contact">Contact</a>
    `
    return $menu
}