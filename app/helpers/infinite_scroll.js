import api from "./wp_api.js"
import { PostCard } from "../components/PostCard.js"
import { SearchCard } from "../components/SearchCard.js"
import { ajax } from "./ajax.js"


export async function infiniteScroll(){
    const d = document
    const w = window

    let query = localStorage.getItem("wpSearch")
    const $main = d.getElementById("main")
    let apiURL
    let Component

    w.addEventListener("scroll", async () => {
        let {scrollTop, clientHeight, scrollHeight} = d.documentElement
        let {hash} = w.location

        if (scrollTop + clientHeight >= scrollHeight){
            api.page++

            if (!hash || hash === "#/"){
                apiURL = `${api.POSTS}&page=${api.page}`
                Component = PostCard
            } else if (hash.includes("#/search")){
                apiURL = `${api.SEARCH}${query}&page=${api.page}`
                Component = SearchCard
            } else {
                return false
            }

            d.querySelector(".loader").style.display = "block"
            
            await ajax({
                url: apiURL,
                cbSuccess: (posts) => {
                    
                    const fragment = d.createDocumentFragment();
                    posts.forEach(post => fragment.append(Component(post)));

                    $main.append(fragment);

                    d.querySelector(".loader").style.display = "none"
                }
            })   
        }
    })
}