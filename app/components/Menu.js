

export function Menu(){
    const $menu = document.createElement("nav")
    $menu.innerHTML =
    `
    <a href="#/">Menu</a>
    <a href="#/search">Search</a>
    `
    return $menu
}