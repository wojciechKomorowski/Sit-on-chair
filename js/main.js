document.addEventListener('DOMContentLoaded', function() {
    let pricesButtons = document.querySelectorAll('.segment__button'),
        checkbox = document.getElementById('indicator'),
        checkboxImage = checkbox.querySelector('img');

        checkboxImage.style.display = 'none';

    function toggleClass0(element) {
        let pricesSegments = document.querySelectorAll('.segment');

        pricesSegments[0].classList.toggle('segment-highlight');
    }

    function toggleClass1(element) {
        let pricesSegments = document.querySelectorAll('.segment');

        pricesSegments[1].classList.toggle('segment-highlight');
    }

    function toggleClass2(element) {
        let pricesSegments = document.querySelectorAll('.segment');

        pricesSegments[2].classList.toggle('segment-highlight');
    }

    pricesButtons[0].addEventListener('mouseover', toggleClass0);
    pricesButtons[0].addEventListener('mouseout', toggleClass0);
    pricesButtons[1].addEventListener('mouseover', toggleClass1);
    pricesButtons[1].addEventListener('mouseout', toggleClass1);
    pricesButtons[2].addEventListener('mouseover', toggleClass2);
    pricesButtons[2].addEventListener('mouseout', toggleClass2);

    indicator.addEventListener('click', function() {
        if (checkboxImage.style.display === 'inline') {
            checkboxImage.style.display = 'none';
        } else {
            checkboxImage.style.display = 'inline';
        }
    });
});
