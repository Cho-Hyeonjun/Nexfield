$(document).ready(function(){ //START


  setInterval(slide,3000);

    var now = 0
    var image = 3
  function slide(){

    now = now==image?0:now + 1
  
    $(".visual").fadeOut().css({"z-index":"1"});
    $(".visual").eq(now).fadeIn().css({"z-index":"4"});

    $(".visual_num li a").removeClass("on")
    $(".visual_num li").eq(now).children("a").addClass("on")

  };

  $(".visual_num li").click(function(){

    var idx = $(this).index();
    
    $(".visual").fadeOut().css({"z-index":"1"});
    $(".visual").eq(idx).fadeIn().css({"z-index":"4"});

    $(".visual_num li a").removeClass("on")
    $(".visual_num li").eq(idx).children("a").addClass("on")

    now = idx
  });

}); //END