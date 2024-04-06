
export function PostCard(props){
    let {date, title, slug, featured_media_src_url} = props
    let dateFormat = new Date(date).toLocaleString()
    let urlPoster = featured_media_src_url || "app/assets/desktop-pc.png"

    const $article = document.createElement("article")

    $article.innerHTML = 
    `
    <img src="${urlPoster}" alt="${title.rendered}" width="300" height="200">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a href="#/${slug}">See Article</a>
    </p>
    `    
    return $article
}