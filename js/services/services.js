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

        var portfolioInfo = [
            {
                name: 'Argos',
                url: 'http://www.elion.ee',
                img: 'img/Argos.png'
            },
            {
                name: 'RedEye',
                url: 'https://uk.linkedin.com/in/agoahas',
                img: 'img/RedEye.png'
            },
            {
                name: 'Elion',
                url: 'http://www.level1.ee',
                img: 'img/Elion.png'
            },
            {
                name: 'Frostnova',
                url: 'http://www.level1.ee',
                img: 'img/Frostnova1.png'
            },
            {
                name: 'Level1',
                url: 'http://www.level1.ee',
                img: 'img/Level1.png'
            }
        ]
    })
})();