(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .controller('MyCtrl', MyCtrl)
    .filter('replace', replaceFilter)

  MyCtrl.$inject = ['$scope'];

  function MyCtrl($scope) {
    $scope.message = 'Hello World!'
  };

  function replaceFilter() {
    return function (input, target, replace) {
      input = input || '';
      input = input.replace(target, replace);
      return input;
    }
  };

})();
