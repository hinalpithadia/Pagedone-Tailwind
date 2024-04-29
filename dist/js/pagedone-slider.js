/*=====deafult slides======*/
var swiper = new Swiper(".default-carousel", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".default-carousel .swiper-button-next",
        prevEl: ".default-carousel .swiper-button-prev",
    },
});
/*=====Multiple slides======*/
var swiper = new Swiper(".multiple-slide-carousel", {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".multiple-slide-carousel .swiper-button-next",
        prevEl: ".multiple-slide-carousel .swiper-button-prev",
    },
    breakpoints: {
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1028: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        990: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});
/*=====fraction slides======*/
var swiper = new Swiper(".fraction-slide-carousel", {
    loop: true,
    fraction:true,
    navigation: {
        nextEl: ".fraction-slide-carousel .swiper-button-next",
        prevEl: ".fraction-slide-carousel .swiper-button-prev",
    },
    pagination: {
        el: '.fraction-slide-carousel .swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return number;
        }
      },
});

/*=======Progress slides======*/
var swiper = new Swiper(".progress-slide-carousel", {
    loop: true,
    fraction:true,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".progress-slide-carousel .swiper-pagination",
        type: "progressbar",
      },
});

/*=======Vertical slides======*/
var swiper = new Swiper(".vertical-slide-carousel", {
    loop: true,
    direction: 'vertical',
    mousewheelControl: true,
    mousewheel: {
        releaseOnEdges: true,
    },
    spaceBetween: 30,
    grabCursor: true,
      pagination: {
        el: ".vertical-slide-carousel .swiper-pagination",
        clickable: true,
    },
});

/*=======Centered slider======*/
var swiper = new Swiper(".centered-slide-carousel", {
    centeredSlides: true,
    paginationClickable: true,
    loop: true,
    spaceBetween: 30,
    slideToClickedSlide: true,
      pagination: {
        el: ".centered-slide-carousel .swiper-pagination",
        clickable: true,
    },
   
    breakpoints: {
        1920: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1028: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        990: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

