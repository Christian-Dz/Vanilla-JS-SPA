

export function SearchCard(props){
    let {id, title, _embedded} = props
    let slug = _embedded.self[0].slug
    let img = _embedded.self[0].featured_media_src_url
    let date = _embedded.self[0].date
    let dateFormat = new Date(date).toLocaleDateString()

    const $article = document.createElement("article")

    $article.innerHTML = 
    `
    <img src="${img}" alt="${title}" width="300" height="150">
    <h2>${title}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a href="#/${slug}" data-id="${id}">See Article</a>
    </p>
    `    
    return $article
}