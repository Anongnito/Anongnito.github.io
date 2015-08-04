(function() {
    "use strict";

    app.controller('navigation', function($scope, navigationService) {
        $scope.navigations = [];
        init();

        function init() {
            $scope.navigations = navigationService.getNavigation();
        }

    });


    app.controller('front', function($scope) {
        init();

        function init() {

        }
    });
    app.controller('about', function($scope) {
        init();

        function init() {

        }
    });
    app.controller('portfolio', function($scope, portfolioService) {
        $scope.portfolioInfo = [];
        init();

        function init() {
            $scope.portfolioInfo = portfolioService.getPortfolioInfo();
        }
    });
    app.controller('contact', function($scope, contactInfoService, socialMediaService) {
        $scope.contactInfo = [];
        $scope.socialMediaInfo = [];

        init();

        function init() {
            $scope.contactInfo = contactInfoService.getContactInfo();
            $scope.socialMediaInfo = socialMediaService.getSocialMediaInfo();
        }
    });
})();