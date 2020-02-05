var xAngle = 0,
    yAngle = 35;
var theCube = document.getElementById("cube");
var cameraFrame = document.getElementById("experiment");
var theTitle = document.getElementById("title");
var theSubTitle = document.getElementById("subtitle");

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");

const btnX = document.getElementById("close");
const btnO = document.getElementById("open");

btnX.addEventListener('click', function () {


    cameraFrame.style.webkitPerspective = "800px";
    theCube.style.width = "80px";
    theCube.style.height = "80px";

    box1.style.webkitTransform = "rotateX(90deg) translateZ(40px)";
    box1.style.width = "80px";
    box1.style.height = "80px";
    box1.style.padding = "0px";
    box2.style.webkitTransform = "translateZ(40px)";
    box2.style.width = "80px";
    box2.style.height = "80px";
    box2.style.padding = "0px";
    box3.style.webkitTransform = "rotateY(90deg) translateZ(40px)";
    box3.style.width = "80px";
    box3.style.height = "80px";
    box3.style.padding = "0px";
    box4.style.webkitTransform = "rotateY(180deg) translateZ(40px)";
    box4.style.width = "80px";
    box4.style.height = "80px";
    box4.style.padding = "0px";
    box5.style.webkitTransform = "rotateY(-90deg) translateZ(40px)";
    box5.style.width = "80px";
    box5.style.height = "80px";
    box5.style.padding = "0px";
    box6.style.webkitTransform = "rotateX(-90deg) translateZ(40px) rotate(180deg)";
    box6.style.width = "80px";
    box6.style.height = "80px";

    theSubTitle.style.visibility = "hidden";
    theSubTitle.style.fontSize = "0.1em";
    theTitle.style.visibility = "hidden";
    theTitle.style.fontSize = "0.2em";
    btnX.style.visibility = "hidden";
    btnO.style.visibility = "visible";


});

btnO.addEventListener('click', function () {


    cameraFrame.style.webkitPerspective = "800px";
    theCube.style.width = "400px";
    theCube.style.height = "400px";

    box1.style.webkitTransform = "rotateX(90deg) translateZ(200px)";
    box1.style.width = "400px";
    box1.style.height = "400px";
    box1.style.padding = "0px";
    box2.style.webkitTransform = "translateZ(200px)";
    box2.style.width = "400px";
    box2.style.height = "400px";
    box2.style.padding = "0px";
    box3.style.webkitTransform = "rotateY(90deg) translateZ(200px)";
    box3.style.width = "400px";
    box3.style.height = "400px";
    box3.style.padding = "0px";
    box4.style.webkitTransform = "rotateY(180deg) translateZ(200px)";
    box4.style.width = "400px";
    box4.style.height = "400px";
    box4.style.padding = "0px";
    box5.style.webkitTransform = "rotateY(-90deg) translateZ(200px)";
    box5.style.width = "400px";
    box5.style.height = "400px";
    box5.style.padding = "0px";
    box6.style.webkitTransform = "rotateX(-90deg) translateZ(200px) rotate(180deg)";
    box6.style.width = "400px";
    box6.style.height = "400px";


    btnO.style.visibility = "hidden";
    btnX.style.visibility = "visible";

    theSubTitle.style.visibility = "visible";
    theSubTitle.style.fontSize = "1.5em";
    theTitle.style.visibility = "visible";
    theTitle.style.fontSize = "5em";

});



document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {

    case 37: // left
        yAngle -= 22.5;
        break;

    case 38: // up
        xAngle += 22.5;
        break;

    case 39: // right
        yAngle += 22.5;
        break;

    case 40: // down
        xAngle -= 22.5;
        break;
    };


    theCube.style.webkitTransform = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
}, false);