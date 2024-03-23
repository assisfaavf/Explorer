import { Router } from "./router.js";
import {exploration, home, universe} from "./events.js"

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

const pathname = window.location.pathname;

console.log(pathname)

if(pathname == "/"){
  home()
}else if(pathname == "/exploration"){
  exploration()
}else if(pathname == "/universe"){
  universe()
}
