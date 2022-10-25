$(function(){
  $(".order__input-tel").mask("8(999) 999-9999");

  $('.popup-call').click( function(){
      $('.popup').animate({opacity: 0}, 198, function(){
        $('.popup').fadeIn(297);
        $('.popup').css('display', 'block').animate({opacity: 1}, 198);
      });
      $('.overlay').animate({opacity: 0}, 198, function(){
        $('.overlay').fadeIn(297);
        $('.overlay').css('display', 'block').animate({opacity: 1}, 198);
      });
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
  		var div = $(".popup"); // тут указываем ID элемента
  		if (!div.is(e.target) // если клик был не по нашему блоку
  		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
  			div.hide(); // скрываем его
  		  $('.overlay').fadeOut(297);
  		}
  });
   $('.popup-close').click( function(){
      $('.popup').animate({opacity: 0}, 198, function(){
        $('.popup').fadeOut(297);
        $('.overlay').fadeOut(297);
      });
  });

  $('.popup-form__btn').click(function(){
  	$('.popup').fadeOut(297);
  	$('.overlay').fadeOut(297);
  	$('.popup-thx').fadeIn(297, function(){
  	  $('.popup-thx') 
  	  .css('display', 'flex')
  	  .animate({opacity: 1}, 198);
  	});
  	$('.overlay-thx').fadeIn(297, function(){
  	  $('.overlay-thx')
  	  .css('display', 'flex')
  	  .animate({opacity: 1}, 198);
  	});
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".popup-thx"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(297); // скрываем его
        $('.overlay-thx').fadeOut(297);
      }
  });

  $('.popup-close-thx').click( function(){
      $('.popup-thx').animate({opacity: 0}, 198, function(){
        $('.popup-thx').fadeOut(297);
        $('.overlay-thx').fadeOut(297);
      });
  });
  
  $('.order__input-submit').click(function(){
  	$('.popup-thx').fadeIn(297, function(){
  	  $('.popup-thx') 
  	  .css('display', 'flex')
  	  .animate({opacity: 1}, 198);
  	});
  	$('.overlay-thx').fadeIn(297, function(){
  	  $('.overlay-thx')
  	  .css('display', 'flex')
  	  .animate({opacity: 1}, 198);
  	});
  });
});
