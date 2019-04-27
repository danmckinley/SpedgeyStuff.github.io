// (UN)PINNING ELEMENTS with ScrollMagic
$(document).ready(function(){
    // Create variables to store the height.
    var artworkHeight = $("#awTrigger").height() - $(window).height();
    var softwareHeight = $("#swTrigger").height() - $(window).height();
    
    // Functions to retreive the variables.
    function getArtworkHeight() { return artworkHeight; }
    function getSoftwareHeight() { return softwareHeight; }
    
    // Update variables on window resize.
    $(window).resize(function() {
        artworkHeight = $("#awTrigger").height() - $(window).height();
        softwareHeight = $("#swTrigger").height() - $(window).height();
    });
    
    // Initialize controller
    var controller = new ScrollMagic.Controller();
	
    // Pinning Artwork
    var artwork = new ScrollMagic.Scene({
        triggerElement: "#awTrigger",
        triggerHook: 0,
        duration: getArtworkHeight
    })
    .setPin("#awPinned", {pushFollowers: false})
    .addTo(controller);

    // Pinning Software
    var software = new ScrollMagic.Scene({
        triggerElement: "#swTrigger",
        triggerHook: 0,
        duration: getSoftwareHeight
    })
    .setPin("#swPinned", {pushFollowers: false})
    .addTo(controller);

// SMOOTH SCROLLING with jQuery
// Credit: https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
                ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
            }, 500, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                };
                });
            }
        }   
    });
});