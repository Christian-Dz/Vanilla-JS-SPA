

export function Loader(){
    const $loader = document.createElement("img")

    $loader.src = "app/assets/Double-Ring.svg"
    $loader.alt = "Loading..."
    $loader.classList = "loader"

    return $loader
}
