$(document).ready(function() {
    var menuElement = $('.navElement');
    if(window.matchMedia("(max-width: 1024px)").matches) {
        var value;
        var newValue;

        if(window.location.href.indexOf('/about') > 0) {
            menuElement.eq(1).find('h1').addClass('active');
            value = menuElement.eq(1).find('img').attr('src');
            newValue = value.replace('Normal', 'Active');
            menuElement.eq(1).find('img').attr('src', newValue);
        } else if(window.location.href.indexOf('/portfolio') > 0) {
            menuElement.eq(2).find('h1').addClass('active');
            value = menuElement.eq(2).find('img').attr('src');
            newValue = value.replace('Normal', 'Active');
            menuElement.eq(2).find('img').attr('src', newValue);
        } else if(window.location.href.indexOf('/contact') > 0) {
            menuElement.eq(3).find('h1').addClass('active');
            value = menuElement.eq(3).find('img').attr('src');
            newValue = value.replace('Normal', 'Active');
            menuElement.eq(3).find('img').attr('src', newValue);
        } else {
            menuElement.eq(0).find('h1').addClass('active');
            value = menuElement.eq(0).find('img').attr('src');
            newValue = value.replace('Normal', 'Active');
            menuElement.eq(0).find('img').attr('src', newValue);
            $('nav').css('top', '-100px').addClass('navMovement');
        }


        menuElement.bind('click', function() {
            removeActiveState();
            $(this).find('h1').addClass('active');
            var value = $(this).find('img').attr('src');
            var newValue = value.replace('Normal', 'Active');
            $(this).find('img').attr('src', newValue);
        });

    } else {
        $('.navElement img').attr('src','')
            .attr('ng-src','');
        if(window.location.href.indexOf('/about') > 0) {
            menuElement.eq(1).find('h1').addClass('active');
        } else if(window.location.href.indexOf('/portfolio') > 0) {
            menuElement.eq(2).find('h1').addClass('active');
        } else if(window.location.href.indexOf('/contact') > 0) {
            menuElement.eq(3).find('h1').addClass('active');
        } else {
            menuElement.eq(0).find('h1').addClass('active');
        }

        menuElement.bind('click', function() {
            removeActiveState();
            $(this).find('h1').addClass('active');
        });
    }

    function removeActiveState() {
        $('.navElement h1').removeClass('active');
        var allElements = $('.navElement img');

        for(var i = 0; i < allElements.length; i++) {
            var srcValue = $(allElements[i]).attr('src');
            var newValue = srcValue.replace('Active', 'Normal');
            $(allElements[i]).attr('src', newValue);
        }
    }
});

