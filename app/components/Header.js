import { Title } from "./Title.js"
import { SearchForm } from "./SearchForm.js"
import { Menu } from "./Menu.js"


export function Header(){
    const $header = document.createElement("header")
    $header.append(Title())
    $header.append(Menu())
    $header.append(SearchForm())

    return $header
}