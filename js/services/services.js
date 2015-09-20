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
                img: 'img/ArgosWebsite.png'
            },
            {
                name: 'RedEye',
                img: 'img/RedEyeWebsite.png'
            },
            {
                name: 'Elion',
                img: 'img/ElionWebsite.png'
            },
            {
                name: 'Frostnova',
                img: 'img/EnnemuistneWebsite.png'
            },
            {
                name: 'Level1',
                img: 'img/Level1Website.png'
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
                textContent: 'Morbi aliquam vestibulum libero, vitae sodales odio tincidunt vel. Morbi at justo molestie, semper est nec, dapibus enim. Donec placerat odio quis tellus tempus posuere. Cras pretium tincidunt risus, vel congue mauris accumsan id. Cras eget convallis nulla. Nam imperdiet malesuada mauris, ac mattis risus bibendum eget. Curabitur feugiat quam tortor, et laoreet nisl fermentum non. Integer consequat pellentesque mauris, non aliquam mi semper quis. Nam a sapien dui. Nullam quis tortor quis erat facilisis tempus sit amet ac libero. Morbi aliquam vestibulum libero, vitae sodales odio tincidunt vel. Morbi at justo molestie, semper est nec, dapibus enim. Donec placerat odio quis tellus tempus posuere. Cras pretium tincidunt risus, vel congue mauris accumsan id. Cras eget convallis nulla. Nam imperdiet malesuada mauris, ac mattis risus bibendum eget. Curabitur feugiat quam tortor, et laoreet nisl fermentum non. Integer consequat pellentesque mauris, non aliquam mi semper quis. Nam a sapien dui. Nullam quis tortor quis erat facilisis tempus sit amet ac libero',
                quote: '"Ago was an amazing person, he did all the best he could and brought great valu to the company."'
            },
            {
                id: 1,
                heading: 'RedEye',
                textContent1: 'RedEye is an international digital marketing company in London, which specialises in marketing automation, email marketing and user experience. Working on big clients e.g. Radley, Monarch, Haven Holidays, Hays Recruitment and Skype.',
                quote: '"Always ensuring to meet the deadlines, Ago very quickly became one of the core team member within the UX Division"' +
                ' - Tasin Reza. Head of Optimisation and Design',
                textContent2: 'Developing pages with jQuery for A/B/N testing, personalisation, taking Photoshop designs and converting them into HTML/CSS assets, assessing feasibility of making adjustments to pages based on user experience findings, working closely with the company\'s user experience team to generate ideas for optimising clients\' websites, consulting clients.',
                bulletPoints: ['Advanced knowledge of JavaScript','jQuery','HTML4/5','CSS2/3','Adobe Photoshop','A/B Testing Tools: Optimizely, Monetate, Adobe Test & Target','Excellent communication skills for liaising with clients\' development and design teams', 'Bonus: Creating a Web-Crawler with unlimited filters in Java, integrated with a MySQL database to save data into'],
                workDone: ['http://agoahas.co.uk/IMG/hays.jpg', 'http://agoahas.co.uk/IMG/monarch.jpg']
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

    app.service('frontpageService', function() {
        this.getFrontpageState = function() {
            return frontpageState;
        };
        this.setFrontpageState = function() {
            frontpageState = true;
        };
        var frontpageState = false;
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