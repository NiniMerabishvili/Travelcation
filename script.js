$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".container").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navigation-fixed").removeClass("active");
        }
    });
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".container1").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navigation-fixed").removeClass("active");
        }
    });
});


  
$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })