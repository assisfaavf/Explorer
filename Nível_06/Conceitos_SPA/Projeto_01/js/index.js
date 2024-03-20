const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    404: "/pages/404.html",
  };

  function route(event) {
    event = event || window.event;
    // Se não encontrar um evento usar o evento geral presente na página
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    handle();
  }

  function handle() {
    const pathname = window.location.pathname;
    // const { pathname } = window.location;
    // Forma diferente de pegar a propriedade pathname, melhor usar assim pricipalemnte se for necessário mais de uma propriedáde

    const route = routes[pathname] || routes[404];

    // Pega a rota do link que foi clicado e então passa todo o conteudo do seu html para dentro do elemento #app, fazenod assim o transporte de uma página inteira para dentro da página inicial, não necessitando de carregamento
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })

  }

  handle()

  // Resolvendo a possibilidade de se navegar voltando ou passando a página
  window.onpopstate = ( ) => handle()
//   Evitar que a função route não seja executada
  window.route = () => route()
