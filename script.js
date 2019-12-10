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
var setTime = setInterval(timerElt, 1000);



/*function runningTime (){
    var r = seconds();
    var t = r.toLocaleTimeStartString();
    timerElt = t;


}




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

function progressRender(){
    for(var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progressRender.innerHTML += "<div class= 'prog' id="+ qIndex +"></div>";
    }
}

function answerCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
};

function answerWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red"
}; 

function counterRender(){
    if( count <= questionTime ){
        counterElt.innerHTML = count;

    }
} */
   
