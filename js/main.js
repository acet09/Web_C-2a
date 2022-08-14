$(document).ready(function(){
  // nav
  $("#SNB > ul > li").hover(function(){
    $(this).find('.sub').stop().slideDown(400);
  },function(){
    $(this).find('.sub').stop().slideUp(400);
  });

  // slide
  $(".slide-con").hide();
  $(".slide-con:first").show();
  function slidemove(){
    $(".slide-con:first").fadeOut().next().fadeIn().end().appendTo(".slide-box");
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $(".not-box > ul > li:first").click(function(){
    $("#pop").show();
  });
  $("#pop button").click(function(){
    $("#pop").hide();
  });


});