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
                $('nav').css('top', '-100px').addClass('navMovement');

            } else {
                document.getElementsByClassName('name')[0].className += (' nameLoaded');
                document.getElementsByClassName('swissKnife')[0].className += (' swissKnifeLoaded');
                document.getElementById('intro').className -= (' logoFadeIn');
                document.getElementById('intro').style.opacity = 1;
                $('nav').css('top', '0px').removeClass('navMovement');

            }
            frontpageService.setFrontpageState();
        }
    });
    app.controller('about', function($scope, aboutPageService) {
        $scope.aboutPageText = [];
        init();

        function init() {
            $scope.aboutPageText = aboutPageService.getText();
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

        $scope.user = [{
            email: $scope.email,
            name: $scope.name,
            message: $scope.message
        }];
        $scope.submitForm = function(){
            $.ajax({
                type:"POST",
                data: {
                    email: $scope.user.email,
                    name: $scope.user.name,
                    message: $scope.user.message
                },
                url: window.location.href + "emailSender.php",
                success: function() {
                    console.log('success');
                    console.log('email:' + $scope.user.email);
                    console.log('name:' + $scope.user.name);
                    console.log('message:' + $scope.user.message);
                },
                error: function() {
                    console.log('FAIL')

                }
            });
        };


        init();

        function init() {
            $scope.contactInfo = contactInfoService.getContactInfo();
            $scope.socialMediaInfo = socialMediaService.getSocialMediaInfo();
        }
    });
})();