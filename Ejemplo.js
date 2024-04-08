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






let query = localStorage.getItem("")

if (!query) return false

await ajax ({
  url: `${api.SEARCH}${query}`,
  cbSuccess: (search) => {
  console.log(search)  
  }
})






export function SearchForm(){
  const d = document
  const $form = d.createElement("form")
 
  $form.innerHTML =
  `
  <input class="search-form" name="search" type="search" autocomplete="off" placeholder="Search..."></input>
  `
  d.addEventListener("search", e => {
      if(!e.target.matches("input[type='search']")) return false
      if(!e.target.value) localStorage.removeItem("wpSearch")
  })

  d.addEventListener("submit", e => {
      if(!e.target.matches(".search-form")) return false            // add .matches to resume
 
      e.preventDefault()

      localStorage.setItem("wpSearch", e.target.search.value)
      
      location.hash = `#/search?search=${e.target.search.value.toLowerCase()}`
  })

  return $form
}