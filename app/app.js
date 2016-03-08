'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
    'ngAnimate',
    'ngRoute',
    'ngMap',
    'weatherService',
    'weatherApp.views.home',
    'weatherApp.views.weather',
    'weatherApp.views.customWeather'

]).

    config(['$routeProvider','weatherProvider', function ($routeProvider,weatherProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});


        weatherProvider.setAppId('8a5f2790ba70d702203598607e1afe2d');
        weatherProvider.configure({
            lang:'de',
            q:'Natzungen',
            units:'metric'
        })

    }]).run(function ($rootScope,$location) {
        $rootScope.navi = [
            {id:1,name:'Wetter',url:'/weather'},
            {id:2,name:'Benutzerdefenefjiogdnis Wetter',url:'/customWeather'}
        ];

        $rootScope.openUrl = function (url){
            $location.url(url);
        }

    });



