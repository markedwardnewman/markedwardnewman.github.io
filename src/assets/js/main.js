/*
Author: Mark Newman 
Date: Early 2016 
Created for: http://markedwardnewman.com/
Notes: requires jQuery for full functionality
*/

//START document ready functions
//Currently using embedded js in index.html
$(document).ready(function() {
    var $animation_elements = $(".transition");
    var $window = $(window);

    function checkInView() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass("in-view");
            } else {
                $element.removeClass("in-view");
            }
        });
    }


    $window.on("scroll resize", checkInView);
    $window.trigger("scroll");

    $("#parallax").parallax({
        imageSrc: "assets/img/parallax-about.jpg",
        //position and bleed are required for IE		
        position: "top left",
        bleed: 1
    });

    $(function() {
        $("#accordion_summary, #accordion_skills").accordion({
            heightStyle: "content",
            collapsible: true
        });
    });
});