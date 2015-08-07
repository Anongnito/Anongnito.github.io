(function() {
    "use strict";

    app.service('navigationService', function() {
        this.getNavigation = function() {
            return navigations;
        };

        var navigations = [

            {
                name: 'Home',
                link: '#/',
                img: 'img/homeNormal.png'
            },
            {
                name: 'About',
                link: '#/about',
                img: 'img/aboutNormal.png'
            },
            {
                name: 'Portfolio',
                link: '#/portfolio',
                img: 'img/portNormal.png'
            },
            {
                name: 'Contact',
                link: '#/contact',
                img: 'img/contactNormal.png'
            }
        ]
    });

    app.service('contactInfoService', function() {
        this.getContactInfo = function() {
            return contactInfo;
        };

        var contactInfo = [
            {
                name: 'E-Mail:',
                value: 'Anongnito@gmail.com'
            },
            {
                name: 'Mobile:',
                value: '+44 74 321 318 83'
            },
            {
                name: 'Skype:',
                value: 'Ago.Ahas'
            }
        ]
    });

    app.service('socialMediaService', function() {
        this.getSocialMediaInfo = function() {
            return socialMediaInfo;
        };

        var socialMediaInfo = [
            {
                name: 'Twitter',
                url: 'https://twitter.com/Eions',
                img: 'img/twitter.png'
            },
            {
                name: 'LinkedIn',
                url: 'https://uk.linkedin.com/in/agoahas',
                img: 'img/linkedin.png'
            }
        ]
    });

    app.service('portfolioService', function() {
        this.getPortfolioInfo = function() {
            return portfolioInfo;
        };

        this.getSelectedCompanyIndex = function() {
            return selectedCompanyIndex;
        };
        this.setSelectedCompanyIndex = function(index) {
            selectedCompanyIndex = index;
        };

        var portfolioInfo = [
            {
                name: 'Argos',
                img: 'img/Argos.png'
            },
            {
                name: 'RedEye',
                img: 'img/RedEye.png'
            },
            {
                name: 'Elion',
                img: 'img/Elion.png'
            },
            {
                name: 'Frostnova',
                img: 'img/Frostnova1.png'
            },
            {
                name: 'Level1',
                img: 'img/Level1.png'
            }
        ];
        var selectedCompanyIndex = 0;
    });

    app.service('portfolioContentService', function() {
        this.getContentInfo = function() {
            return contentInfo;
        };

        var contentInfo = [
            {
                id: 0,
                heading: 'Argos',
                textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel magna pellentesque, fermentum risus non, vestibulum dolor.',
                quote: '"Ago was an amazing person, he did all the best he could and brought great valu to the company."'
            },
            {
                id: 1,
                heading: 'RedEye',
                textContent: 'This is RedEye'
            },
            {
                id: 2,
                heading: 'Elion',
                textContent: 'This is Elion'
            },
            {
                id: 3,
                heading: 'Frostnova',
                textContent: 'This is Frostnova'
            },
            {
                id: 4,
                heading: 'Level1',
                textContent: 'This is Level1'
            }

        ];
    });

    app.directive('disableNgAnimate', ['$animate', function($animate) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                $animate.enabled(false, element);
            }
        };
    }]);


})();