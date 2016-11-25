angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.controller('CalcCtrl', function($scope) {
  $scope.doCalc = function() {
    var a = $scope.num1;
    var b = $scope.num2;
    $scope.result = a+b;
    console.log(a+b);
  };
});