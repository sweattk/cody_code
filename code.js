var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");

var time = 100;
var timerInterval;

function startQuiz() {
    timerInterval = setInterval(Function () {
        time--;
        timerEl = time;
        if (time <=0) {
            endQuiz();
        }
    } 1000)
}

function endQuiz() {
    
}

startBtn.onclick = startQuiz;