import api from "../helpers/wp_api.js"
import { ajax } from "../helpers/ajax.js"
import { PostCard } from "./PostCard.js"
import { Post } from "./Post.js"

export async function Router(){
  const d = document
  const w = window
  const $main = d.getElementById("main")

  let {hash} = location

  $main.innerHTML = null

  if(!hash || hash === "#/"){

    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts)  
        const fragment = d.createDocumentFragment();
  
        posts.forEach(post => fragment.append(PostCard(post)));

        $main.append(fragment);
      }
    })
    
  } else if (hash.includes("#/search")){
  $main.innerHTML = `<h2>Search Section</h2>`

  } else if (hash === "#/contact"){
  $main.innerHTML = `<h2>Contact Section</h2>`

  } else {
  $main.innerHTML = `<h2>Post Content</h2>`

  await ajax({
    url: `${api.POST}?slug=${hash.slice(2)}`,
    cbSuccess: (post) => {
      console.log(post)  

      $main.append(Post(post));

    }
  })
  }
  
  d.querySelector(".loader").style.display = "none";
}