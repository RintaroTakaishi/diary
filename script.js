$(function(){

  //水平線を引く
  speed = 3000;
  $('.horizon1').animate({
    width:540
  },speed);

  //水平線を引く２
  // $('.horizon2').css({
  //   left: 540
  // }).animate({
  //   left: 0,
  //   width: 1080
  // },speed);

  //カウントアップ
    var countElm = $('.count'),
    countSpeed = 30;
    countElm.each(function(){
      var self = $(this),
      countMax = self.attr('data-num'),
      thisCount = self.text(),
      countTimer;
      function timer(){
        countTimer = setInterval(function(){
          var countNext = thisCount++;
          self.text(countNext);
          if(countNext == countMax){
            clearInterval(countTimer);

            $('.count').fadeOut();
            $('.horizon1').fadeOut();
          }
        },countSpeed);
      }
      timer();
    });

    $('.count').css({
      left:290
    }).animate({
      left:830
    },speed);

  // SNSボタン
  $('.social-icon').hover(
    function(){
      $(this).children('span').animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      $(this).children('span').animate({
        'font-size':'24px'
      }, 300);
    }
  );


  
  //MENUボタン
  $(".header-menu").on("click",function(){
    $(".box").slideToggle();
  });
  
  //tab切替
  $(".tab").on("click", function() {
    var i = $(this).index();
    $(".works,.tab").removeClass("active");
    $(".works").eq(i).addClass("active");
    $(".tab").eq(i).addClass("active");
  });

});

