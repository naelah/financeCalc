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

    var liq = $scope.num1;
    var eff = $scope.num2;
    var size = $scope.num3;
    var coni = $scope.num4;
    var assq = $scope.num5;
    var mars = $scope.num6;
    var gdp = $scope.num7;
    var inf = $scope.num8;
    var err = $scope.num9;

    //console.log(a);
    var sum = liq + eff +size + coni + assq + mars + gdp +inf + err;
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


  $scope.perc = (sum/100)*100;

});