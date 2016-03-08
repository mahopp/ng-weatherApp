'use strict';

angular.module('weatherApp.views.weather', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weather', {
    templateUrl: 'views/weather/weather.html',
    controller: 'WeatherCtrl'
  });
}])

.controller('WeatherCtrl',function($scope,weatherFac) {


    weatherFac.getWeather().then(function(res){
        console.log(res);
      $scope.weatherData = res.data;
    },function(){})
});