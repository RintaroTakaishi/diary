$(function(){

  //水平線を引く
  speed = 3000;
  $('.horizon1').animate({
    width:540
  },speed);

  $('.count').css({
    left:290
  }).animate({
    left:830
  },speed);

  $('.point').css({
    left:265
  }).animate({
    left:805
  },speed);

  //boxを動かす

  for (var i=1; i<4; i++) {
    console.log(i);
    $('.box1').animate({
      left:950
    },speed/i).animate({
      left:30
    },speed/i);
 
    $('.box2').animate({
      left:30
    },speed).animate({
      left:880
    },speed);

    $('.box3').animate({
      left:200
    },speed).animate({
      left:400
    },speed);

    $('.box3').animate({
      top:100
    },speed).animate({
      top:300
    },speed);
  }
  // クリックボール
  $(".click-ball").on("click",function(){
    $(this).toggleClass('is-animated');
    $(this).toggleClass('ball');
  });





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
            // countが100になった時の動作
            $('.first-page').slideUp(2000);
            $('.panish').animate({
              backgroundColor:"#dedede",
              opacity:0
            },1500);

            $('.after-count').fadeIn(5000);
          }
        },countSpeed);
      }
      timer();
    });




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
    $(".menu-box").slideToggle();
  });
  
  //tab切替
  $(".tab").on("click", function() {
    var i = $(this).index();
    $(".works,.tab").removeClass("active");
    $(".works").eq(i).addClass("active");
    $(".tab").eq(i).addClass("active");
  });

});

