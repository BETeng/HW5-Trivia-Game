//javascript/jquery for triva game //


//1. press start to start game

//2. countdown-timer created for each individual question
    // timer starts when next slide is shown


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
  var correct = 0;
  var incorrect =0;
  var unasnwered = 0;

//7. 



//make everything a part of a slideshow??
//options must be clickable and trigger event onclick
  //if answer is right set rightanswer = true
  //if answer is wrong set rightanswer = false
  //onclick event for true and false
    // if(rightanswer){
      //correct++;
      //console.log("correct: "+correct)
    //}