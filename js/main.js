var matched = []

$(".barbarian").click(function() {
  $(this).attr("src", "img/barbarian.jpg");
  matched.push($(this).attr("class"));
  console.log(matched)
  test();
});

$(".castle").click(function() {
  $(this).attr("src", "img/castle.jpg");
  matched.push($(this).attr("class"));
  test();
});

$(".damsel").click(function() {
  $(this).attr("src", "img/damsel.jpg");
  matched.push($(this).attr("class"));
  test();
});

$(".dragon").click(function() {
  $(this).attr("src", "img/dragon.jpg");
  matched.push($(this).attr("class"));
  test();
});

$(".knight").click(function() {
  $(this).attr("src", "img/knight.jpg");
  matched.push($(this).attr("class"));
  test();
});

$(".wizard").click(function() {
  $(this).attr("src", "img/wizard.jpg");
  matched.push($(this).attr("class"));
  test();
});


function test ( ) {

  if (matched.length == 2 && matched[0] != matched[1]) {

    $("img." + matched[0]).attr("src", "img/card-back.jpg");
    $("img." + matched[1]).attr("src", "img/card-back.jpg");
    matched = [];
    console.log(matched)
  }

  if (matched.length == 2 && matched[0] == matched[1]) {
      alert("You got a match!");
      locked = matched;
      matched = [];
      console.log(matched);
      console.log(locked);
  }

  // var images = document.getElementsByTagName("img")
  // var flipped = 0;
  //
  // for(i=0; i<images.length; i++) {
  //
  //   if ($(this).attr("src") != "image/card-back.jpg") {
  //     flipped++;
  //     if (flipped == 12) {
  //       alert("YOU WON!");
  //     };
  //   };
  // };
  // flipped = 0;


};
