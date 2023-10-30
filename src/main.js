var picture = 0;
setInterval(function () {
    picture += 1;
    var path = "./assets/class"+picture+"2.jpg";
    $("#banner").css("background-image","url("+path+")");
    picture %= 4;
}, 5000);

