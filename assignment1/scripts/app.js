(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
  $scope.state = "";
  $scope.lunchItems = "";
  $scope.stateColor = "";

  $scope.checkState = function() {
    if ($scope.lunchItems === "") {
      $scope.state = "Please enter data first"
      $scope.stateColor = 'red';
    }
    else {
      $scope.stateColor = 'green';
      var lunchItemsArray = $scope.lunchItems.split(',');
      var count = calculateItems(lunchItemsArray);
      if (count <= 3) {
        $scope.state = "Enjoy!";
      }
      else {
        $scope.state = "Too much!";
      }
    }
  };

  var calculateItems = function(lunchItemsArray) {
    var count = lunchItemsArray.length
    for (var i = 0; i < lunchItemsArray.length; i++) {
      var item = lunchItemsArray[i];
      item = item.replace(/\s+/g, '');
      if (item == "") {
        count--;
      }
    }
    return count;
  };

};



})();
