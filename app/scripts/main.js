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

/*Rate Calculator Logic */
var paintData = {
    "basic":{
      "durability":"3-5 Years", "voC":"Low-Med", "keyFeat":"Budget Friendly Paint",
      "rate": {"hyderabad": 9.50, "bengaluru": 10.50, "chennai": 13.50}
    },
    "classic":{
      "durability":"3-5 Years", "voC":"Low", "keyFeat":"Smooth Finish with some Washability",
      "rate": {"hyderabad": 11, "bengaluru": 11, "chennai": 19}
    },
    "glossy":{
      "durability":"5 Years", "voC":"Low", "keyFeat":"Super Smooth Wall Finish with a Rich Feel",
      "rate": {"hyderabad": 14, "bengaluru": 15.50, "chennai": 21}
     },
    "eco":{
      "durability":"5+ Years", "voC":"None", "keyFeat":"Eco-friendly, No VOCs, No Odour, and Smooth Finish",
      "rate": {"hyderabad": 16.50, "bengaluru": 17.50, "chennai": 24.50}
     }
};
function calculateRate(){
  //console.log("In Rate Calculation Function");
  var carpetArea = document.getElementById("quoteCarpetArea").value;
  var city = document.getElementById("quoteCity").value;
  var paint = document.getElementById("quotePaint").value;
  var totalArea = document.getElementById("quoteTotalArea");
  var durability = document.getElementById("quoteDurability");
  var voC = document.getElementById("quoteVoC");
  var keyFeat = document.getElementById("quoteKeyFeat");
  var rate = document.getElementById("quoteRate");
  var total = document.getElementById("quoteTotal");
  if((carpetArea!=null)&&(carpetArea!="")&&(!isNaN(carpetArea))){
    totalArea.innerHTML=carpetArea*2.5;
    durability.innerHTML=paintData[paint].durability;
    voC.innerHTML=paintData[paint].voC;
    keyFeat.innerHTML=paintData[paint].keyFeat;
    rate.innerHTML="Rs. "+paintData[paint].rate[city];
    total.innerHTML="<h4 style='text-align:left;'>Rs. "+carpetArea*2.5*paintData[paint].rate[city]+"</h4>";
  }
  else{
    totalArea.innerHTML=durability.innerHTML=voC.innerHTML=keyFeat.innerHTML=rate.innerHTML=total.innerHTML="--";
  }
}

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

    /* auto-scroll for testimonials */
    $('#myCarouse2').carousel({
      interval: 7000,
      cycle: true
    });

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
      /* ====== Removing cusom palette
      if((currentRoom=="living-room")||(currentRoom=="bedroom")||(currentRoom=="kitchen")){
        $('#color-red img').attr("src","images/colorbox/red-light.png");
        $('#color-blue img').attr("src","images/colorbox/blue-light.png");
        $('#color-green img').attr("src","images/colorbox/green-light.png");
        $('#color-yellow img').attr("src","images/colorbox/yellow-light.png");
        $('#color-violet img').attr("src","images/colorbox/violet-light.png");
        $('#color-light-violet img').attr("src","images/colorbox/light-violet-light.png");
        if(currentRoom=="kitchen"){
          $('#color-light-yellow img').attr("src","images/colorbox/light-yellow-light.png");
        }
        else{
          $('#color-light-yellow img').attr("src","images/colorbox/light-yellow.png");
        }
      }
      else{
        //defaults
        $('#color-red img').attr("src","images/colorbox/red.png");
        $('#color-blue img').attr("src","images/colorbox/blue.png");
        $('#color-green img').attr("src","images/colorbox/green.png");
        $('#color-yellow img').attr("src","images/colorbox/yellow.png");
        $('#color-light-yellow img').attr("src","images/colorbox/light-yellow.png");
        $('#color-violet img').attr("src","images/colorbox/violet.png");
        $('#color-light-violet img').attr("src","images/colorbox/light-violet.png");
      }
      =======================================================================*/
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
            offset: {top:0}
        });
    }

    /* front page display animations */
    $('.cool-display').delay(200).fadeIn(500);

    /* Display on scroll animation
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

    });
    */

    /* href change code */
    $(window).on('hashchange', function () {
        var hash = window.location.hash;
        hash = hash.replace("#", "");
        if (hash == 'services') {
            $('.view').html("...");
            $('.view').load('views/services.html', function () {
              $(".navbar-toggle").click();
            });
            /*$.get("views/services.html", function (data) {
            $('.view').html(data);
            });*/
        }
        else if (hash == 'get-a-quote') {
            $('.view').html("...");
            $('.view').load('views/get-a-quote.html', function () {
              $(".navbar-toggle").click();
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
        var time = 300; // delay time
        var distance = 200; // delta point
        // Dom where it will apply
        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, {
            duration: time,
            easing: 'easeOutCirc'
        });
    }

    $(window).scroll(function (event) {
        var servicemenu = $('.service-menu');
        if (servicemenu != null && servicemenu.offset()) {
            var top = servicemenu.offset().top;

            if (top < 80 && $(document).scrollTop() < 100) {
                servicemenu.animate({ "top": "84px" }, 100);
            }
            //else if (top > ($(document).scrollTop() - servicemenu.height())) {
            else if ($(document).scrollTop() > servicemenu.height()) {
                servicemenu.css("top", "0px");
            }
        }

        $('.anim').each(function () {
            var t = $(this).parent().offset().top - 60;
            if (y > t) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });


    $('.view').on('click', '.about-img', function (elem) {
        $('.team-desc').find('div').each(function () { console.log($(this)[0].style.visibility = 'hidden'); });
        switch (elem.target.id) {
            case "people-1": $('#team-desc-1')[0].style.visibility = 'visible'; break;
            case "people-2": $('#team-desc-2')[0].style.visibility = 'visible'; break;
            case "people-3": $('#team-desc-3')[0].style.visibility = 'visible'; break;
            default: break;
        }
    });
    /*

    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        var slide1 = document.getElementById('slide-1');
        if (st > lastScrollTop) {

        } else {

        }
        lastScrollTop = st;
    });
    */
});
