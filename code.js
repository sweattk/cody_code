var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");

var time = 100;
var timerInterval;

var gameIndex = 0;

function startQuiz() {
    timerEl.textContent = time;
    timerInterval = setInterval(Function () {
        }, 1000);
        

var questionDiv = document.createElement("div");

function endQuiz() {
    clearInterval(timerInterval);
}

startBtn.onclick = startQuiz;




        time--;
        timerEl.textContent = time;
        if (time <=0) {
            endQuiz();
        }

    
}

