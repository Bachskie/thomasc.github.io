document.addEventListener('DOMContentLoaded', function() {
    var scrollDownArrow = document.querySelector('.scrollDownArrow');

    window.addEventListener('scroll', function() {
        // Adjust the value '100' to the desired scroll distance in pixels
        if (window.pageYOffset > 2200) {
            scrollDownArrow.style.opacity = '0';
        } else {
            scrollDownArrow.style.opacity = '1';
        }
    });
});
