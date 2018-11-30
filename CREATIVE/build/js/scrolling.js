var NavLinks = document.querySelectorAll(".header-nav_links > a");


window.addEventListener("click", function(evt) {

    NavLinks.forEach(function(item, i, arr) {
        if (evt.target == item) {
            evt.preventDefault();

            var V = 0.3;
            var w = window.pageYOffset, // производим прокрутка прокрутка
                hash = item.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash // URL с хэшем
                }
            }




        }
    });
}, true);