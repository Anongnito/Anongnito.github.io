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
                time: '2015 March - Present',
                role: 'Front-end developer',
                textContent1: 'Argos is a British catalog retailer operating in the UK and Ireland. With over 900 stores and hundreds of millions of views online yearly, Argos is one of the largest high street retailers online in the UK.',
                quote: '',
                textContent2: 'Working in a small dedicated front-end development and testing team, providing high quality code for A/B, MVT and personalisation implementation, for both desktop and mobile website, whilst giving UX advice, ensuring quality testing and coming up with test ideas to boost revenue and conversion of Argos\' online store.',
                bulletPoints: ['JavaScript', 'jQuery', 'HTML4/5', 'CSS2/3', 'AJAX, JSON, JSONP', 'Responsive Design', 'Adobe Photoshop', 'Adobe Test & Target', 'Adobe Tag Manager', 'Adobe Recommendations', 'Liaising with agile teams to provide best quality results'],
                workDone: 'Coming Soon'
            },
            {
                id: 1,
                heading: 'RedEye',
                time: '2014 - 2015 March',
                role: 'Optimisation consultant / front-end developer',
                textContent1: 'RedEye is an international digital marketing company in London, which specialises in marketing automation, email marketing and user experience. Working on big clients e.g. Radley, Monarch, Haven Holidays, Hays Recruitment and Skype.',
                quote: '"Always ensuring to meet the deadlines, Ago very quickly became a core team member within the UX Division"' +
                ' - Tasin Reza. Head of Optimisation and Design',
                textContent2: 'Developing pages with jQuery and vanilla JavaScript for A/B/N testing, personalisation, taking Photoshop designs and converting them into HTML/CSS assets, assessing feasibility of making adjustments to pages based on user experience findings, working closely with the company\'s user experience team to generate ideas for optimising clients\' websites, consulting clients.',
                bulletPoints: ['Advanced knowledge of JavaScript', 'jQuery', 'HTML4/5', 'CSS2/3','Adobe Photoshop', 'A/B Testing Tools: Optimizely, Monetate, Adobe Test & Target', 'Excellent communication skills for liaising with clients\' development and design teams', 'Bonus: Creating a Web-Crawler with unlimited filters in Java, integrated with a MySQL database to save data into'],
                workDone: ['http://agoahas.co.uk/IMG/radley.jpg', 'http://agoahas.co.uk/IMG/monarch.jpg']
            },
            {
                id: 2,
                heading: 'Elion',
                time: '2013 - 2014',
                role: 'Full-Stack Java developer',
                textContent1: 'Elion Enterprises is the largest telecommunications and internet service provider in Estonia. Since 08/2014 Elion and EMT, Estonia\'s most popular mobile operator, merged their functions and are now known as AS Eesti Telekom.',
                quote: '"I recommend Ago to any company in need of a quality front-end or a full-stack developer."' +
                ' - Lauri Lüüs. Web Production Manager',
                textContent2: 'Developing pages with jQuery and vanilla JavaScript for A/B/N testing, personalisation, taking Photoshop designs and converting them into HTML/CSS assets, assessing feasibility of making adjustments to pages based on user experience findings, working closely with the company\'s user experience team to generate ideas for optimising clients\' websites, consulting clients.',
                bulletPoints: ['Java', 'JavaScript', 'JQuery', 'HTML', 'CSS', 'Oracle SQL database', 'Bootstrap', 'Angular', 'Struts', 'Liquibase', 'Hibernate', 'Ruby', 'WatirSplash', 'Watir/Rspec,Hudson', 'Atlassian Jira', 'Intellj Idea', 'Test driven development', 'Pair/Extreme programming', 'Git'],
                workDone: ['http://agoahas.co.uk/IMG/elionPreview3.jpg', 'http://agoahas.co.uk/IMG/elionPreview2.jpg']
            },
            {
                id: 3,
                heading: 'Frostnova',
                time: '2012 - 2013',
                role: 'Co-coordinator, game functionality and server backend developer',
                textContent1: 'Project Ennemuistne was an Estonian EMMORPG(Educational massively multi-player online role-playing game) for kids. Ennemuistne won the best e-service award for cultural category in 2013.',
                quote: '"I had a wonderful time working with Ago and would strongly recommend his candidacy to any code development related position."' +
                ' - Mikk Melder. CEO of Frostnova',
                textContent2: 'Daily tasks included programming the games\' functionality in Unity3D with JavaScript and our own server functionality in Java as well as working with and co-coordinating a small 10 people team. The team consisted of two artists, four developers, a sound technician, a project manager and two testers.',
                bulletPoints: ['Unity3D', 'Object-Oriented JavaScript', 'Java', 'Blender', 'Pivotal Tracker', 'MonoDevelop', 'Amazon Server', 'Audacity', 'Sound Design'],
                workDone: ['http://agoahas.co.uk/IMG/ennemuistne.jpg', 'http://agoahas.co.uk/IMG/valkrehnungPreview.jpg']
            },
            {
                id: 4,
                heading: 'Level1',
                time: '2010 - Present',
                role: 'Company representative, co-founder and content creator for Level1.',
                textContent1: 'Level1 is an Estonian website and a community which promotes video games, virtuality and also aims to create a network of people interested in video games, while introducing gaming as a positive and educational aspect of our culture.',
                quote: '"Always ensuring to meet the deadlines, Ago very quickly became a core team member within the UX Division"' +
                ' - Tasin Reza. Head of Optimisation and Design',
                textContent2: 'Consulting on website development and design, meeting as well as cooperating and negotiating with sponsors, hosting and organizing gaming events, video editing, creating YouTube game reviews, taking interviews, participating in audio podcasts, delivering weekly gaming news and live broadcasting gameplay to Twitch.tv.',
                bulletPoints: ['HTML', 'CSS', 'jQuery', 'Google Analytics', 'Wordpress', 'starting and growing a start-up', 'requiring and liaising with sponsors', 'public speaking', 'event organisation', 'Adobe Premiere'],
                workDone: ['http://agoahas.co.uk/IMG/level1Real.jpg']
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

    app.service('aboutPageService', function() {
        this.getText = function() {
            return aboutText;
        };

        var aboutText = [
            {
                heading: 'Anongnito',
                text: "Anongnito is a full-stack development company, founded by Ago Ahas, 2015 March. Immediately after establishment, Anongnito got it's first client Argos - one of the largest high street retailers online in the UK. As the projects at Argos are immense, and we are valued greatly, the 3 month commitment has turned in to a longer arrangement."
            },
            {
                heading: 'Ago\'s Professional Background',
                text: "Ago is a developer and a certified IT specialist, with a range of experiences working on various projects:\n" +
                "* Front-end developer in RedEye and Level1, using HTML4/5, CSS2/3, JavaScript and all the bells and whistles which come with the latter.\n" +
                "* Full-stack Java developer in Elion Enterprises, applying my knowledge of Java, JavaScript, AngularJS, and Struts.\n" +
                "* Game developer in Frostnova on project Ennemuistne, utilizing JavaScript in Unity3D as well as Java for the server side.\n" +
                "The professional experience also expands in to creating gaming related content such as news and reviews, as well as participating in organizing the biggest Baltic's gaming event. Due to a great variety of projects, Ago has also acquired knowledge on how to run and grow start-ups, as well as to take part in development processes in big businesses, working as a developer alongside multiple teams of designers, architects, project managers and fellow developers."
            },
            {
                heading: 'Technical Wisdom',
                text: 'JavaScript, Java, HTML5, CSS3, jQuery, Ajax, Hibernate, Bootstrap, Oracle SQL database, Angular, Struts, Spring, Wordpress, Liquibase, Ruby, WatirSplash, Watir/Rspec, Hudson, TDD, XP, Git, Unity3D, Jira, Pivotal Tracker, Adobe Photoshop/Premiere.'
            },
            {
                heading: 'Bonus',
                text: 'Being a technological fanatic and a devoted veteran gamer, Ago found his passion for teamwork, strategizing and development at a very early age. Early skills of coordinating teams of 10 (or more) and leading them into epic battles in the virtual world, were later applied in professional environment, to motivate and organize teams in the most efficient manner. Combination of interest for tech and his problem solving skills which were applied to repair and assemble computers, have matured into his interest to fix "that one annoying" bug and to come up with solutions for projects optimization, which is why there is a chance of seeing him in a dark office, when everyone is left, sipping on that coffee in the blue light of a monitor.'
            }
        ]
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