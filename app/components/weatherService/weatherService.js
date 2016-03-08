'use strict';

angular.module('weatherService', [])
    .provider('weather', function () {
    var appId;
    var config = {};
    this.setAppId = function (aid) {
        appId = aid;
    };

    this.configure = function(conf){
        angular.extend(config,conf);
    };

    this.$get=function () {
        return {
            getAppId: function () {
                return appId;
            },
            getConfig: function () {
                return config;
            }
        }
    };
})

    .config(function ($httpProvider) {

        var interceptorFn = function($q,weather){
            return {
                request:function(config){
                    if (config.url.indexOf('api.openweathermap') > -1){
                        config.url += '?APPID='+weather.getAppId();
                        var wConf = weather.getConfig();
                        for (var prop in wConf){
                            config.url += '&'+prop+'='+wConf[prop];
                        }
                    }
                    console.log(config);
                    return config;
                },
                response:function(config){
                    return config;
                },
                requestError:function(rej){
                    return $q.reject(rej);
                },
                responseError:function(rej){
                    return $q.reject(rej);
                }
            }
        };


        $httpProvider.interceptors.push(interceptorFn)
    }).factory('weatherFac',function($http){
        var fac={};

        fac.getWeather = function(){
            return $http.get('http://api.openweathermap.org/data/2.5/weather');
        };

        return fac;
    });


