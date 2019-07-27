window.onload = function () {
    // modal
    var overlay = $('#overlay');
    function openModal(modal) {
        overlay.fadeIn(400, function () {
            $(modal)
                .css('display', 'flex')
                .animate({ opacity: 1 }, 200);
        });
    };

    function closeModal(modal) {
        $(modal)
            .animate({ opacity: 0 }, 200, function () {
                $(this).hide();
                overlay.fadeOut(400);
            });
    };

    // esc press
    $(document).keydown(function (e) {
        if (e.keyCode === 27)
            closeModal('.modal');
    });
    overlay.on("click", function () {
        closeModal('#modal');
    });
    $('.video-button').on('click', function () {
        openModal('#modal');
    });

}


