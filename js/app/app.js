var app = angular.module('anongnitoApp', ['ngRoute','ui.router', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'front',
            templateUrl: 'html/frontpage.html'
        })
        .when('/about', {
            controller: 'about',
            templateUrl: 'html/about.html'
        })
        .when('/portfolio', {
            controller: 'portfolio',
            templateUrl: 'html/portfolio.html'
        })
        .when('/contact', {
            controller: 'contact',
            templateUrl: 'html/contact.html'
        })
        .otherwise({redirectTo: '/'});

});

app.directive('disableNgAnimate', ['$animate', function($animate) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $animate.enabled(false, element);
        }
    };
}]);
