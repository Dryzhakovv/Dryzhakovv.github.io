let quickMenuList = document.querySelector(".header-menu__wrapper");
let quickMenuItems = document.querySelectorAll(".header-menu__item");
let mainNavMenuItems = document.querySelectorAll(".header-menu__item"),
    mainNavMenu = document.querySelector(".header-menu__wrapper");
quickMenuList.addEventListener("click", function(e) { quickMenuItems.forEach(function(n, t, a) { if (e.target == n) { e.preventDefault(); var i = .3,
                r = window.pageYOffset,
                u = n.href.replace(/[^#]*(.*)/, "$1"),
                o = document.querySelector(u).getBoundingClientRect().top,
                c = null;
            requestAnimationFrame(function e(n) { null === c && (c = n); var t = n - c,
                    a = Math.min(r + t / i, r + o);
                window.scrollTo(0, a), a != r + o && requestAnimationFrame(e) }) } }) }, !0), mainNavMenu.addEventListener("click", function(e) { mainNavMenuItems.forEach(function(n, t, a) { if (e.target == n) { e.preventDefault(); var i = .3,
                r = window.pageYOffset,
                u = n.href.replace(/[^#]*(.*)/, "$1"),
                o = document.querySelector(u).getBoundingClientRect().top,
                c = null;
            requestAnimationFrame(function e(n) { null === c && (c = n); var t = n - c,
                    a = Math.min(r + t / i, r + o);
                window.scrollTo(0, a), a != r + o && requestAnimationFrame(e) }) } }) }, !0);