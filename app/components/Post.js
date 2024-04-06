


export function Post(props){
    let { content, date, title } = props[0]
    let dateFormat = new Date(date).toLocaleString()

    const $section = document.createElement("section")
    $section.classList = "post-page"

    $section.innerHTML =
    `
   <aside>
   <h2>${title.rendered}</h2>
   <time datetime="${date}">${dateFormat}</time>
   </aside>
   <hr>
   <article>${content.rendered}</article>
    `
    return $section

}