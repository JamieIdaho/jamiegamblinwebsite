;(function (){

  'use strict';

  angular.module('JamieWeb')

  .controller('MainController', ['$scope', '$http', '$location',
      function ($scope, $http, $location) {

        setTimeout( function () {
        $('.parallax').parallax();
        }, 0);

  }]);

}());
