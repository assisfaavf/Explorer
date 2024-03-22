export class Router{
    routes = {}

    // Dentro da classe não precisa de function para declarar uma função, é necessário apenas o nome da função, () e {}
    add(routeName, page) {
        this.routes[routeName] = page

    }

    // Cria a função qie recebe o endereço ao clicar no botão
    route(event) {
        event = event || window.event;
        // Se não encontrar um evento usar o evento geral presente na página
        event.preventDefault();
    
        window.history.pushState({}, "", event.target.href);
    
        // É necessário utilizar o this para se referir a algo dentro da classe
        this.handle();
      }
    
      handle() {
        const pathname = window.location.pathname;
        // const { pathname } = window.location;
        // Forma diferente de pegar a propriedade pathname, melhor usar assim pricipalemnte se for necessário mais de uma propriedáde
    
        const route = this.routes[pathname] || this.routes[404];
    
        // Pega a rota do link que foi clicado e então passa todo o conteudo do seu html para dentro do elemento #app, fazenod assim o transporte de uma página inteira para dentro da página inicial, não necessitando de carregamento
        fetch(route)
          .then(data => data.text())
          .then(html => {
            document.querySelector('#app').innerHTML = html
          })
    
      }
}

