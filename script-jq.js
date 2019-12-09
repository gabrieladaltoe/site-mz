$(function () {
    $(".mapa-site").hide()

    $(".btn-port").hide();
    $(".btn-eng").show();
    $(".search_area").hide();


    $(".mailing_list-input").css({'color': '#fff', 'font-size':'13px'})

    $(".nav_btn-search").click(function(){
        $(".search_area").show(500);
        $('body').css('overflow','hidden');
    });

    $(".close-search").click(function(){
        $(".search_area").hide('slow');
        $('body').css('overflow','visible');
    });

    $(".menu-mobile").click(function(){
        $(".nav_menu").css({'display':'block'});
        $(".nav_menu").css({'transition': 'width 2s, height 4s'});
        $(".close-menu-mobile").css('display','block');
        $('body').css('overflow','hidden');
    })

    $(".close-menu-mobile").click(function(){
        if ($(window).width() <= 990){
            $(".nav_menu").css('display','none');
          } else if ($(window).width() < 990){
            $(".nav_menu").css('display','block');
          }
        
        $(".close-menu-mobile").css('display','none');
        $('body').css('overflow','visible');
    })


    
    // $(".item-menu").hover(
    //     function() {
    //         $(this).children("ul").slideDown(200);
    //     },
    //     function() {
    //         $(this).children("ul").slideUp(100);
    //     }
    // );


    $('.nav_lang').on('click', function(){
        $('.btn-port,.btn-eng').toggle();
      });

       
    $(".footer_links--text").click(function () {
        $(".mapa-site").show("slow")
    })

    $("#close-map").click(function () {
        $(".mapa-site").hide("slow")
    })

})