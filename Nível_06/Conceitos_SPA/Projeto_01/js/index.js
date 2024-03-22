import { Router } from "./router.js"

const router = new Router()
router.add('/',"pages/home.html")
router.add('/about', '/pages/about.html')
router.add('/contact', '/pages/contact.html')
router.add(404, '/pages/404.html')

  router.handle()

  // Resolvendo a possibilidade de se navegar voltando ou passando a página
  window.onpopstate = ( ) => router.handle()
  // Evitar que a função route não seja executada
  window.route = () => router.route()
