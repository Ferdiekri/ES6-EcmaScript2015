let Visualizer = window["ui-router-visualizer"].Visualizer;
const app = angular.module("myApp", ["ui.router"]);

app 
  .controller("inicioController", InicioController);

app.config([
  "$urlRouterProvider",
  "$stateProvider",
  ($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider) => {
    console.log("Entrando en la configuracion");

    $urlRouterProvider.when("", "/es6/inicio");
    $stateProvider
      .state("es6", {
        url: "/es6",
        abstract: true,
        template: "<div ui-view></div>"
      })
      .state("es6.inicio", {
        url: "/inicio",
        templateUrl: "views/inicio.html",
        controller: InicioController
      })
      .state("es6.ejemplos", { 
        url: "/ejemplos",
        templateUrl: "views/ejemplos.html"        
      })
      .state("es6.ejemplos.arrays", { 
        url: "^/arrays",
        templateUrl: "views/ejemplos/arrays.html"        
      })
      .state("es6.clases", { 
        url: "/clases",
        templateUrl: "views/ejemplos/clases.html"        
      })
      .state("es6.filtros", { 
        url: "/filtros",
        templateUrl: "views/ejemplos/filtros.html"        
      })
      .state("es6.arrow", { 
        url: "/arrow",
        templateUrl: "views/ejemplos/arrow.html"        
      })
      .state("es6.promesas", { 
        url: "/promesas",
        templateUrl: "views/ejemplos/promesas.html"        
      })
      .state("es6.variables", { 
        url: "/variables",
        templateUrl: "views/ejemplos/variables.html"        
      })
      .state("es6.leeme", { 
        url: "/leeme",
        templateUrl: "views/leeme.html"        
      });
      
  }
]);

app.run([
  "$uiRouter",
  $uiRouter => {
    const pluginInstance = $uiRouter.plugin(Visualizer);
  }
]);
