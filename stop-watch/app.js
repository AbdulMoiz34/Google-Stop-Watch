let ms = 0;
let sec = 0;
let minutes = 0;
const showMin = document.getElementById("mins");
const showSec = document.getElementById("secs");
const showMs = document.getElementById("msecs");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
let interval;

function timeStart() {
    interval = setInterval(function () {
        ms++;
        if (ms > 99) {
            sec++;
            ms = 0;
        }

        if (sec > 59) {
            minutes++;
            sec = 0;
        }
        showMin.textContent = minutes;
        showSec.textContent = String(sec).padStart(2, 0);
        showMs.textContent = ms.toString().padStart(2, 0);
    }, 10);
}

function timeStop() {
    clearInterval(interval);
}

startBtn.addEventListener("click", function () {
    if (startBtn.textContent == "Start") {
        document.getElementById("start").className = "";
        document.getElementById("watch-container-wrapper").classList.remove("notStarted");
        timeStart();
        startBtn.textContent = "Stop";
    } else {
        timeStop();
        startBtn.textContent = "Start";
    }
});

resetBtn.addEventListener("click", function () {
    console.log(interval);
    clearInterval(interval);
    ms = 0;
    minutes = 0;
    sec = 0;
    showMin.textContent = minutes;
    showSec.textContent = sec;
    showMs.textContent = ms + "0";
    startBtn.textContent = "Start";
    document.getElementById("start").className = "start";
    document.getElementById("watch-container-wrapper").className += " notStarted";
});
