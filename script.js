var startElt = document.getElementById("Start");
var quizElt = document.getElementById("Quiz-container");
var questionsElt = document.getElementById("question");
var timerElt = document.getElementById("timer");
var counterElt = document.getElementById("counter");
var btGaugeElt = document.getElementById("btgauge");
var timeGaugeElt = document.getElementById("timegauge");
var aElt = document.getElementById("A");
var bElt = document.getElementById("B");
var cElt = document.getElementById("C");
var lastQuestion = questionsElt.lenght -1;
var runningQuestionIndex = 0;

function questionRender(){
    var q = questionsElt[runningQuestionIndex];
    aElt.innerHTML = q.lenght;
    bElt.innerHTML = q.lenght;
    cElt.innerHTML = q.lenght;

    runningQuestionIndex++
    questionRender();

    runningQuestionIndex+++
    questionRender();




}



 
  