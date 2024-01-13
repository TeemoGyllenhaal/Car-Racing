var car1 = document.getElementById('1')
var car2 = document.getElementById('2')
var bar1 = document.getElementById('bar1');
var bar2 = document.getElementById('bar2');
var positionIncrement = 10;
var maxPosition = 1300;
function moveCar(car,bar) {
    var currentLeft = parseInt(window.getComputedStyle(car).left)
    car.style.left = `${currentLeft + positionIncrement}px`;
}
function handleKeyPress(event) {
    switch (event.key) {
        case 'd':
            moveCar(car1,bar1);
            break;
        case 'k':
            moveCar(car2,bar2);
            break;
        default:
            break;
    }
}
function checkwinner() {
    var check = setInterval(function () {
        var car1Left = parseInt(window.getComputedStyle(car1).left);
        var car2Left = parseInt(window.getComputedStyle(car2).left);
        if (car1Left >= 1300) {
            alert("Xe vàng về đích!");
            clearInterval(check);
        }
        if (car2Left >= 1330) {
            alert("Xe đỏ về đích!");
            clearInterval(check);
        }
    }, 100);
}
function start(){
    var red = document.getElementById("red");
    var yellow = document.getElementById("yellow");
    var green = document.getElementById("green");
    setTimeout(function () {
        red.style.backgroundColor = 'red';
    }, 1000)
    setTimeout(function () {
        yellow.style.backgroundColor = 'yellow';
    }, 2000)
    setTimeout(function () {
        green.style.backgroundColor = 'green';
        document.addEventListener('keydown', handleKeyPress);
        checkwinner();
    }, 3000)
}
let btn = document.getElementById('start-btn')
btn.addEventListener('click', start)
function again(){
    location.reload()
}