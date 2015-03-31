

function swapImages(){
      var $active = $("#mainimagespace .active");
      var $next = ($("#mainimagespace .active").next().length > 0) ? $('#mainimagespace .active').next() : $('#mainimagespace img:first');
      $active.fadeOut(1000, function(){
        $active.removeClass("active");
        $next.fadeIn(3000).addClass("active");
      });
    }





  $('.indexmain').html('<img class="loadingspinner" src="img/loading.gif" alt="">');
	$("#mainarea").fadeIn(2000);

  $(window).load(function(){
      $('.indexmain').html('<section id="mainimagespace">\
      <img src="img/1.jpg" alt="" class="active" >\
      <img src="img/2.jpg" alt="" >\
      <img src="img/3.jpg" alt="" >\
      <img src="img/4.jpg" alt="" >\
    </section>');
      setInterval('swapImages()', 10000);
  });
  


