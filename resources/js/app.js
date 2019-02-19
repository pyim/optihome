$(document).ready(function () {
    

    
/////////////////////////////////////////////////////////
    // Scroll ////////////////////

    $(".js-scroll-catalogue").click(function () {
        $("html, body").animate({
            scrollTop: $(".js-section-catalogue").offset().top
        }, 1000);
    });

});