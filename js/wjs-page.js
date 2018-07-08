/**
 * Created by 90380 on 2018/6/4.
 */

$(function () {
  var $carousel = $("#wjs_carousel");

  var $img = $carousel.find("img");

  //给window注册onresize事件，判断屏幕的大小设置相应的图片
  $(window).on("resize", function () {
    var screenWidth = $(this).width();

    if (screenWidth >= 640) {
      //遍历每个item，并设置相应的图片
      $img.each(function () {
        //获取到当前图片的src属性 大图片//获取自定义data属性
        var src = $(this).data("psrc");
        //设置给当前的item
        $(this).attr("src", src);
      })
    }

    if (screenWidth < 640) {
      $img.each(function () {
        //获取自定义data属性
        var src = $(this).data("msrc");
        //设置属性attr
        $(this).attr("src", src);

      })
    }

  })

  $(window).trigger("resize");
  var startX = 0;
  $carousel.on("touchstart", function (e) {
    startX = e.originalEvent.touches[0].clientX;
  })

  $carousel.on("touchend", function (e) {
    var distance = e.originalEvent.changedtouches[0].clientX - startX;

    if (distance >= 50) {
      $carousel.carousel("prev");
    }
    if (distance <= -50) {
      $carousel.carousel("next");
    }
  })
});


$(function () {
  var $ul = $(".wjs_intro .nav-tabs");
  var $li = $ul.children("li");// var $li = $ul.find("li");

  var total = 0;
  $li.each(function () {
    total += $(this).width();
  })

  $ul.width(total);

});
