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
    console.log(a);
    var c = a + b;

    Data.setTotal(c);

    $state.go('app.result');
  };
})

.controller('ResultCtrl', function($scope, $state, Data){
  var c = Data.getTotal();
  $scope.total = c;

  if (c < 50)
      $scope.status = "fail";
    else
      $scope.status = "pass";

});