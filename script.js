var startElt = document.getElementById("Start");
var timeleft = 75;
var formElt = document.getElementById("form");

//var choicesElt = (firstQuestion.choices)
//var answerOne = (firstQuestion.answer);
var currentQuestion;



startElt.addEventListener("click", startQuiz);
function startQuiz() {

  var countDownTimer = setInterval(function () {
    document.getElementById("currentTime").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(countDownTimer);
      document.getElementById("currentTime").innerHTML = "Its Over";
    }
  }, 1000);

  revealQuiz();
}



var currentQuestionIndex = 0;
function revealQuiz() {
  $("#form").children().remove();
  
  if(currentQuestionIndex === questions.length ) {
    var score = timeleft
    $("#highscore").append(score);
    timeleft = 0
    localStorage.setItem(name,score);
    /*function allStorage() {

      var values = [],
          keys = Object.keys(localStorage),
          i = keys.length;
  
      while ( i-- ) {
          values.push( localStorage.getItem(name score[i]) );
      }
  
      return values;
  }*/


    return;
    
  }


  var firstQuestion = questions[currentQuestionIndex];
  var h = $("<h>");
  h.text(firstQuestion.title);
  var c1 = $("<button>");
  var c2 = $("<button>");
  var c3 = $("<button>");
  c1.text(firstQuestion.choices[0]);
  c2.text(firstQuestion.choices[1]);
  c3.text(firstQuestion.choices[2]);
  c1.on("click", function () {

  })

  $("#form").append(h);
  $("#form").append("<br>")
  $("#form").append(c1);
  $("#form").append("<br>")
  $("#form").append(c2);
  $("#form").append("<br>")
  $("#form").append(c3);
  $("#form").append("<br>");
  c1.on("click", function(event){
    var choice = event.target.value;
    if(firstQuestion.choices[0] === firstQuestion.answer) {
      timeleft = timeleft+15;
    } else {
      timeleft = timeleft - 15;
    }    
    currentQuestionIndex++;
    revealQuiz();
  })
  c2.on("click", function(event){
    var choice = event.target.value;
    if(firstQuestion.choices[1] === firstQuestion.answer) {
      timeleft = timeleft+15;
    } else {
      timeleft = timeleft - 15;
    }
    
    currentQuestionIndex++;
    revealQuiz();
  })
  c3.on("click", function(event){
    var choice = event.target.value;
    if(firstQuestion.choices[2] === firstQuestion.answer) {
      timeleft = timeleft+15;
    } else {
      timeleft = timeleft - 15;
    }
    
    currentQuestionIndex++;
    revealQuiz();
  })
}

