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

$(function(){

function menuAnimation(){
    let headerNav = $('.header__nav');
    let companyNav = headerNav.find('div');
    let subMenu = $('.menu');

    
    companyNav.on('mouseenter', function() {
        $(this).find('.menu').fadeIn(100);
    });  
    companyNav.on('mouseleave', function() {
        $(this).find('.menu').fadeOut('slow');
    }); 
};

menuAnimation();

function slider() {
    let previousArrow = $('.landing').children().first();
    let nextArrow = $('.landing').children().last();
    let imageContainer = $('.landing__image');
    let images = imageContainer.children();
    let counter = 0;

    console.log(images[counter]);
    
    nextArrow.on('click', function() {
        if (counter >= images.length - 1) {
            images.eq(2).addClass('display-none');
            images.eq(1).addClass('display-none');
            images.eq(0).removeClass('display-none');
            counter = 0;
        } else {
            images.eq(counter).addClass('display-none');
            counter++;
            images.eq(counter).removeClass('display-none');
        }
    });

    previousArrow.on('click', function() {
        if (counter <= 0) {
            images.eq(0).addClass('display-none');
            images.eq(1).addClass('display-none');
            images.eq(2).removeClass('display-none');
            counter = 2;
        } else {
            images.eq(counter).addClass('display-none');
            counter--;
            images.eq(counter).removeClass('display-none');
        }
    });
}

slider();

});
