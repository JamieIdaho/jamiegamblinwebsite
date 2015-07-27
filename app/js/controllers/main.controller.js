;(function (){

  'use strict';

  angular.module('JamieWeb')

  .controller('MainControl', ['$scope', '$http', '$location',
      function ($scope, $http, $location) {

        setTimeout( function () {
        $('.parallax').parallax();
        $('.modal-trigger').leanModal();
        }, 0);

        $("#home").click(function() {
        $('html, body').animate({
        scrollTop: $("#homeID").offset().top
        }, 1000);
        });

        $("#work").click(function() {
        $('html, body').animate({
        scrollTop: $("#workID").offset().top
        }, 1000);
        });

        $("#skills").click(function() {
        $('html, body').animate({
        scrollTop: $("#skillsID").offset().top
        }, 1000);
        });

        $("#about").click(function() {
        $('html, body').animate({
        scrollTop: $("#aboutID").offset().top
        }, 1000);
        });

        $("#contact").click(function() {
        $('html, body').animate({
        scrollTop: $("#contactID").offset().top
        }, 1000);
        });

  }]);

}());
