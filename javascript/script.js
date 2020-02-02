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
// navigation ends here!
    
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

//scrollbar smooth scrolling and cutom scroll bar
$(function () {
  var ua = window.navigator.userAgent;
  //$('#d1i').text('Native: ' + ua)
 
  $('#d3').jScrollPane({
    //showArrows: true,
    horizontalGutter: 30,
			verticalGutter: 30
      
    });
  
  
  
  $('#d4')
  .css('position','absolute')
  .css('overflow','hidden')
  .perfectScrollbar();
  
  $('#d5')
  //.css('position','absolute')
  //.css('margin-left','140px') // ???
  .niceScroll({autohidemode:false});
  
  $('#d6').mCustomScrollbar({
    axis:"yx",
					//theme:"3d",
					scrollInertia:550,
    scrollbarPosition:"outside"
  });
  
  $('#d7').lionbars();
  
  $('#d8').scroller();
  
  // errors:
  //$('#d9').tinyscrollbar();
  
  $('#d10').addClass('tse-scrollable');
  $('#d10i').addClass('tse-content');
  $('#d10').TrackpadScrollEmulator();
  
});
