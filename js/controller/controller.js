(function() {
    "use strict";

    app.controller('navigation', function($scope, navigationService) {
        $scope.navigations = [];

        if(window.matchMedia("(max-width: 1024px)").matches) {
            $scope.isMobile = ["Yes"];
        } else {
            $scope.isMobile = ["No"];
        }
        init();

        function init() {
            $scope.navigations = navigationService.getNavigation()
        }

    });


    app.controller('front', function($scope, frontpageService) {
        $scope.homepageVisited = frontpageService.getFrontpageState();

        init();
        function init() {
            if($scope.homepageVisited == false) {
                document.getElementsByClassName('name')[0].className += (' nameFadeIn');
                document.getElementsByClassName('swissKnife')[0].className += (' swissKnifeFadeIn');
            } else {
                document.getElementsByClassName('name')[0].className += (' nameLoaded');
                document.getElementsByClassName('swissKnife')[0].className += (' swissKnifeLoaded');
                document.getElementById('intro').className -= (' logoFadeIn');
                document.getElementById('intro').style.opacity = 1;

            }
            frontpageService.setFrontpageState();
        }
    });
    app.controller('about', function($scope) {
        init();

        function init() {

        }
    });
    app.controller('portfolio', function($scope, portfolioService, $modal, portfolioContentService) {
        $scope.portfolioInfo = [];
        $scope.portfolioContentInfo = [];

        init();

        function init() {

            $scope.selectedCompanyIndex = portfolioService.getSelectedCompanyIndex();
            $scope.setSelectedCompanyIndexFunction = function(index) {
                portfolioService.setSelectedCompanyIndex(index);
            };
            $scope.portfolioContentInfo = portfolioContentService.getContentInfo();


            $scope.portfolioInfo = portfolioService.getPortfolioInfo();
            $scope.open = function() {
                $scope.modalInstance = $modal.open({
                    templateUrl: 'html/portfolioModal.html',
                    controller: 'modalController'
                });
            };
        }


    });

    app.controller('modalController', ['$scope', '$modalInstance', function($scope, $modalInstance) {

        init();

        function init() {
            $scope.cancel = function() {
                $modalInstance.dismiss('canceled');
            };
        }

    }]);

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