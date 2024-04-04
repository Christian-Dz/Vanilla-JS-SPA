import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js"
import {Title} from "./components/Title.js"
import {Header} from "./components/Header.js"
import {Loader} from "./components/Loader.js"


export function App (){
const d = document,
$root = d.getElementById("root")

$root.append(Header())
$root.append(Loader())

}