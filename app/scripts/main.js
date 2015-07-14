var newImagePath=""; // declaring to be used for changing ".launch" backround
/* array for preloading images */
var myimages=new Array()
function preloadimages(){
    for (i=0;i<preloadimages.arguments.length;i++){
        myimages[i]=new Image();
        myimages[i].src=preloadimages.arguments[i];
    }
}
var currentRoom = "hall"; // global variable used for changing current room
var sevenColors = ['color-red', 'color-yellow', 'color-green', 'color-light-yellow', 'color-blue', 'color-violet', 'color-light-violet']; // global array of 7 colors
$(document).ready(function () {

    if (location.hash.length > 2) {
        location.hash = "";
    };

    /* Setting the box height to the window size on browser*/
    var newHeight = $(window).height() - 115;
    if($(window).width()<768){
      newHeight =$(window).height() - 50;
    }
    $('.box').css({"height":newHeight + "px"});


    /* All events that must happen if window resizes */
    $(window).resize(function () {
       newHeight =$(window).height() - 115;
       if($(window).width()<768){
         newHeight =$(window).height() - 50;
       }
       $('.box').css({"height":newHeight + "px"}); //Issue background image Disaapears sometimes
    });

    preloadimages('bgs/hall/color-red.jpg', 'bgs/hall/color-yellow.jpg', 'bgs/hall/color-green.jpg', 'bgs/hall/color-light-yellow.jpg', 'bgs/hall/color-blue.jpg', 'bgs/hall/color-violet.jpg', 'bgs/hall/color-light-violet.jpg', 'bgs/living-room/color-red.jpg', 'bgs/living-room/color-yellow.jpg', 'bgs/living-room/color-green.jpg', 'bgs/living-room/color-light-yellow.jpg', 'bgs/living-room/color-blue.jpg', 'bgs/living-room/color-violet.jpg', 'bgs/living-room/color-light-violet.jpg','bgs/bedroom/color-red.jpg', 'bgs/bedroom/color-yellow.jpg', 'bgs/bedroom/color-green.jpg', 'bgs/bedroom/color-light-yellow.jpg', 'bgs/bedroom/color-blue.jpg', 'bgs/bedroom/color-violet.jpg', 'bgs/bedroom/color-light-violet.jpg', 'bgs/kitchen/color-red.jpg', 'bgs/kitchen/color-yellow.jpg', 'bgs/kitchen/color-green.jpg', 'bgs/kitchen/color-light-yellow.jpg', 'bgs/kitchen/color-blue.jpg', 'bgs/kitchen/color-violet.jpg', 'bgs/kitchen/color-light-violet.jpg');

    /* code for room changer */
    $('.room-changer li').click(function(){
      //change currentRoom variable
      currentRoom=this.innerHTML.toLowerCase();
      console.log(currentRoom);
      //randomly pick a color for new room
      newImagePath="url('bgs/"+currentRoom+"/"+sevenColors[Math.floor(Math.random()*sevenColors.length)]+".jpg')";
      console.log(newImagePath);
      $('.room-'+currentRoom).css({ "background-image": newImagePath });
      //custom-change palette based on room
      if((currentRoom=="living-room")||(currentRoom=="bedroom")||(currentRoom=="kitchen")){
        $('#color-red img').attr("src","bgs/colorbox/red-light.png");
        $('#color-blue img').attr("src","bgs/colorbox/blue-light.png");
        $('#color-green img').attr("src","bgs/colorbox/green-light.png");
        $('#color-yellow img').attr("src","bgs/colorbox/yellow-light.png");
        $('#color-violet img').attr("src","bgs/colorbox/violet-light.png");
        $('#color-light-violet img').attr("src","bgs/colorbox/light-violet-light.png");
        if(currentRoom=="kitchen"){
          $('#color-light-yellow img').attr("src","bgs/colorbox/light-yellow-light.png");
        }
        else{
          $('#color-light-yellow img').attr("src","bgs/colorbox/light-yellow.png");
        }
      }
      else{
        //defaults
        $('#color-red img').attr("src","bgs/colorbox/red.png");
        $('#color-blue img').attr("src","bgs/colorbox/blue.png");
        $('#color-green img').attr("src","bgs/colorbox/green.png");
        $('#color-yellow img').attr("src","bgs/colorbox/yellow.png");
        $('#color-light-yellow img').attr("src","bgs/colorbox/light-yellow.png");
        $('#color-violet img').attr("src","bgs/colorbox/violet.png");
        $('#color-light-violet img').attr("src","bgs/colorbox/light-violet.png");
      }
    });

    /* code for color box */
    $('.color').click(function () {
        // hide the choose-color message
        $('.choose-color').fadeOut(100);
        $('.choose-color-mini').fadeOut(100);
        console.log($(this)[0].id);
        newImagePath="url('bgs/"+currentRoom+"/"+$(this)[0].id+".jpg')";
        console.log(newImagePath);
        /* $('.launch').css({ "background-image": newImagePath }); */
        $('.room-'+currentRoom).css({ "background-image": newImagePath });
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
            //$('.view').load('views/services.html');
            $.get("views/services.html", function (data) {
                $('.view').html(data);
            });
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
        var time = 250; // delay time
        var distance = 220; // delta point
        // Dom where it will apply
        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, {
            duration: time,
            easing: 'easeOutCirc'
        });
    }

    
    // Create cross browser requestAnimationFrame method:
    window.requestAnimationFrame = window.requestAnimationFrame
     || window.mozRequestAnimationFrame
     || window.webkitRequestAnimationFrame
     || window.msRequestAnimationFrame
     || function (f) { setTimeout(f, 1000 / 60) }

   

    function parallaxbubbles() {
        var slide1 = document.getElementById('slide-1-text');
        var slide3 = document.getElementById('slide-3-text');
        var slide5 = document.getElementById('slide-5-text');

        var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 

        if (slide1 != null) {
            slide1.style.top = scrolltop * 0.6 + 'px';
        }
    }

    window.addEventListener('scroll', function () { // on page scroll
        requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
    }, false)

});
