
var myApp = angular.module('todo', []);

myApp.controller('ListController', function ($scope) {

  $scope.list = [];

  $scope.addItem = function (item) {
    if (item !== '') {
      $scope.list.push(item);
    }
    $scope.name = '';
  };

  $scope.removeItem = function (content) {
    var index = $scope.list.indexOf(content);
    $scope.list.splice(index, 1);
  };

  $scope.resetItems = function () {
    $scope.list = [];
  }

  $scope.enterKeyHandler = function (e) {
    if (e.which === 13) {
      $scope.addItem($scope.name);
    }
  }

});