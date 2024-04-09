import api from "../helpers/wp_api.js"
import { ajax } from "../helpers/ajax.js"
import { PostCard } from "./PostCard.js"
import { Post } from "./Post.js"
import { Header } from "./Header.js"
import { SearchCard } from "./SearchCard.js"


export async function Router(){
  const d = document
  const $main = d.getElementById("main")
  let {hash} = location

  $main.innerHTML = null

  if(!hash || hash === "#/"){ 

    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {

        const fragment = d.createDocumentFragment();
        posts.forEach(post => fragment.append(PostCard(post)));

        $main.append(fragment);
      }
    }) 

  } 
  
  
  
  
  else if (hash.includes("#/search")){

    const $newHeader = Header(true)
    const $existingHeader = document.querySelector("header")
    if ($existingHeader) {
        $existingHeader.replaceWith($newHeader)
    }

    let query = localStorage.getItem("wpSearch")

    if (!query) {
      d.querySelector(".loader").style.display = "none"
      return false
    }

    await ajax ({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search)
      
        if (search.length === 0){
          let $html = document.createElement("p")
          $html.innerHTML =
          `
          NO MATCHES WERE FOUND OF <mark>${query}</mark>
          `
          $main.append($html)

        } else {
          const fragment = d.createDocumentFragment();
          search.forEach(post => fragment.append(SearchCard(post)));
          $main.append(fragment)
        }
      }
    })

  } else if (hash === "#/contact"){
    $main.innerHTML = `<h2>Contact Section</h2>`

  } else {

    await ajax({
      url: `${api.POST}/?slug=${hash.slice(2)}`,
      cbSuccess: (post) => {
      console.log(post)  
  
      $main.append(Post(post));
      }
    })
  }

  d.querySelector(".loader").style.display = "none";

}

