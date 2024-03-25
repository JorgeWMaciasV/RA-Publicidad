   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var Links_dropdownToggle = document.querySelectorAll('#Links .dropdown-toggle');
      Links_dropdownToggle.forEach(item => 
      {
         var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
      });
      var Links_dropdown = document.querySelectorAll('#Links .dropdown');
      Links_dropdown.forEach(item => 
      {
         item.addEventListener('shown.bs.dropdown', function(e)
         {
            e.currentTarget.classList.add('show');
         });
         item.addEventListener('hidden.bs.dropdown', function(e)
         {
            e.currentTarget.classList.remove('show');
         });
      });
      var Banner_slider = new bootstrap.Carousel('#Banner_slider', {interval: 3000, pause: false});
      var Carousel2 = new bootstrap.Carousel('#Carousel2', {interval: 3000, pause: false});
   });
   
   $(document).ready(function()
   {
      $('#wb_service-text').addClass('visibility-hidden');
      $('#Bookmark_top').addClass('visibility-hidden');
      $('#wb_Card1').addClass('visibility-hidden');
      $('#wb_Card2').addClass('visibility-hidden');
      $('#wb_Card3').addClass('visibility-hidden');
      $('#JavaScript1').addClass('visibility-hidden');
      $('#wb_location-text').addClass('visibility-hidden');
      $('#wb_location-icon1').addClass('visibility-hidden');
      $('#wb_location-icon2').addClass('visibility-hidden');
      $('#wb_location-icon3').addClass('visibility-hidden');
      $('#wb_location-icon4').addClass('visibility-hidden');
      $('#wb_location-icon5').addClass('visibility-hidden');
      $('#wb_Card4').addClass('visibility-hidden');
      $('#wb_Card5').addClass('visibility-hidden');
      $('#wb_Card6').addClass('visibility-hidden');
      $("a[href*='#Encabezado']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Encabezado').offset().top }, 3000, 'swing');
      });
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top-88 }, 2000, 'easeOutCirc');
      });
      $("a[href*='#Nuestros_servicios']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Nuestros_servicios').offset().top-88 }, 600, 'easeOutCirc');
      });
      function onScrollNuestros_servicios()
      {
         var $obj = $("#wb_Nuestros_servicios");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      onScrollNuestros_servicios();
      $(window).scroll(function(event)
      {
         onScrollNuestros_servicios();
      });
      $("a[href*='#Nosotros']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Nosotros').offset().top-88 }, 2000, 'easeOutCirc');
      });
      function onScrollNosotros()
      {
         var $obj = $("#wb_Nosotros");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('Bookmark_top', 'animate-fade-in-up', 0, 1000);
         }
      }
      onScrollNosotros();
      $(window).scroll(function(event)
      {
         onScrollNosotros();
      });
      $("a[href*='#Informacion']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Informacion').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#Nuestros_clientes_flexbox']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Nuestros_clientes_flexbox').offset().top }, 2000, 'easeOutCirc');
      });
      $("a[href*='#Contactanos']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Contactanos').offset().top-88 }, 2000, 'easeOutCirc');
      });
      function onScrollservices_bookmark1()
      {
         var $obj = $("#wb_services-bookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_Card2', 'animate-fade-in-up', 500, 2000);
            AnimateCss('wb_Card3', 'animate-fade-in-up', 1000, 2000);
         }
      }
      onScrollservices_bookmark1();
      $(window).scroll(function(event)
      {
         onScrollservices_bookmark1();
      });
      function onScrolllocation_bookmark()
      {
         var $obj = $("#wb_location-bookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('JavaScript1', 'animate-fade-in', 0, 1500);
            AnimateCss('wb_location-text', 'animate-fade-in', 0, 1500);
            AnimateCss('wb_location-icon1', 'animate-fade-in', 0, 1500);
            AnimateCss('wb_location-icon2', 'animate-fade-in', 500, 1500);
            AnimateCss('wb_location-icon3', 'animate-fade-in', 1000, 1500);
            AnimateCss('wb_location-icon4', 'animate-fade-in', 1500, 1500);
            AnimateCss('wb_location-icon5', 'animate-fade-in', 2000, 1500);
         }
      }
      onScrolllocation_bookmark();
      $(window).scroll(function(event)
      {
         onScrolllocation_bookmark();
      });
      function onScrollBookmark1()
      {
         var $obj = $("#wb_Bookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card4', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_Card5', 'animate-fade-in-up', 500, 2000);
            AnimateCss('wb_Card6', 'animate-fade-in-up', 1000, 2000);
         }
      }
      onScrollBookmark1();
      $(window).scroll(function(event)
      {
         onScrollBookmark1();
      });
      $("#Popup_Vallas_publicitarias").dialog(
      {
         title: '',
         width: 412,
         height: 320,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: { effect: 'slide', direction: 'up', duration: 400 },
         hide: { effect: 'slide', direction: 'down', duration: 400 },
         autoOpen: false,
         classes: {'ui-dialog': 'Popup_Vallas_publicitarias'} 
      });
      $("#Popup_Transito").dialog(
      {
         title: '',
         width: 412,
         height: 320,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: { effect: 'slide', direction: 'up', duration: 400 },
         hide: { effect: 'slide', direction: 'down', duration: 400 },
         autoOpen: false,
         classes: {'ui-dialog': 'Popup_Transito'} 
      });
      $("#Popup_Corporativo").dialog(
      {
         title: '',
         width: 412,
         height: 320,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: { effect: 'slide', direction: 'up', duration: 400 },
         hide: { effect: 'slide', direction: 'down', duration: 400 },
         autoOpen: false,
         classes: {'ui-dialog': 'Popup_Corporativo'} 
      });
      $("#Popup_Murales").dialog(
      {
         title: '',
         width: 442,
         height: 320,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: { effect: 'slide', direction: 'up', duration: 400 },
         hide: { effect: 'slide', direction: 'down', duration: 400 },
         autoOpen: false,
         classes: {'ui-dialog': 'Popup_Murales'} 
      });
      $("#layer_back_top_boton").stickylayer({orientation: 6, position: [50, 50], delay: 1000});
      $("a[href*='#Nuestros_clientes']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Nuestros_clientes').offset().top }, 600, 'linear');
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_Nuestros_servicios,#wb_Nosotros,#Popup_Transito,#Popup_Corporativo').css('background-attachment', 'scroll');
      }
   });
   
   $(document).ready(function()
   {
     $('#wb_Carousel2').owlCarousel( { margin: 10, stagePadding: 10, autoplay: true, rewind: true, dotsEach: true, responsive : { 0: { items : 1 }, 600: { items : 3}, 768: { items : 4}, 970: { items : 5}}});
   });
