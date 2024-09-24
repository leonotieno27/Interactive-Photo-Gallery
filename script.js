const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//filter images
$(document).ready(function () {
    $('#check-value').click(function () {
        var chosenValue = $("input[type='radio'][name='genre']:checked").val();
        // $('#replace-photos').text('hello world ' + chosenValue)

        var images = document.getElementsByClassName('images');

        Array.from(images).forEach(function (image) {
            if (image.id === chosenValue) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }

        });
    });
});

//show all images
$(document).ready(function () {
    $('#reset').click(function () {
        
        var images = document.getElementsByClassName('images');

        Array.from(images).forEach(function (image) {

            image.style.display = 'block';

        });
    });
});
