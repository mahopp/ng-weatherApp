'use strict';

angular.module('weatherApp.views.customWeather', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customWeather', {
    templateUrl: 'views/customWeather/customWeather.html',
    controller: 'CustomWeatherCtrl'
  });
}])

.controller('CustomWeatherCtrl', [function() {

}]);