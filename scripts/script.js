$(document).ready(function() {   
       $(".loading-page").fadeOut(1000);

       // handle menu navigation 
       $(".btn-menu").click(function(e){
              $(".nav-contact").toggleClass("active")
       })


       $(document).click(function(e){
              const NAV_CONTACT = document.querySelector(".nav-contact");

              if (
                     !NAV_CONTACT.contains(e.target) && 
                     !e.target.classList.contains("btn-menu") &&
                     !e.target.classList.contains("menu")
              ) 
                     NAV_CONTACT.classList.remove("active");
  
       })


       // scroll to top
       let lastScrollY = window.scrollY;
       $(window).scroll(function() {
              
              if(window.scrollY < 400) 
                     $(".navigation")
                            .removeClass("active")
                            .css("transform","translateY(0px)");      
              
              
                     
              else if (window.scrollY < lastScrollY) 
                     $(".navigation")
                            .addClass("active")
                            .css("transform","translateY(0px)");
              

              else 
                     $(".navigation")
                            .removeClass("active")
                            .css("transform","translateY(-140px)");
              

              lastScrollY = window.scrollY;

              // handle menu navigation when scroll
              $(".nav-contact").removeClass("active")
       });


       // sliders
       if($('.owl-carousel').length) {
              $('.owl-carousel').owlCarousel({
                     rtl:true,
                     loop:true,
                     lazyLoad:true,
                     autoplay:true,
                     autoplayTimeout:3000,
                     autoplayHoverPause:false,
                     margin:52,
                     responsive:{
                            0:{
                                   items:1
                            },
                            600:{
                                   items:2
                            },
                            1000:{
                                   items:4
                            }
                     }
              })

              // solve problem accessibility owl slider
              $("button.owl-dot").attr("aria-label", "button slider")
       }



       // handle icons fixed screen
       $(window).scroll(function() {          
              if(window.scrollY < 700) {
                     $("a.icon-call").removeClass("active")
                     $("div.icon-whatsapp").removeClass("active")
              }

              else {
                     $("a.icon-call").addClass("active")
                     $("div.icon-whatsapp").addClass("active")
              }
       })

       
       // handle button whatsapp fixed screen
       $("div.icon-whatsapp").click(()=> {
              $("div.icon-whatsapp").addClass("active-show");
       })

       $("div.icon-whatsapp .header button").click(function (e) {
              e.stopPropagation()
              $("div.icon-whatsapp").removeClass("active-show");
       });
})

       