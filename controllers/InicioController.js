var InicioController = (function () {
    function InicioController($scope) {
        this.$scope = $scope;
        console.debug('InicioController constructor');
        $scope.vm = this;
        $scope.vm.titulo = "ES6 - EcmaScript 2015";
        $scope.vm.piloto = new Piloto();
        $scope.vm.piloto.nombre = "sito ponds";
    }
    InicioController.$inject = ["$scope"];
    return InicioController;
}());
//# sourceMappingURL=InicioController.js.map