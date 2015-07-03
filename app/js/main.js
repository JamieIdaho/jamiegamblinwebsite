;(function (){

  'use strict';

  angular.module('JamieWeb', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouteProvider) {

    // $urlRouterProvider.otherwise('');

    $stateProvider
      .state ('home', {
        url: '',
        templateUrl: 'js/templates/home.tpl.html',
        controller: 'MainControl'
      });

  }]);

}());
