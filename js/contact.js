//Form Validation
(function () {
    'use strict';

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//Back-to-Top button
const btn = $('#btt-button');

$(window).scroll(function() {
    btn.toggleClass('show', $(window).scrollTop() > 100);
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 100);
});