var startElt = document.getElementById("Start");
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







