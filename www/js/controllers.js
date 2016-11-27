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
<<<<<<< HEAD
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
    var res = liq + eff +size + coni + assq + mars + gdp +inf + err;

    Data.setTotal(res);
=======
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
>>>>>>> 9fa780e4a8f088e7e65e7523220e8f11af6abc68

    $state.go('app.result');
  };
})

.controller('ResultCtrl', function($scope, $state, Data){
<<<<<<< HEAD
  var res = Data.getTotal();
  $scope.total = res;

  if (res < 50)
=======
  var sum = Data.getTotal();
  $scope.total = sum;

  if (sum < 50)
>>>>>>> 9fa780e4a8f088e7e65e7523220e8f11af6abc68
      $scope.status = "fail";
    else
      $scope.status = "pass";


  $scope.perc = (res/100)*100;

});