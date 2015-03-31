

function swapImages(){
      var $active = $("#mainimagespace .active");
      var $next = ($("#mainimagespace .active").next().length > 0) ? $('#mainimagespace .active').next() : $('#mainimagespace img:first');
      $active.fadeOut(1000, function(){
      $active.removeClass("active");
      $next.fadeIn(3000).addClass("active");
      });
    }


$(document).ready(function(){


	$("#mainarea").fadeIn(2000);

  $('#maininagespace').html = loading.gif;

  setInterval('swapImages()', 10000);

            });

