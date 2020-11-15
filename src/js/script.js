$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.png" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.png" ></button>',
        responsive:[
            {     
                breakpoint: 990,
                settings: {
                    dots: true,
                    arrows: false}
                }
        ]

    });



// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
//     // data-controls
//     // controlsText: [
//     //     '<img src="img/slider/left.png">',
//     //     '<img src="img/slider/right.png">'
//     // ]
//   });

//   document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });
//   document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });

// Карусель-OWL (залупа)

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         responsiveClass:true,
//         responsive : {
//             1200 : {
//                 items:1,
//                 nav: true,
//                 loop: true,
//                 navText: ['<img src="img/slider/left.png" >', '<img src="img/slider/right.png" >']
           
                
//             },
//             // breakpoint from 480 up
//             980 : {
//                 items:1,
//                 nav: false,
//                 dots: true
                
                
//             },
//             // breakpoint from 768 up
//             768 : {
//                 nav: false
            
                
//             }
//         }
    
        
//     });



    // TAB-ы
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    //   $('.catalog-item__link').each(function(i){
    //       $(this).on('click', function(e){
    //           e.preventDefault();
    //           $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //           $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //       })
    //   });

        function toggleSlide(item) { 
            $(item).each(function(i) {  
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
                })
            });
        };
        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');
     
    });
    