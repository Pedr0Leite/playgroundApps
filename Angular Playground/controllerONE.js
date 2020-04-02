var myApp = angular.module('myApp', []);

myApp.controller("HelloWorldCtrl", function($scope) {  
    $scope.message="Hello World" 
    } );


myApp.controller('SpicyController', ['$scope', function($scope) {
        $scope.spice = 'very';
    
        $scope.chiliSpicy = function() {
            $scope.spice = 'chili';
        };
    
        $scope.jalapenoSpicy = function() {
            $scope.spice = 'jalapeño';
        };
   }]);

myApp.controller('httpController', function($scope, $http) {
    $http.get('https://corona-stats.online?top=25')
    .then(function successCallback(response) {
      $scope.coronaInfo = response.data;
    })});