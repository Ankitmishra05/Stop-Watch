let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let millisecondsDisplay = document.getElementById('milliseconds');

let interval;
let time = { minutes: 0, seconds: 0, milliseconds: 0 };

function updateDisplay() {
    millisecondsDisplay.textContent = time.milliseconds < 10 ? '0' + time.milliseconds : time.milliseconds;
    secondsDisplay.textContent = time.seconds < 10 ? '0' + time.seconds : time.seconds;
    minutesDisplay.textContent = time.minutes < 10 ? '0' + time.minutes : time.minutes;
}

function start() {
    if (!interval) {
        interval = setInterval(function () {
            time.milliseconds++;
            if (time.milliseconds >= 100) { time.milliseconds = 0; time.seconds++; }
            if (time.seconds >= 60) { time.seconds = 0; time.minutes++; }
            updateDisplay();
        }, 10);
    }
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    clearInterval(interval);
    interval = null;
    time = { minutes: 0, seconds: 0, milliseconds: 0 };
    updateDisplay();
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

