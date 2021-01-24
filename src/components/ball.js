$(document).ready(function () {
    var mousePos = {};

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }

    $(window).mousemove(function (e) {
        mousePos.x = e.pageX;
        mousePos.y = e.pageY;
        $(".ball").css("width", "10px")
        $(".ball").css("height", "10px")
    });

    $(window).mouseleave(function (e) {
        mousePos.x = -1;
        mousePos.y = -1;
    });

    const draw = setInterval(function () {
        if (mousePos.x > 0 && mousePos.y > 0) {
            const range = 0;
            const color = "background: white";
            const sizeInt = getRandomInt(5, 15);
            const left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";
            const top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";
            const size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
            const style = left + top + color + size;
            $("<div class='ball' style='" + style + "'></div>").appendTo('.container').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { $(this).remove(); });
        }
    }, 1);
});
