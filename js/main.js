function swapImages(){
      var $active = $("#mainimagespace .active");
      var $next = ($("#mainimagespace .active").next().length > 0) ? $('#mainimagespace .active').next() : $('#mainimagespace img:first');
      $active.fadeOut(1000, function(){
        $active.removeClass("active");
        $next.fadeIn(3000).addClass("active");
      });
    }

  $('.indexmain').html('<img class="loadingspinner" src="img/spinner2.gif" alt="">');
  $("#mainarea").fadeIn(2000);

  $(window).load(function(){
      $('.indexmain').html('<section id="mainimagespace" class="col-md-12">\
                            <img src="img/slide1.jpg" alt="" class="active" >\
                            <img src="img/slide2.jpg" alt="" >\
                            <img src="img/slide3.jpg" alt="" >\
                            <img src="img/slide4.jpg" alt="" >\
                            </section>');
      setInterval('swapImages()', 10000);
  });
  


