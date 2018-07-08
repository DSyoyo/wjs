/**
 * Created by 90380 on 2018/6/2.
 */
//轮播图
$(function () {
  var $carousel = $("#wjs_carousel");

  var $img = $carousel.find("img");

  //给window注册onresize事件，判断屏幕的大小设置相应的图片
  $(window).on("resize",function () {
    var screenWidth = $(window).width();

    if (screenWidth >= 640) {
      //遍历每个item，并设置相应的图片
      $img.each(function () {
        //获取到当前图片的src属性 大图片//获取自定义data属性
        var src = $(this).data("psrc");
        //设置给当前的item
        $(this).attr("src",src);
      })
    }

    if (screenWidth < 640) {
      $img.each(function () {
        //获取自定义data属性
        var src = $(this).data("msrc");
        //设置属性attr
        $(this).attr("src",src);

      })
    }

  })

  //打开页面的时候需要先触发一次，可以.resize(),写在window后面
  $(window).trigger("resize");

  //支持滑动
  var startX = 0;
  //jQuery事件对象中，通可以originalEvent获取到原始的事件对象
  $carousel.on("touchstart",function (e) {
    startX = e.originalEvent.touches[0].clientX;
  });

  $carousel.on("touchend",function (e) {
    var distance = e.originalEvent.changedTouches[0].clientX-startX;
    //若移动距离大于等于50，取上一屏
    if (distance >= 50) {
      //调用.carousel("prev");
      $carousel.carousel("prev");
    }
    if (distance <= -50) {
      //去下一屏 调用.carousel("next");
      $carousel.carousel("next");
    }

  })

})


//products的tab栏
//
$(function () {
  var $ul = $(".wjs_products .nav-tabs");
  var $li = $ul.find("li");

  var total = 0;
  $li.each(function () {
    total += $(this).width();
    console.log(total);
  });

  $ul.width(total);

  new IScroll(".nav-tabs-wrapper",{
    scrollX:true,
    scrollY:false
  })

});


//产品功能
//$(function () {
//  //1. 设置nav-tabs的宽度
//  //2. 使用iscroll进行区域滚动
//
//  var $ul = $(".wjs_product .nav-tabs");
//  var $li = $ul.find("li");
//
//  //设置ul的宽度，遍历$li，把每个人的宽度加起来
//  var total = 0;
//  $li.each(function () {
//    //width();  width
//    //innerWidth()  padding + width
//    //outerWidth()  border + padding + width
//    //outerWidth(true) margin+border+padding +width
//    total += $(this).width();
//  });
//
//  $ul.width(total);
//
//
//  //初始化iscroll
//  new IScroll(".nav-tabs-wrapper", {
//    scrollY:false,
//    scrollX:true
//  });
//
//});