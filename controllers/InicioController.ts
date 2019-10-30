interface IInicioControllerScope extends ng.IScope {
  vm: InicioController;
}
class InicioController implements ng.IController {
 
 
  public titulo: string; 
  public piloto: Piloto;

  public static $inject = ["$scope"];

  constructor(private $scope: IInicioControllerScope) {

    console.debug('InicioController constructor');
    $scope.vm = this;

    $scope.vm.titulo = "ES6 - EcmaScript 2015";
    $scope.vm.piloto = new Piloto();
  
    $scope.vm.piloto.nombre = "sito ponds" ;   // llamamos al setter

  }
}
