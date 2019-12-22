 $(document).ready(function(){
      $('.team-slider__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000
      });
    });
    $(document).ready(function(){
      $('.advantages__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        prevArrow:false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint:  1201,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              prevArrow: false,
               nextArrow: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              prevArrow: false,
              nextArrow: false
            }
          },
          {
            breakpoint: 4000,
            settings: "unslick"
          },

        ]
      });

    });
    $(document).ready(function(){
      $('.services__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        infinite: false,
        prevArrow:false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 4000,
            settings: "unslick"
          },
          {
            breakpoint:  1201,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              prevArrow: false,
               nextArrow: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              prevArrow: false,
               nextArrow: false
            }
          }
        ]
      });

    });
    $(document).ready(function(){
      $('.portfolio__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        prevArrow:false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              prevArrow: false,
               nextArrow: false
            }
          },
          {
            breakpoint:  1201,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              prevArrow: false,
               nextArrow: false
            }
          },

          {
            breakpoint: 4000,
            settings: "unslick"
          },

        ]
      });

    });

