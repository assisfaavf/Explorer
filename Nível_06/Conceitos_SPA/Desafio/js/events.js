
const bgcolor = document.querySelector("body")

function home (){
  bgcolor.classList.add("home")
  bgcolor.classList.remove("universe")
  bgcolor.classList.remove("exploration")
}
function universe ( ) {
  bgcolor.classList.add("universe")
  bgcolor.classList.remove("home")
  bgcolor.classList.remove("exploration")

}

function exploration () {
  bgcolor.classList.remove("universe")
  bgcolor.classList.remove("home")
  bgcolor.classList.add("exploration")
}

export {home, universe, exploration}
