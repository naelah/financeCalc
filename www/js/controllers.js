angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.factory('Data', function() {
    var total = {};
    return {
        getTotal: function() {
            return total;
        },
        setTotal: function(totalparameter) {
            total = totalparameter;
        }
    };
})


.controller('CalcCtrl', function($scope, $state, Data) {
  $scope.doCalc = function() {
    var a = $scope.num1;
    var b = $scope.num2;
    var c = a + b;

    Data.setTotal(c);

    if (c < 50)
      $scope.test = "hello";
    else
      $scope.test = "bye";

    $scope.result = c;
    //$state.go('templates/result');
  };
})

.controller('ResultCtrl', function($scope, $state, Data){
  $scope.total = Data.getTotal();
});