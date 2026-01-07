let pomodoro50 = document.getElementById("pomodoro50-timer");
let pomodoro25 = document.getElementById("pomodoro25-timer");
let pomodoro10 = document.getElementById("pomodoro10-timer");
let pomodoro5 = document.getElementById("pomodoro5-timer");

function initialTimer() {
    pomodoro50.style.display = 'none';
    pomodoro25.style.display = 'block';
    pomodoro10.style.display = 'none';
    pomodoro5.style.display = 'none';
}

initialTimer()

function hideAllTimers() {
    document.querySelectorAll('.timer-display').forEach((timer) => {
        timer.style.display = 'none';
    });
}

document.getElementById("pomodoro50-button").addEventListener("click", function() {
    hideAllTimers();
    pomodoro50.style.display = 'block';
    currentTimer = pomodoro50;
});

document.getElementById("pomodoro25-button").addEventListener("click", function() {
    hideAllTimers();
    pomodoro25.style.display = 'block';
    currentTimer = pomodoro25;
});

document.getElementById("pomodoro10-button").addEventListener("click", function() {
    hideAllTimers();
    pomodoro10.style.display = 'block';
    currentTimer = pomodoro10;
});

document.getElementById("pomodoro5-button").addEventListener("click", function() {
    hideAllTimers();
    pomodoro5.style.display = 'block';
    currentTimer = pomodoro5;
});

let myInterval = null;

// Timer countdown logic
function startTimer(timerDisplay) {
    if (myInterval) {
        clearInterval(myInterval);
    }

    let timerDuration = timerDisplay.getAttribute('data-duration').split('.');
    let minutes = parseInt(timerDuration[0]);
    console.log("Starting timer for " + minutes + " minutes.");

    let DurationinMilliseconds = minutes * 60 * 1000;
    let endTime = Date.now() + DurationinMilliseconds;

    myInterval = setInterval(function() {
        const timeLeft = endTime - Date.now();
        if (timeLeft <= 0) {
            clearInterval(myInterval);
            console.log("Timer finished!");
        }
        else {}
            const minutes = Math.floor(timeLeft / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            timerDisplay.textContent = formattedTime;
    }, 1000);
}

document.getElementById("start-button").addEventListener("click", function() {
    if (currentTimer) {
        startTimer(currentTimer);
    } else {
        console.log("No timer selected.");
    }
});

document.getElementById("stop-button").addEventListener("click", function() {
    if (currentTimer) {
        clearInterval(myInterval);
    }
});