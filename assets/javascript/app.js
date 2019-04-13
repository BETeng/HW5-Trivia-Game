//javascript/jquery for triva game //


//<----------- VARIABLES -----------------------> //
var countdown = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var secondsCounter = 3;
var intervalId='';
var questions = [{
  prompt:'what color be apples?',
  choiceA:'Red',
  choiceB:'Blue',
  choiceC:'Black', 
  answer:'A'},
  {
  prompt:'what is a solid food?',
  choiceA:'Water',
  choiceB:'Milk',
  choiceC:'Cookies',
  answer: 'C'},
  {
  prompt:'Which is not a froot?',
  choiceA:'pomegrante',
  choiceB:'celery',
  choiceC:'orrange',
  answer: 'B'}
  ]
  var lastQuestion = questions.length-1;
  var runningQuestion = 0;



//1. press start to start game
$('#start').on('click', function () {
  console.log('Start');
  $('#start').hide();
  StartInterval();
  renderQuestion();



  
});

//2. countdown-timer created for each individual question

function StartInterval(){
  $('#quiz').show();
  intervalId = setInterval(function () {
    secondsCounter--;
    console.log(secondsCounter);
    if (secondsCounter <= 0) {
      clearInterval(intervalId);
      unanswered++;
      showAnswer();
      runningQuestion++;
    }
    else{
      $('#htmlTimer').text('Time Remaining: '+secondsCounter);
    }
  }, 1000)
}
$('.choice').click(function(){
  console.log('this: '+this.id);
  
  userAnswer=this.id;
  console.log('useranswer: '+userAnswer);
})
function renderQuestion(){
  let q = questions[runningQuestion];
  $('#question').text(q.prompt);
  $('#A').text(q.choiceA);
  $('#B').text(q.choiceB);
  $('#C').text(q.choiceC);
  
  
}
function showAnswer(){
  $('#question').empty();
  $('.choice').empty();
  
  console.log("showAnswer works");

}



function checkAnswer(userAnswer){
  if(questions[runningQuestion].answer == userAnswer){
    correct++;
  }
  else{
    incorrect++;
  }
  if(runningQuestion<lastQuestion){
    runningQuestion++;
    renderQuestion();
  }
  else{
    console.log('thats it')
  }
}


//3. conditions set for answers
//when timer == 0 correct asnwer is shown "TIMES UP"
//if wrong answer is clicked correct answer is shown "INCORRECT"
//if correct answer is clicked correct asnwer is shown "CORRECT"

//3.5 when correct answer shown it lasts for 5 seconds and then moves onto next slide

//4. SCORING
//tally time up as unanswered
//tally wrong as incorrect
//tally correct as correct

//5. Start over button
//does not reload page but instead restarts the game

//6. create variables of correct/incorrect/unanswered
// var correct = 0;
// var incorrect =0;
// var unasnwered = 0;

//7. highlight div when cursor hovers over choice



//make a question div that will empty after each question
//options must be clickable and trigger event onclick
//if answer is right set rightanswer = true
//if answer is wrong set rightanswer = false
//onclick event for true and false
// if(rightanswer){
//correct++;
//console.log("correct: "+correct)
//}




