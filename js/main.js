document.addEventListener('DOMContentLoaded', function() {

    // -- Prices highlighter --

    function highlightPrice(params) {
        let pricesButtons = document.querySelectorAll('.segment__button');
        let pricesSegments = document.querySelectorAll('.segment');
    
        for (let i = 0; i < pricesButtons.length; i++) {
            pricesButtons[i].addEventListener('mouseover', function() {
                pricesSegments[i].classList.toggle('segment-highlight');
            });
            pricesButtons[i].addEventListener('mouseout', function() {
                pricesSegments[i].classList.toggle('segment-highlight');
            });
        }
    }
    highlightPrice();
    
    // -- Checkbox tick --

    function checkedCheckbox() {
        let checkboxPersonalData = document.getElementById('indicator');
        let checkboxTransport = document.getElementById('indicator2');
        let backgroundUrl = './images/form_ok.jpg';
    
        checkboxPersonalData.style.background = 'none';
        checkboxTransport.style.background = 'none';
    
        function changeCheckboxStyle(element) {
            if (element.style.background === 'none') {
                element.style.background = `url(${backgroundUrl})`;
                element.style.backgroundPosition = "center center";
                element.style.backgroundRepeat = "no-repeat";
                element.style.backgroundSize= "90%";
                element.dataset.ticked = 'true';
            } else {
                element.style.background = 'none';
                element.dataset.ticked = 'false';
            }
        }
    
        checkboxPersonalData.addEventListener('click', function() {
            changeCheckboxStyle(checkboxPersonalData);
        });
    
        checkboxTransport.addEventListener('click', function() {
            changeCheckboxStyle(checkboxTransport);
        });
    }
    checkedCheckbox();
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
                // console.log(mq);
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
                // console.log(mq);
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
    
    // -- Order List --
    
    function orderFunction() {
        let chairsTypeList = $('#chairsType');
        let chairsColorList = $('#chairsColor');
        let chairsMaterialList = $('#chairsMaterial');
        let transportCheckbox = $('#indicator2');
        let summaryModel = $('.summary__model');
        let summaryColor = $('.summary__color');
        let summaryMaterial = $('.summary__material');
        let summaryTransport = $('.summary__transport');
        let orderImage = $('.order__image').find('img');

        let result = 0;
        let resultToShow = $('.summary__result');
        
        chairsTypeList.on('change', function(){
            let modelPrice = $('.model__price');
            if ($(this).val() === 'Chair Clair' ) {
                summaryModel.text($(this).val());
                modelPrice.text('200');
                orderImage.attr('src', 'images/black_chair.png');
            } else if ($(this).val() === 'Chair Margarita') {
                summaryModel.text($(this).val());
                modelPrice.text('300');
                orderImage.attr('src', 'images/orange.png'); 
            } else {
                summaryModel.text($(this).val());
                modelPrice.text('250');
                orderImage.attr('src', 'images/red.png');
            }
        });
        
        chairsColorList.on('change', function() {
            if ($(this).val() === 'Czarny' ) {
                summaryColor.text($(this).val());
            } else if ($(this).val() === 'Pomarańczowy') {
                summaryColor.text($(this).val());
            } else if ($(this).val() === 'Czerwony') {
                summaryColor.text($(this).val());
            }
        });
        
        chairsMaterialList.on('change', function() {
            let materialPrice = $('.material__price');
            if ($(this).val() === 'Tkanina' ) {
                summaryMaterial.text($(this).val());
                materialPrice.text('0');  
            } else {
                summaryMaterial.text($(this).val());
                materialPrice.text('80'); 
            }
        });
        
        

        $('select').on('change', function() {
            let typePrice = $('#chairsType option:selected').data('price');
            let materialPrice = $('#chairsMaterial option:selected').data('price');
            result = parseInt(typePrice) + parseInt(materialPrice);
            resultToShow.text(result); 
        });

        transportCheckbox.on('click', function() {
            let transportPrice = $('.transport__price');
            if ($(this).attr('data-ticked') === 'true') {
                transportPrice.text('60');
                result += 60;
                resultToShow.text(result);
            } else {
                transportPrice.text('0');
                result -= 60;
                resultToShow.text(result);
            }
        }); 
    }
    orderFunction();

});
