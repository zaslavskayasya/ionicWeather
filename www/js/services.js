angular.module('starter.services', [])

.service('API', function ($http, $q) {
    return {
        getWeatherForecast: function (params) {
            var key = '5c40c72b9b544023b9b74029162111';
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'http://api.apixu.com/v1/forecast.json',
                params: {
                    key: key,
                    q: params.query,
                    days: '7'
                }
            }).then(function (data) {
                console.log(data);
                var forecast = data.data.forecast.forecastday;
                /* console.log(forecast);*/

                d.resolve(forecast);
            });
            return d.promise;
        }
    }
})
