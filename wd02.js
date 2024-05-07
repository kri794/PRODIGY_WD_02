let startTime, currentTime, elapsedTime = 0;
let timerInterval;
let laps = [];

function startStop() {
    if (!startTime) {
        startTime = new Date().getTime() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
        document.getElementById("startStop").innerHTML = "Stop";
    } else {
        clearInterval(timerInterval);
        startTime = null;
        document.getElementById("startStop").innerHTML = "Start";
    }
}

function reset() {
    clearInterval(timerInterval);
    startTime = null;
    elapsedTime = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("laps").innerHTML = "";
    laps = [];
}

function lap() {
    if (startTime) {
        let lapTime = formatTime(elapsedTime);
        laps.push(lapTime);
        let lapItem = document.createElement("li");
        lapItem.innerHTML = `Lap ${laps.length}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
    }
}

function updateTime() {
    currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    document.getElementById("display").innerHTML = formatTime(elapsedTime);
}

function formatTime(time) {
    let date = new Date(time);
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    let milliseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}
