

export function SearchForm() {
    const d = document;
    const $form = d.createElement("form");

    $form.innerHTML = `
        <input class="search-form" name="search" type="search" autocomplete="off" placeholder="Search..."></input>
    `;
    
    const $input = $form.querySelector(".search-form")

    if (location.hash.includes("#/search")){
        $input.value = localStorage.getItem("wpSearch")
    }

    d.addEventListener("search", e => {
        if(!e.target.matches("input[type='search']")) return false
        if(!e.target.value) localStorage.removeItem("wpSearch")
    })


    $form.addEventListener("submit", e => {
        e.preventDefault();
        const searchValue = $input.value.toLowerCase();

        if (searchValue) {
            localStorage.setItem("wpSearch", searchValue);
            location.hash = `#/search?search=${searchValue}`;
        } 
    });

    return $form;
}