"use strict"


function showMenu() {
   if ($(window).width() > 996.98) {
      $('.header__burger').click(function () {
         $('.header__burger, .header__menu-links').toggleClass('active')
         $('body').toggleClass('lock')
      })

      $('.header__menu-links').click(function (event) {
         if (event.target.tagName === 'A' || 'img') {
            $('.header__burger, .header__menu-links').toggleClass('active')
            $('body').toggleClass('lock')
         }
      })

   }
   if ($(window).width() < 996.98) {
      $('.header__menu').append($('.header__menu-links'))
      $('.header__burger').click(function () {
         $('.header__burger, .header__menu').toggleClass('active')
         $('body').toggleClass('lock')
      })

      $('.header__menu').click(function (event) {
         if (event.target.tagName === "A" || 'img') {
            $('.header__burger, .header__menu').toggleClass('active')
            $('body').toggleClass('lock')
         }
      })

   }

   if ($(window).width() < 576.98) {

      $('.header__menu').append($('.header__class'))
      $('.header__row').append($('.header__popup'))


   }
   $(document).ready(function () {
      let width = $(window).width();

      $(window).resize(function () {
         if ($(window).width() <= 996.98 && width > 996.98) {
            //reload
            location.reload();
         }
         else if ($(window).width() > 996.98 && width <= 996.98) {
            //reload
            location.reload();
         }
         else if ($(window).width() <= 576.98 && width > 576.98) {
            //reload
            location.reload();
         }
         else if ($(window).width() > 576.98 && width <= 576.98) {
            //reload
            location.reload();
         }
      })

   })
}
showMenu()


function showPopup() {
   $('.header__class-btn').click(function () {
      $('.header__popup').toggleClass('active')
   })
   $('.header__popup-close').click(function () {
      $('.header__popup').removeClass('active')
   })
}
showPopup()


new Swiper('.offer-slider', {

   spaceBetween: 33,
   navigation: {
      nextEl: '.offer-next',
      prevEl: '.offer-prev'
   },

   breakpoints: {
      1110: {
         slidesPerView: 3,
      },
      576: {
         slidesPerView: 2,
      },
   }
})



function showTime() {
   $('.monthly').addClass('active')
   $('.checkbox').click(function () {
      $('.monthly').toggleClass('active')
      $('.yearly').toggleClass('active')
      if ($('.yearly').hasClass('active')) {
         $('.price__monthly').removeClass('active').addClass('none')
         $('.price__yearly').removeClass('none').addClass('active')
      } else if ($('.monthly').hasClass('active')) {
         $('.price__monthly').addClass('active').removeClass('none')
         $('.price__yearly').addClass('none').removeClass('active')
      }

   })

}
showTime()


let reviewsSlider = new Swiper('.reviews-slider', {
   slidesPerView: 1,
   simulateTouch: false,
   spaceBetween: 10,

})
let reviewsText = new Swiper('.reviews-text', {
   slidesPerView: 1,
   navigation: {
      prevEl: '.reviews-prev',
      nextEl: '.reviews-next'
   }
})

reviewsSlider.controller.control = reviewsText;
reviewsText.controller.control = reviewsSlider;



function calculate() {
   $('.metric-box, .metric').addClass('active')
   $('.imperial').click(function () {
      $('.imperial-box, .imperial').addClass('active')
      $('.metric-box, .metric').removeClass('active')
   })
   $('.metric').click(function () {
      $('.imperial-box, .imperial').removeClass('active')
      $('.metric-box, .metric').addClass('active')
   })
}
calculate()

