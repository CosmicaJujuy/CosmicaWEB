$(function () {

//    $("#c_hifumi").css({"margin-top": "-100px"});
//    $("#c_yun").css({"margin-top": "-100px", "margin-left": "-50px"});
//    $("#c_hajime").css({"margin-top": "-100px", "margin-left": "50px"});
//    $("#c_aoba").css({"margin-top": "-100px"});
//    $("#c_p1").css({"margin-top": "-100px", "margin-left": "-50px"});
//    $("#c_p2").css({"margin-top": "-100px", "margin-left": "-50px"});
//    $("#c_p3").css({"margin-top": "-100px", "margin-left": "-50px"});
//    $("#c_p4").css({"margin-top": "-100px", "margin-left": "50px"});
//    $("#c_p5").css({"margin-top": "-100px", "margin-left": "50px"});

    function animation() {
        var delay = 0;
        var offset = 200;
        var duration = 600;

        setTimeout(function () {
            $("#world")
                    .stop()
                    .fadeIn(duration)
                    .animate({"margin-top": "100px", "margin-left": "100px"}, {duration: 1500, easing: "easeOutBack"});
        }, delay);
        delay += offset;
        delay += offset;

        setTimeout(function () {
            $("#title")
                    .stop()
                    .fadeIn(duration)
                    .animate({"margin-top": "-340px", "margin-left": "50px", "margin-right": "0px"}, {duration: 1500, easing: "easeOutBack"});
        }, delay);
        delay += offset;
        delay += offset;

        setTimeout(function () {
            $("#c_tex")
                    .stop()
                    .fadeIn(duration)
                    .animate({"margin-top": "0px", "margin-left": "0px"}, {duration: 1500, easing: "easeOutBack"});
        }, delay);
        delay += offset;
        delay += offset;

        setTimeout(function () {
            $("#c_aoba")
                    .stop()
                    .fadeIn(duration)
                    .animate({"margin-top": "0px", "margin-left": "0px"}, {duration: 1500, easing: "easeOutBack"});
        }, delay);
        delay += offset;
        delay += offset;

        setTimeout(function () {
            $("#c_yun")
                    .stop()
                    .fadeIn(duration)
                    .animate({"margin-top": "0px", "margin-left": "0px"}, {duration: 1500, easing: "easeOutBack"});
        }, delay);
        delay += offset;
        delay += offset;

        setTimeout(function () {
            $("#c_hajime")
                    .stop()
                    .fadeIn(duration)
                    .animate({"margin-top": "0px", "margin-left": "0px"}, {duration: 1500, easing: "easeOutBack"});
        }, delay);
        delay += offset;
        delay += offset;

        setTimeout(function () {
            $("#c_hifumi")
                    .stop()
                    .fadeIn(duration)
                    .animate({"margin-top": "0px", "margin-left": "0px"}, {duration: 1500, easing: "easeOutBack"});
        }, delay);
        delay += offset;
        delay += offset;
    }

    animation();



});
