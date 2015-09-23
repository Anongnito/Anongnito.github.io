"use strict";
$(document).ready(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("bgVideo").remove();
    }
    var menuElement = $('.navElement');
    if(window.matchMedia("(max-width: 1024px)").matches) {
        var value;
        var newValue;

        mobileNavManip();
        menuElement.bind('click', function() {
            removeActiveState();
            $(this).find('h1').addClass('active');
            var value = $(this).find('img').attr('src');
            var newValue = value.replace('Normal', 'Active');
            $(this).find('img').attr('src', newValue);
            window.scrollTo(0, 0);
        });

    } else {
        deskNavManip();
        videoControls();

        menuElement.bind('click', function() {
            removeActiveState();
            $(this).find('h1').addClass('active');
            window.scrollTo(0, 0);
        });

    }

    function deskNavManip() {
        $('.navElement img').remove();
        if(window.location.href.indexOf('/about') > 0) {
            menuElement.eq(1).find('h1').addClass('active');
            $('#intro').css('display', 'none');
            $('body').css('overflow-y', 'scroll');

        } else if(window.location.href.indexOf('/portfolio') > 0) {
            menuElement.eq(2).find('h1').addClass('active');
            $('#intro').css('display', 'none');
           $('body').css('overflow-y', 'scroll');

        } else if(window.location.href.indexOf('/contact') > 0) {
            menuElement.eq(3).find('h1').addClass('active');
            $('#intro').css('display', 'none');
            $('body').css('overflow-y', 'scroll');
        } else {
            menuElement.eq(0).find('h1').addClass('active');
            $('#intro').css('display', 'block');
            $('body').css('overflow-y', 'hidden');
            videoControls();
        }
    }
    function mobileNavManip() {
        if(window.location.href.indexOf('/about') > 0) {
            menuElement.eq(1).find('h1').addClass('active');
            value = menuElement.eq(1).find('img').attr('src');
            newValue = value.replace('Normal', 'Active');
            menuElement.eq(1).find('img').attr('src', newValue);
            $('#intro').css('display', 'none');
            $('body').css('overflow-y', 'scroll');


        } else if(window.location.href.indexOf('/portfolio') > 0) {
            menuElement.eq(2).find('h1').addClass('active');
            value = menuElement.eq(2).find('img').attr('src');
            newValue = value.replace('Normal', 'Active');
            menuElement.eq(2).find('img').attr('src', newValue);
            $('#intro').css('display', 'none');
            $('body').css('overflow-y', 'scroll');


        } else if(window.location.href.indexOf('/contact') > 0) {
            menuElement.eq(3).find('h1').addClass('active');
            value = menuElement.eq(3).find('img').attr('src');
            newValue = value.replace('Normal', 'Active');
            menuElement.eq(3).find('img').attr('src', newValue);
            $('#intro').css('display', 'none');
            $('body').css('overflow-y', 'hidden');


        } else {
            menuElement.eq(0).find('h1').addClass('active');
            value = menuElement.eq(0).find('img').attr('src');
            newValue = value.replace('Normal', 'Active');
            menuElement.eq(0).find('img').attr('src', newValue);
            $('nav').css('top', '-100px').addClass('navMovement');
            $('#intro').css('display', 'block');
        }
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

    function videoControls() {
        var video = document.getElementById("bgVideo");
        video.loop = false;
        video.addEventListener('ended', function () {
            video.currentTime = 0.1;
            video.play();
        }, false);
        video.play();
    }


    window.onhashchange = function() {
        removeActiveState();
        if(window.matchMedia("(max-width: 1024px)").matches) {
            mobileNavManip();
        } else {
            deskNavManip();
        }
    }
});


