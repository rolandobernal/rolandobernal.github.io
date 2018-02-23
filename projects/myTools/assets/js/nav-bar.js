// When the user scrolls down 64px from the top of the document, change the navbar background
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
        document.getElementById("myNavbar").style.backgroundColor = "rgba(10, 21, 37, 0.95)";
        document.getElementById("img-featured-navbar-sm").style.visibility = "visible";
        document.getElementById("img-featured-navbar-sm").style.opacity = "1";
        document.getElementById("img-featured-navbar-sm").style.transform = "scale(1,1)";
        document.getElementById("img-featured-header").style.transform = "scale(0.5,0.5)";
        document.getElementById("img-featured-header").style.visibility = "hidden";
    } else {
        document.getElementById("myNavbar").style.backgroundColor = "transparent";
        document.getElementById("img-featured-navbar-sm").style.transform = "scale(0.5,0.5)";
        document.getElementById("img-featured-navbar-sm").style.visibility = "hidden";
        document.getElementById("img-featured-navbar-sm").style.opacity = "0";
        document.getElementById("img-featured-header").style.visibility = "visible";
        document.getElementById("img-featured-header").style.opacity = "1";
        document.getElementById("img-featured-header").style.transform = "scale(1,1)";
    }
}
//To display Hamburger Menu Icon:
function toggleFunction() {
    var z = document.getElementById("nav-icon3");
    if (z.className === "menu-icon") {
        z.className += " open";
    } else {
        z.className = "menu-icon";
    }
}