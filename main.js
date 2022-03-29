$(function () {
  //   console.log($image);
  // console.log(document.body.clientWidth, document.body.clientHeight);
  $image = $("#the_image");
  // imgPos = [
  //   $image.offset().left,
  //   $image.offset().top,
  //   $image.offset().left + $image.outerWidth(),
  //   $image.offset().top + $image.outerHeight(),
  // ];
  $(".img_section").mousemove(function (e) {
    $("#coords2").html(e.clientX + ", " + e.clientY);
    // consider pageX,pageY
    $("#coords3").html(e.pageX + ", " + e.pageY);
  });
  $image.mousemove(function (e) {
    $("#coords").html(
      imgPos[0] + ", " + imgPos[1] + ", " + imgPos[2] + ", " + imgPos[3]
    );
    // $("#coords2").html(e.pageX + ", " + e.pageY);
  });
});
