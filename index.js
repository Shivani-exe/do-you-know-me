var readlineSync = require("readline-sync");
var score=0;
var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName + " Do you know Shivani?");

function play(question,answer)
{
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log("Yay!! you are right");
      score = score + 1;
    }
    else
    {
      console.log("Nay!!you are wrong");
      
    }
    console.log("current score ", score);
    console.log("--------------------");
} 
//array of object
var highScore=[
  {
    name: "Shivani",
    score:3
  },
  {
   name: "Harshi",
   score:2
  }
];

var questionBank=[
  {
    question:"Where does she live?",
    answer:"Moradabad"
  },
  {
    question:"Where does she work?",
    answer:"TCS"
  },
  {
    question:"What is her favourite cuisine?",
    answer:"Italian"
  }
];
for(var i=0; i<questionBank.length;i ++)
{
  var currentQuestion = questionBank[i];
  play(currentQuestion.question,currentQuestion.answer)

}
console.log("YAY! You score ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");
for(var i=0;i<highScore.length;i++)
{
  var currentscore=highScore[i];
  console.log(currentscore.name);
  console.log(currentscore.score);
}
