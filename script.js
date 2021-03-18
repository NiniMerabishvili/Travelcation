$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 800) {
            $(".container").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navigation-fixed").removeClass("active");
        }
    });
});
