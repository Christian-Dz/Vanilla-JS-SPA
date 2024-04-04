

export function SearchForm(){
    const $form = document.createElement("form")
   
    $form.innerHTML =
    `
    <input name="search" type="search" placeholder="Search..."></input>
    `
    return $form
}