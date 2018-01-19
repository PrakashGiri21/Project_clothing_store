
$(function(){
  $('#signup_btn').click(function(){
    $('.login_main').animate({left:"27.5%"},400);
    $('.login_main').animate({left:"35%"},500);
    
    $('.login_form').css({'visibility': 'hidden'});
    $('.login_form').animate({left:"45%"},400);

    $('.signup_form').animate({left:"30%"},400);
    $('.signup_form').animate({left:"35%"},500);
    $('.signup_form').css({'visibility': 'visible'});
  });
  $('#login_btn').click(function(){
    $('.login_main').animate({left:"72.5%"},400);
    $('.login_main').animate({left:"70%"},500);

    $('.signup_form').css({'visibility': 'hidden'});
    $('.signup_form').animate({left:"68%"},400);

    $('.login_form').animate({left:"75%"},400);
    $('.login_form').animate({left:"70%"},500);
    $('.login_form').css({'visibility': 'visible'});
  })
});
