
//work-belt

$(function(){
  workBelt();
  workLoad();
  smoothScroll();
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    //console.log("hi");

    $('.logo').css({
      'transform' : 'translate(0px , '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px , '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px , -'+ wScroll /40 +'%)'
    });

    if(wScroll > $('.work-belt').offset().top - 200   ){
        //console.log("hiii");
        $('.nav_top').css({'visibility':'visible'}).fadeIn(600);
    }else{
      $('.nav_top').fadeOut().css({'visibility':'hidden'});
    }

    /*if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.4) ){
        //console.log("hi");
        $('.clothes-pics figure').each(function(i){
          setTimeout( function(){
            $('.clothes-pics figure').eq(i).addClass('is-showing');
          }, 150 * (i+1) );
        });
    } */

    if( wScroll > $('.large-window').offset().top - $(window).height() ){
      //console.log("hi");
      $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

      var opacity = (wScroll - $('.large-window').offset().top + 400)/ (wScroll/5) ;

      $('.window-tint').css({'opacity': opacity});
    }

    if(wScroll > $('.blog-posts').offset().top - $(window).height()){

      var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350);

      $('.post-1').css({'transform': 'translate('+ offset +'px,'+ Math.abs(offset * 0.9)+'px)'});

      $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px,'+ Math.abs(offset * 0.9)+'px)'});





   }
});

//Work-belt

function workBelt(){

    $('.thumb-unit').click(function(){
      $('.work-belt').css({'left': '-100%'});
      $('.work-container').show();
    });

    $('.work-return').click(function(){
      $('.work-belt').css({'left': '0%'});
      $('.work-container').hide();
    });

    //women
    $('.thumb-unit-f').click(function(){
      $('.work-belt-f').css({'left': '-100%'});
      $('.work-container-f').show();
    });

    $('.work-return-f').click(function(){
      $('.work-belt-f').css({'left': '0%'});
      $('.work-container-f').hide();
    });

}

function workLoad(){

  $.ajaxSetup ({cache: true});
  //======================================================
  $('.thumb-unit').click(function(){
      var $this = $(this),
          newTitle = $this.find('strong').text(),
          newFolder = $this.data('folder'),
          spinner = '<div class="loader">Loading...</div>',
          newHTML = '/work/'+ newFolder +'.html';
      $('.project-load').html(spinner).load(newHTML);
      $('.project-title').text(newTitle);
  });

  //women
  $('.thumb-unit-f').click(function(){
      var $this = $(this),
          newTitle = $this.find('strong').text(),
          newFolder = $this.data('folder'),
          spinner = '<div class="loader">Loading...</div>',
          newHTML = '/work/'+ newFolder +'.html';
      $('.project-load-f').html(spinner).load(newHTML);
      $('.project-title-f').text(newTitle);
  });
}

//=================================
function smoothScroll(){
  //var scrollLink = $('.scroll')

  $('.scroll1').click(function(e){
    e.preventDefault();
    $('body,html').animate({
      //============================================
      scrollTop: $(this.hash).offset().top
    },1000);
  });
  $('.scroll2').click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    },1800);
  });
  $('.scroll3').click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    },2500);
  });
  $('.scroll4').click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    },1000);
  });
}
