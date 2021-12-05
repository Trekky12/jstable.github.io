'use strict';


/**
 * mobile navigation
 */
const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('site-navigation');
const menuList = navigation.getElementsByTagName('ul')[0];
const body = document.getElementsByTagName("BODY")[0];

menuButton.addEventListener('click', function (evt) {
    if (navigation.classList.contains('toggled')) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuList.setAttribute('aria-expanded', 'false');
    } else {
        menuButton.setAttribute('aria-expanded', 'true');
        menuList.setAttribute('aria-expanded', 'true');

        //@see https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    navigation.classList.toggle("toggled");
    menuButton.classList.toggle("open");
    body.classList.toggle("mobile-navigation-open");
});