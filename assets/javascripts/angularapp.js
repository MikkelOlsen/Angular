/*globals angular*/

var app = angular.module('myApp', [ui.router]);

app.controller('myCtrl', function ($scope, $http) {
    "use strict";
    $http.get("./assets/javascripts/model.json")
        .then(function(response) {
            $scope.names = response.data;
        });
});

app.config(function ($stateProvider, $urlRouterProvider) {
    "use strict";

    $urlRouterProvider.otherwise('/forside');

    $stateProvider
        .state('forside', {
            url: '/forside',
            templateUrl: '.assets/views/partial-forside.html'
        })

        .state('kontakt', {
            url: '/kontakt',
            templateUrl: './assets/views/partial-kontakt.html'
        });
});