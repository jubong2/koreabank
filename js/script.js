$(document).ready(function () {
  // navi의 전체 submenu 나오게하기''
  //   $(".navi > li")
  //     .mouseover(function () {
  //       $(".submenu").stop().slideDown();
  //     })
  //     .mouseout(function () {$(".submenu").stop().slideUp(500)});
  //navi에 해당하는 submenu가 나오는 코드//
  $(".navi > li")
    .mouseover(function () {
      // console.log(this)
      $(this).find(".submenu").stop().slideDown();
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp();
    });

  // d이미지 슬라이드 기능
  setInterval(function () {
    $(".slidlist").delay(2000);
    $(".slidlist").animate({ marginLeft: -1200 });
    $(".slidlist").delay(2000);
    $(".slidlist").animate({ marginLeft: -2400 });
    $(".slidlist").delay(2000);
    $(".slidlist").animate({ marginLeft: 0 });
  });

  //   // tapmenu

  $(function () {
    $(".tabmenu > li >a").click(function () {
      // console.log(this);
      $(this).parent().addClass("active").siblings().removeClass("active");
    });
  });

  // 모달 오픈기능
  $(".popup").click(function () {
    $(".modal").addClass("active");
  })
// 모달 닫기 기능
  $(".close").click(function () {
    $(".modal").removeClass("active")
  });
});
