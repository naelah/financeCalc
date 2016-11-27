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
  $scope.resetForm = function() {
    $scope.num1 = "";
    $scope.num2 = "";
    $scope.num3 = "";
    $scope.num4 = "";
    $scope.num5 = "";
    $scope.num6 = "";
    $scope.num7 = "";
    $scope.num8 = "";
    $scope.num9 = "";
  };

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


    if(/\D/.test(liq))
        {
        alert("Liquidity has to be a number")
        return;
        }

    else if(/\D/.test(eff))
        {
        alert("Efficiency has to be a number")
        return;
        }
    else if(/\D/.test(size))
        {
        alert("Size has to be a number")
        return;
        }

    else if(/\D/.test(coni))
        {
        alert("Concentration Index has to be a number")
        return;
        }

    else if(/\D/.test(assq))
        {
        alert("Asset Quality has to be a number")
        return;
        }

    else if(/\D/.test(mars))
        {
        alert("Market Share has to be a number")
        return;
        }
      else if(/\D/.test(gdp))
        {
        alert("GDP to be a number")
        return;
    }
    else if(/\D/.test(inf))
        {
        alert("inflation has to be a number")
        return;
        }
    else if(/\D/.test(err))
        {
        alert("Error has to be a number")
        return;
        }

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