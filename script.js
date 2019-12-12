var startElt = document.getElementById("Start");
var timeleft = 75;
var formElt = document.getElementById("form");

function startQuiz(){

var countDownTimer = setInterval(function(){
    document.getElementById("currentTime").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if(timeleft <= 0){
      clearInterval(countDownTimer);
      document.getElementById("currentTime").innerHTML = "Its Over";
    }
  }, 1000);}

function answerCorrect(){
  this.answer = timeleft + 15;
}



  startElt.addEventListener("click", startQuiz);

var index = 0;
var firstQuestion = questions[index];
var h = $("<h>");
h.text(firstQuestion.title);
var c1 = $("<button>");
var c2 = $("<button>");
var c3 = $("<button>");
c1.text(firstQuestion.choices[0]);
c2.text(firstQuestion.choices[1]);
c3.text(firstQuestion.choices[2]);
c1.on("click", function(answerCorrect){
  (answerCorrect.target.innerText)
})

$("#form").append(h);
$("#form").append("<br>")
$("#form").append(c1);
$("#form").append("<br>")
$("#form").append(c2);
$("#form").append("<br>")
$("#form").append(c3);
$("#form").append("<br>");


var secondQuestion = questions[1];
var h = $("<h>");
h.text(secondQuestion.title);
var c1 = $("<button>");
var c2 = $("<button>");
var c3 = $("<button>");
c1.text(secondQuestion.choices[0]);
c2.text(secondQuestion.choices[1]);
c3.text(secondQuestion.choices[2]);
c3.on("click", function(e){
  alert(e.target.innerText)
})
$("#form").append(h);
$("#form").append("<br>")
$("#form").append(c1);
$("#form").append("<br>")
$("#form").append(c2);
$("#form").append("<br>")
$("#form").append(c3);
$("#form").append("<br>");


var thirdQuestion = questions[2];
var h = $("<h>");
h.text(thirdQuestion.title);
var c1 = $("<button>");
var c2 = $("<button>");
var c3 = $("<button>");
c1.text(thirdQuestion.choices[0]);
c2.text(thirdQuestion.choices[1]);
c3.text(thirdQuestion.choices[2]);
c2.on("click", function(answerCorrect){
  (answerCorrect.target.innerText)
})
$("#form").append(h);
$("#form").append("<br>")
$("#form").append(c1);
$("#form").append("<br>")
$("#form").append(c2);
$("#form").append("<br>")
$("#form").append(c3);
$("#form").append("<br>");

var fourthQuestion = questions[3];
var h = $("<h>");
h.text(fourthQuestion.title);
var c1 = $("<button>");
var c2 = $("<button>");
var c3 = $("<button>");
c1.text(fourthQuestion.choices[0]);
c2.text(fourthQuestion.choices[1]);
c3.text(fourthQuestion.choices[2]);
c1.on("click", function(e){
  alert(e.target.innerText)
})
$("#form").append(h);
$("#form").append("<br>")
$("#form").append(c1);
$("#form").append("<br>")
$("#form").append(c2);
$("#form").append("<br>")
$("#form").append(c3);
$("#form").append("<br>");

var fifthQuestion = questions[4];
var h = $("<h>");
h.text(fifthQuestion.title);
var c1 = $("<button>");
var c2 = $("<button>");
var c3 = $("<button>");
c1.text(fifthQuestion.choices[0]);
c2.text(fifthQuestion.choices[1]);
c3.text(fifthQuestion.choices[2]);
c3.on("click", function(e){
  alert(e.target.innerText)
})
$("#form").append(h);
$("#form").append("<br>")
$("#form").append(c1);
$("#form").append("<br>")
$("#form").append(c2);
$("#form").append("<br>")
$("#form").append(c3);
$("#form").append("<br>");

/*var currentQuestion; 
function navigation(choices) {
  index = index + choices;
  if (index < 0) { 
    index = questions.length - 1; 
  } else if (index > questions.length - 1) { 
    index = 0;
  }
  currentQuestion = questions[index];
}

formElt.addEventListener("click", function(){
  window.length = questions[index];
})*/




