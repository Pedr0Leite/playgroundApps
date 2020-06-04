(function () {
    var myApp = angular.module("myApp", ['ngRoute']);

    myApp.config(function($routeProvider){
        $routeProvider
        .when('/', {
            controller: 'controllerONE',
            templateUrl: 'views/insideHTML.html'
        })
    })
})();