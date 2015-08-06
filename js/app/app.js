var app = angular.module('anongnitoApp', ['ngRoute', 'ui.router', 'ngAnimate', 'ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url: '/',
            controller: 'front',
            templateUrl: 'html/frontpage.html'
        })
        .state('about', {
            url: '/about',
            controller: 'about',
            templateUrl: 'html/about.html'
        })
        .state('portfolio', {
            url: '/portfolio',
            controller: 'portfolio',
            templateUrl: 'html/portfolio.html'
        })
        .state('contact', {
            url: '/contact',
            controller: 'contact',
            templateUrl: 'html/contact.html'
        })

});

app.directive('disableNgAnimate', ['$animate', function($animate) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $animate.enabled(false, element);
        }
    };
}]);
