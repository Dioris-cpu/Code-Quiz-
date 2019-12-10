var startElt = document.getElementById("Start");
var quizElt = document.getElementById("Quiz-container");
var questionsElt = document.getElementById("question");
var aElt = document.getElementById("A");
var bElt = document.getElementById("B");
var cElt = document.getElementById("C");
var lastQuestion = questionsElt.lenght -1;
var runningQuestionIndex = 0;
var timeleft = 75;

function startQuiz(){

    var bankaiTimer = setInterval(function(){
        document.getElementById("currentTime").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if(timeleft <= 0){
          clearInterval(bankaiTimer);
          document.getElementById("currentTime").innerHTML = "Its Over"
        }
      }, 1000);}

startElt.addEventListener("click", startQuiz); 






/*function remainingTime(){
    if() 
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


function answerCorrect(){
    
};

function answerWrong(){

}; */


   
