$(".barbarian").click(function() {
  $(this).attr("src", "img/barbarian.jpg");
  test();
});

$(".castle").click(function() {
  $(this).attr("src", "img/castle.jpg");
  test();
});

$(".damsel").click(function() {
  $(this).attr("src", "img/damsel.jpg");
  test();
});

$(".dragon").click(function() {
  $(this).attr("src", "img/dragon.jpg");
  test();
});

$(".knight").click(function() {
  $(this).attr("src", "img/knight.jpg");
  test();
});

$(".wizard").click(function() {
  $(this).attr("src", "img/wizard.jpg");
  test();
});

$(".barbarian1").click(function() {
  $(this).attr("src", "img/barbarian.jpg");
  test();
});

$(".castle1").click(function() {
  $(this).attr("src", "img/castle.jpg");
  test();
});

$(".damsel1").click(function() {
  $(this).attr("src", "img/damsel.jpg");
  test();
});

$(".dragon1").click(function() {
  $(this).attr("src", "img/dragon.jpg");
  test();
});

$(".knight1").click(function() {
  $(this).attr("src", "img/knight.jpg");
  test();
});

$(".wizard1").click(function() {
  $(this).attr("src", "img/wizard.jpg");
  test();
});

function test ( ) {
  if ( $(".barbarian").attr("src") == "img/barbarian.jpg" && $(".barbarian1").attr("src") == "img/barbarian.jpg") {
    alert("Barb");
  } else if ( $(".castle").attr("src") == "img/castle.jpg" && $(".castle1").attr("src") == "img/castle.jpg") {
    alert("cast");
  } else if ( $(".damsel").attr("src") == "img/damsel.jpg" && $(".damsel1").attr("src") == "img/damsel.jpg") {
      alert("damsel");
  } else if ( $(".dragon").attr("src") == "img/dragon.jpg" && $(".dragon1").attr("src") == "img/dragon.jpg") {
      alert("drag");
  } else if ( $(".knight").attr("src") == "img/knight.jpg" && $(".knight1").attr("src") == "img/knight.jpg") {
      alert("knight");
  } else if ( $(".wizard").attr("src") == "img/wizard.jpg" && $(".wizard1").attr("src") == "img/wizard.jpg") {
    alert("wizard");
  } else {
    $("img").attr("src") == "img/card-back.jpg";
  }

};
