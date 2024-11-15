document.addEventListener('DOMContentLoaded', function () {
    const toggleElements = document.querySelectorAll('.toggle');

    toggleElements.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('dark');

        });
    });
});