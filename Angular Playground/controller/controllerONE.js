var myApp = angular.module("myApp", []);

myApp.controller("HelloWorldCtrl", function ($scope) {
  $scope.message = "Welcome to COVID-19 Information World vs specific Country";
});
myApp.controller("mixController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.country = "";
    $scope.parameters = [];
    $scope.submit = function (country) {
      if ($scope.parameters == []) {
        $scope.parameters.push(country);
      } else if ($scope.country == undefined) {
        $scope.country = "";
      } else {
        $scope.parameters.shift();
        $scope.parameters.push(country);
      }

      $http
        .get(
          "https://corona-stats.online/" +
            $scope.parameters[0] +
            "?source=2&format=json"
        )
        .then(function successCallback(response) {
          var infoFromServer = response.data;
          // if($scope.info == undefined){
          $scope.info = infoFromServer.data;
          //         }else{

          //         }

          //World
          $scope.worldStats = infoFromServer.worldStats;
          delete $scope.worldStats["countryCode"];

          //Country
          $scope.countryInfo = infoFromServer.data[0];
          delete $scope.countryInfo["countryInfo"];
          delete $scope.countryInfo["countryCode"];
          delete $scope.countryInfo["updated"];
          $scope.countryInfo_keys = Object.keys($scope.countryInfo);
        });
    };
  }
]);
