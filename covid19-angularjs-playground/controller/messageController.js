(function(){
    var HelloWorldCtrl =  function ($scope) {
        $scope.message = "Welcome to COVID-19 Information World vs specific Country";
    };
})();


angular.module("myApp").factory('HelloWorldCtrl', ['$scope', HelloWorldCtrl]);