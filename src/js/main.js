import bootstrap from 'bootstrap';
import QuickMenu from "quickmenu";

new QuickMenu();

// Smooth scroll on anchor links.
document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', function (e) { // Listen to all hyperlinks.
        let href = e.target.getAttribute('href');
        if (href.charAt(0) == '#') { // If anchor link.
            e.preventDefault();
            if (href.length == 1) { // Go to top.
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            } else {
                document.querySelector(href).scrollIntoView({
                  behavior: 'smooth'
                });
            }
        }
    })
});
