var app = angular.module("customApp", []);


function calcController($scope){
  $scope.output = "0"; //has to be a string because the of the number building
  $scope.pressed = false;
  
  $scope.addValue = function(value){
    if($scope.pressed == false){
      $scope.output = value;
      $scope.pressed = true;
    }else{
      $scope.output += String(value); //has to be String otherwise the numbers are sum automatically
    }
  };
  
  $scope.clearValue = function(value){
    if($scope.pressed == true){
      $scope.output = "";
    }
  }
  
  $scope.otherOperation = function(operation){
    if(operation != "="){
    $scope.pressed = true;
    $scope.output += operation;
    }else{
      if($scope.output.length > 2){
      $scope.pressed = true;
      $scope.output = eval($scope.output).toFixed(2);
      }
    }
  }
}

app.controller("calcController", calcController);