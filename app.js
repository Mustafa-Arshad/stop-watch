// setInterval(function () {
//     nextslide()
// }, 3000)



var min = 0
var sec = 0
var miliSec = 0

var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMilisec = document.getElementById("displayMilisec");

var interval;

function timer() {
    miliSec++
    if (miliSec == 10) {
        miliSec = 0;
        sec++;
        displaySec.innerHTML = sec;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }
    displayMilisec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}


function startTimer() {
    interval = setInterval(function () {
        timer()
    }, 100)
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {

    min = 0
    sec = 0
    miliSec = 0
    displayMilisec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}