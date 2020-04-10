(function () {
    var scrollBody = $('html, body');

    $('#home').click(function () {
        scrollBody.animate({
            scrollTop: 0
        }, 500);
    });
    $('#about').click(function () {
        scrollBody.animate({
            scrollTop: $('#about-section').offset().top - 80
        }, 500);
    });
    $('#process').click(function () {
        scrollBody.animate({
            scrollTop: $('#process-section').offset().top - 80
        }, 500);
    });
    $('#projects').click(function () {
        scrollBody.animate({
            scrollTop: $('#projects-section').offset().top - 80
        }, 500);
    });
})();