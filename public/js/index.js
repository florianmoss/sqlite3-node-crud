$(document).ready(() => {
    console.log("js loaded");

    $('.itemOne').hover(function () {
        $('.item1').toggle();
    });

    $('.itemTwo').hover(function () {
        $('.item2').toggle();
    });

});