document.addEventListener('DOMContentLoaded', function () {
    console.log('hello world from index-npm.js');
    var accordionHeaders = document.querySelectorAll('.accordion-toggle');

    for (var i = 0; i < accordionHeaders.length; i++) {
        accordionHeaders[i].addEventListener('click', toggleAccordion);
    }

    function toggleAccordion() {
        var content = this.nextElementSibling;
        var isActive = this.classList.contains('active');
        var parent = this.closest('[data-parent="accordion-group"]');

        closeAllAccordions(parent);

        if (!isActive) {
            this.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }

    function closeAllAccordions(parent) {
        var accordions = parent.querySelectorAll('.accordion-toggle');
        for (var i = 0; i < accordions.length; i++) {
            var content = accordions[i].nextElementSibling;
            accordions[i].classList.remove('active');
            content.style.maxHeight = null;
        }
    }
});