jQuery(document).ready(function () {
    /* Custom function */
    let $logo = $('#logo');
    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
    // Show logo
    $('.menu .tabs a').click(function () {
        $logo.fadeIn('slow');
    });
    // Hide logo
    $('.tab-profile').click(function () {
        $logo.fadeOut('slow');
    });

    /* MENU */

    
    let $content = $("#content");

    // Run easytabs
    $content.easytabs({
        animate: true,
        updateHash: false,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 600,
        tabs: ".tmenu",
        tabActiveClass: 'active',
    });

    // Hover menu effect
    $content.find('.tabs li a').hover(
        function () {
            $(this).stop().animate({ marginTop: "-7px" }, 200);
        }, function () {
            $(this).stop().animate({ marginTop: "0px" }, 300);
        }
    );
});

