var newImagePath=""; // declaring to be used for changing ".launch" backround
/* array for preloading images */
var myimages=new Array()
function preloadimages(){
    for (i=0;i<preloadimages.arguments.length;i++){
        myimages[i]=new Image();
        myimages[i].src=preloadimages.arguments[i];
    }
}
$(document).ready(function () {

    if (location.hash.length > 2) {
        location.hash = "";
    };

    /* Setting the box height to the window size on browser*/
    var newHeight = $(window).height() - 85;
    if($(window).width()<768){
      newHeight =$(window).height() - 50;
    }
    $('.box').css({"height":newHeight + "px"});


    /* All events that must happen if window resizes */
    $(window).resize(function () {
       newHeight =$(window).height() - 85;
       if($(window).width()<768){
         newHeight =$(window).height() - 50;
       }
       $('.box').css({"height":newHeight + "px"}); //Issue background image Disaapears sometimes
    });

    preloadimages('bgs/color-red.jpg', 'bgs/color-yellow.jpg', 'bgs/color-green.jpg', 'bgs/color-light-yellow.jpg', 'bgs/color-blue.jpg', 'bgs/color-violet.jpg', 'bgs/color-light-violet.jpg');
    /* code for color box */
    $('.color').click(function () {
        // hide the choose-color message
        $('.choose-color').fadeOut(100);
        $('.choose-color-mini').fadeOut(100);
        console.log($(this)[0].id);
        newImagePath="url('bgs/"+$(this)[0].id+".jpg')";
        console.log(newImagePath);
        /* $('.launch').css({ "background-image": newImagePath }); */
        $('.fill').css({ "background-image": newImagePath });
    });

    /* back-to-top */
    if ( ($(window).height() + 100) < $(document).height() ) {
        $('#top-link-block').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {top:100}
        });
    }

    /* front page display animations */
    $('.cool-display').delay(200).fadeIn(500);

    /* Display on scroll animation */
    $(document).scroll(function () {
        //Show element after user scrolls 800px
        var y = $(this).scrollTop();
        if (y > 800) {
            //$('.bottomMenu').fadeIn();
        } else {
            //$('.bottomMenu').fadeOut();
        }

        // Show element after user scrolls past
        // the top edge of its parent
        $('.anim').each(function () {
            var t = $(this).parent().offset().top - 60;
            if (y > t) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });


    /* href change code */
    $(window).on('hashchange', function () {
        var hash = window.location.hash;
        hash = hash.replace("#", "");
        if (hash == 'services') {
            $('.view').html("...");
            $('.view').load('views/services.html');
        }
    });


    /* change selected in menu */
    $('.navbar-right').click(function (event) {
        $('.selected').removeClass('selected');
        var _data = $(event.target).parent()[0];
        _data.className = "selected";
    });

    /* smooth Scrool code */

    /* fire event on the keyboard scroll */
    $(window).keydown(function (e) { // A Key has been Pressed
        if (e.target.tagName.toLowerCase() !== 'input' && e.target.tagName.toLowerCase() !== 'textarea') { // If it's not in a input or textarea
            switch (e.which) { // Figure out which one it is
                case 37:
                    // Left Arrow
                    handle(1); // Scroll Up
                    break; // Stop
                case 38:
                    // Up Arrow
                    handle(1); // Scroll Up
                    break; // Stop
                case 39:
                    // Right Arrow
                    handle(-1); // Scroll Down
                    break; // Stop
                case 40:
                    // Down Arrow
                    handle(-1); // Scroll Down
                    break; // Stop
                default:
                    return; // If it wasn't any of those, carry on.
            }
            if (event.preventDefault) event.preventDefault(); // Stop it if we can.
        }
    });

    /* fire event on mouse scroll */
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;

        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }

    function handle(delta) {
        var time = 350; // delay time
        var distance = 120; // delta point
        // Dom where it will apply
        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, {
            duration: time,
            easing: 'easeOutCirc'
        });
    }



});
