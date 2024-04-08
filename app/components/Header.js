import { Title } from "./Title.js"
import { SearchForm } from "./SearchForm.js"
import { Menu } from "./Menu.js"


export function Header(includeSearchForm = false) {
    const $header = document.createElement("header")
    $header.append(Title())
    $header.append(Menu())
    
    // Agrega el SearchForm solo si includeSearchForm es verdadero
    if (includeSearchForm) {
        $header.append(SearchForm())
    }

    return $header
}