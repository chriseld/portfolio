function loadBackground() {
    var bg1 = "assets/img/header-1.png";
    var bg2 = "assets/img/header-2.png";
    var bg3 = "assets/img/header-3.png";
    var bg4 = "assets/img/header-4.png";

    var bgArr = [bg1, bg2, bg3, bg4];

    var rand = bgArr[Math.floor(Math.random() * bgArr.length)];

    $("header").css("background-image", "url('" + rand + "')");
}


$(function() {
    console.log("loaded!");
    loadBackground();
  });