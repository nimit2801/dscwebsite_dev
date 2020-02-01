$(window).scroll(function() {
    if ($(this).scrollTop()>100){  
       $('.dsc-text').text("DSCNUV")
          // $('.dsc').children('img').addClass("dsc-text");
        $('.dsc').children('#logo-main').addClass("logo-sm");
         
        //   $('.nav-top').addClass('menu-sm');
        //   $('.nav-top').addRemove('menu-lg');

      }
    else{
        $('.dsc-text').empty();
        // $('.dsc').prepend($('<img>',{id:'logo-lg',src:'logo.png'}))
          $('.dsc').children('#logo-main').removeClass("logo-sm");
          //$('.dsc').children('p').RemoveClass("slide-right");
          
        //   $('.nav-top').addClass('menu-lg');
        //   $('.nav-top').addRemove('menu-sm');
        
      }
    });

//     $(window).scroll(function(){
//         if($(this).scrollTop()==0){
//             $(".color-left").addClass("slide-right");
//             $(".color-right").addClass("slide-left");
//         }
//         else{
//             $(".color-left").RemoveClass("slide-right");
//             $(".color-right").addClass("slide-left");
//         }
// });
