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
    app.controller('portfolio', function($scope) {
        init();

        function init() {

        }
    });
    app.controller('contact', function($scope, contactInfoService, socialMediaService) {
        $scope.contactInfo = [];
        $scope.socialMediaInfo = [];

        init();
            $scope.contactInfo = contactInfoService.getContactInfo();
            $scope.socialMediaInfo = socialMediaService.getSocialMediaInfo();

        function init() {

        }
    });
})();