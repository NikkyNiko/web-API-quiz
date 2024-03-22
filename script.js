
const startButton = document.getElementById(`start`); 
const time = document.getElementById(`time`);
const startScreen = document.getElementById(`start-screen`);
const questionScreen = document.getElementById(`questions`);
const questionTitle = document.getElementById('question-title');
const questionChoices = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById(`final-score`);
const enterInitials = document.getElementById(`initials`);
const form = document.getElementById('myForm');


let n = 0; 
let answeredQuestions = 0;
var user = {
  scoreList: [],
  initials: ``
}

startButton.addEventListener(`click`, function(event) {
    event.preventDefault();
    countdown();
    let timeLeft = 90;
    function countdown() {
      const timeInterval = setInterval(function () {
        if (timeLeft > 0 && answeredQuestions < questions.length) {
          time.textContent = timeLeft + 's';
          timeLeft--;
        } else {
          time.textContent = '0';
          clearInterval(timeInterval);
          outOfTime();
        }
      }, 1000);
    }
}
);