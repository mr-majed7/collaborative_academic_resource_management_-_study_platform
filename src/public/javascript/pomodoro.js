let time = 0;
let isActive = false;
let interval;

const timerDisplay = document.getElementById('timer-display');
const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');
const setTimeButton = document.getElementById('set-time');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

function updateDisplay() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startStopTimer() {
    if (isActive) {
        clearInterval(interval);
        startStopButton.textContent = 'Start';
    } else {
        interval = setInterval(() => {
            if (time > 0) {
                time -= 1;
                localStorage.setItem('pomodoroTime', time);
            } else {
                clearInterval(interval);
                isActive = false;
                startStopButton.textContent = 'Start';
                alert('Time is up!');
            }
            updateDisplay();
        }, 1000);
        startStopButton.textContent = 'Stop';
    }
    isActive = !isActive;
    localStorage.setItem('pomodoroActive', isActive);
}

function resetTimer() {
    clearInterval(interval);
    time = 0;
    isActive = false;
    startStopButton.textContent = 'Start';
    startStopButton.disabled = true;
    resetButton.disabled = true;
    updateDisplay();
    localStorage.removeItem('pomodoroTime');
    localStorage.removeItem('pomodoroActive');
}

function setTime() {
    const hours = parseInt(hoursInput.value, 10) || 0;
    const minutes = parseInt(minutesInput.value, 10) || 0;
    const seconds = parseInt(secondsInput.value, 10) || 0;
    time = (hours * 3600) + (minutes * 60) + seconds;
    updateDisplay();
    localStorage.setItem('pomodoroTime', time);
    startStopButton.disabled = time <= 0;
    resetButton.disabled = time <= 0;
}

setTimeButton.addEventListener('click', setTime);
startStopButton.addEventListener('click', startStopTimer);
resetButton.addEventListener('click', resetTimer);

window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('pomodoroTime');
    const savedActive = localStorage.getItem('pomodoroActive') === 'true';

    if (savedTime) {
        time = parseInt(savedTime, 10);
        updateDisplay();
        startStopButton.disabled = time <= 0;
        resetButton.disabled = time <= 0;
    }

    if (savedActive && time > 0) {
        startStopTimer();
    }
});
