
import { Header } from "./components/Header.js"
import { Loader } from "./components/Loader.js"
import { Main } from "./components/Main.js"
import { Router } from "./components/Router.js"

export function App() {
  const $root = document.getElementById("root")

  $root.innerHTML = null
  $root.append(Header())
  $root.append(Main())
  $root.append(Loader())

  Router()
}
