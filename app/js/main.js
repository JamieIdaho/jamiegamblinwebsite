;(function (){

  'use strict';

  angular.module('JamieWeb', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouteProvider) {

    // $urlRouterProvider.otherwise('');

    $stateProvider
      .state ('home', {
        url: '',
        templateUrl: 'js/templates/home.tpl.html',
        // controller: 'MainControl'
      });
      // .state ('about', {
      //   url: '/about',
      //   templateUrl: 'js/templates/about.tpl.html',
      //   controller: 'AboutControl'
      // })
      // .state ('contact', {
      //   url: '/contact',
      //   templateUrl: 'js/templates/contact.tpl.html',
      //   controller: 'ContactControl'
      // })
      // .state ('skills', {
      //   url: '/skills',
      //   templateUrl: 'js/templates/skills.tpl.html',
      //   controller: 'SkillsControl'
      // });


  }]);

    $(document).ready(function(){
      $('.parallax').parallax();
    });

}());
