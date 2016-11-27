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
    var c = $scope.num3;
    var d = $scope.num4;
    var e = $scope.num5;
    var f = $scope.num6;
    var g = $scope.num7;
    var h = $scope.num8;
    var i = $scope.num9;
    console.log(a);
    var sum = a + b + c + d + e + f + g + h + i;

    Data.setTotal(sum);

    $state.go('app.result');
  };
})

.controller('ResultCtrl', function($scope, $state, Data){
  var sum = Data.getTotal();
  $scope.total = sum;

  if (sum < 50)
      $scope.status = "fail";
    else
      $scope.status = "pass";

});