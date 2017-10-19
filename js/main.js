document.addEventListener('DOMContentLoaded', function() {

    // -- Prices highlighter --

    let pricesButtons = document.querySelectorAll('.segment__button');
    
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

    // -- Checkbox tick --

    let checkboxPersonalData = document.getElementById('indicator');
    let checkboxTransport = document.getElementById('indicator2');
    let backgroundUrl = './images/form_ok.jpg';

    checkboxPersonalData.style.background = 'url("none")';
    checkboxTransport.style.background = 'url("none")';

    function changeCheckboxStyle(element) {
        if (element.style.background === 'url("none")') {
            element.style.background = `url(${backgroundUrl})`;
            element.style.backgroundPosition = "center center";
            element.style.backgroundRepeat = "no-repeat";
            element.style.backgroundSize= "90%";
        } else {
            element.style.background = 'url("none")';
        }
    }

    checkboxPersonalData.addEventListener('click', function() {
        changeCheckboxStyle(checkboxPersonalData);
    });

    checkboxTransport.addEventListener('click', function() {
        changeCheckboxStyle(checkboxTransport);
    });
});

$(function(){

    // -- Animated menu --

    function menuAnimation() {
        let headerNav = $('.header__nav');
        let companyNav = headerNav.find('div');
    
        if (matchMedia) {
            let mq = window.matchMedia("screen and (max-width: 402px)");
            mq.addListener(WidthChange);
            WidthChange(mq);
        }

        function WidthChange(mq) {
            if (mq.matches === false) {
                console.log(mq);
                companyNav.off('click'); 
                companyNav.on('mouseenter', function() {
                    let menu = $(this).find('.menu');
                    menu.fadeIn(100);
                });  
                companyNav.on('mouseleave', function() {
                    let menu = $(this).find('.menu');
                    menu.fadeOut('slow');
                }); 
            }  else if (mq.matches === true) {
                console.log(mq);
                companyNav.off('mouseenter'); 
                companyNav.off('mouseleave'); 
                companyNav.on('click', function() { 
                    let menu = $(this).find('.menu');
                    if (menu.css('display') === 'none') {
                        menu.fadeIn(100);
                    } else {
                        menu.fadeOut(100);
                    }
                }); 
            }                                             
        }     
    }
    menuAnimation();

    // -- Slider --

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

    // -- Image text hider --

    function textHider() {
        let images = $('.pictures__images');

        if (matchMedia) {
            let mq = window.matchMedia("screen and (min-width: 420px)");
            mq.addListener(WidthChange);
            WidthChange(mq);
        }

        function WidthChange(mq) {
            if (mq.matches) {
                images.on('mouseenter', function() {
                    let imagesText = $(this).children().eq(1);
                    imagesText.fadeOut(100);
                });
        
                images.on('mouseleave', function() {
                    let imagesText = $(this).children().eq(1);
                    imagesText.fadeIn('slow');
                });
            } else {
                images.off()
            } 
        }
    }
    textHider();
});
