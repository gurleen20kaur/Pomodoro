let pomodoro25 = document.getElementById("25");
let pomodoro10 = document.getElementById("10");
let pomodoro5 = document.getElementById("5");

function initialTimer() {
    pomodoro25.style.display = 'flex';
    pomodoro10.style.display = 'none';
    pomodoro5.style.display = 'none';
}

initialTimer()