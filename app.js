function getNumber(num) {
    var screen = document.getElementById("screen");
    screen.value += num;
}
function clearR() {
    var screen = document.getElementById("screen");
    screen.value = ""
}
function getResult() {
    var screen = document.getElementById("screen");
    screen.value = eval(screen.value)
}