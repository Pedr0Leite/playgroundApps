var myApp = angular.module('myApp', []);

myApp.controller("HelloWorldCtrl", function($scope) {  
    $scope.message="Welcome to Corona Information about the world"; 
    } );

//Option One - not working
// myApp.controller('inputController', function($scope) {
//     $scope.country = "";
//     $scope.parameters = [];
//     $scope.submit = function (country) {
//         if($scope.parameters == []){
//             $scope.parameters.push(country);
//             globalValue.push(country);
            
//         }else{
//             $scope.parameters.shift();
//             globalValue.shift()
//             $scope.parameters.push(country);
//             globalValue.push(country);
//         }
//     }
//   });

//   myApp.controller('httpController', function($scope, $http) {
//     var URL = "https://corona-stats.online/";
//     $scope.value =  $scope.$parent.parameters;
//     $http.get(URL + $scope.value)
//     .then(function successCallback(response) {
//     $scope.coronaInfo = response.data;
//     })
//   });
//------------------------------------
//Option Two - Best solution
myApp.controller('mixController', ['$scope', '$http', function($scope, $http) {
$scope.country = "";
$scope.parameters = [];
$scope.submit = function (country) {
    if($scope.parameters == []){
        $scope.parameters.push(country);
    }else{
        $scope.parameters.shift();
        $scope.parameters.push(country);
    }

$http.get("https://corona-stats.online/" + $scope.parameters[0] + '?format=json')
.then(function successCallback(response) {
    $scope.coronaInfo = response.data;
})
}
}]);

