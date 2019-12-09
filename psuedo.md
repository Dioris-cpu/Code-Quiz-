 * Build a timer once you start the quiz.
 - with a nav-bar 
 - have at least 5 questions with the user having about 15 seconds to answer per question. 


html 

- first start with quiz div to start 
- add div container for the quiz with id
- add score container with id
- give both the start and score container a display of none.
add a div for questions with an id question. use a paragraph tag called question.

* Add div for the timer with an id of timer inside this div add multiply divs:
- counter div with the id counter
- bar time gauge with the id btgauge
- time gauge with the id timegauge

* Add a div called choices with the id choices
inside of this div add 3 more divs with the class of choice for each and ids with the names A, B, C each with onClick = checkAnswer() 

- add a progress div the will tell the user how manny questions he or she will answer. Also if they answered the question correctly or not. 

Javascript 

* Create a seperate javascript file called question.js before the normal script.js

- create a variable for each div inside your html file and also get its element by id for example : var startElt = document.getElementById("Start); 

* Qustions
- create arrays for each question that the user is going to answer.
-  Inside the arrays ever elment will be an object for example var questions [{}];
- the objects will all have the same properties wich include the question and all of the choiches and the correct answer A, B, C for example : var questions [{
    question : ""
    choiceA : ""
    choiceB : ""
    choiceC : ""
    correct : ""


}];
- access the properties of the questions by typing question and its index like the first question would be and you put .question to add the property of its first element for example : question[0].question 


* Display the questions for the user
- create variables for the questions 
-  create a function so the question to appear 
- create a function for when the answer is wrong 
- create a function for when the answer is correct
- with in the answer wrong function create a variable that subtracts time to the      timer    
- with in the answer correct function create a variable that adds time to the timer








file:///Users/Catboy/UPenn/UPENN-PHI-FSF-PT-11-2019-U-C/04-Web-APIs/01-Activities/29-Stu_Timer-App/Solved/index.html

 


