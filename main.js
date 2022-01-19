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


const shareButton = document.querySelector('.pulse-button');
const overlay = document.querySelector('.socialicons');

const url = window.document.location.href;

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: `${title}`,
            url: `${url}`
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        overlay.classList.add('show-share');
        shareButton.classList.add('show-share');
    }
})

// Share = {
//     facebook: function(purl, ptitle, pimg, text) {
// 		url  = 'http://www.facebook.com/sharer.php?s=100';
// 		url += '&p[title]='     + encodeURIComponent(ptitle);
// 		url += '&p[summary]='   + encodeURIComponent(text);
// 		url += '&p[url]='       + encodeURIComponent(purl);
// 		url += '&p[images][0]=' + encodeURIComponent(pimg);
// 		Share.popup(url);
//     },
//     linkedin: function(purl, ptitle, pimg, text) {
// 		url  = 'https://www.linkedin.com/cws/share?url=[LINK]';
// 		url += '&p[title]='     + encodeURIComponent(ptitle);
// 		url += '&p[summary]='   + encodeURIComponent(text);
// 		url += '&p[url]='       + encodeURIComponent(purl);
// 		url += '&p[images][0]=' + encodeURIComponent(pimg);
// 		Share.popup(url);
//     },
//     popup: function(url) {
// 		window.open(url,'','toolbar=0,status=0,width=626,height=436');
// 	}
// }
