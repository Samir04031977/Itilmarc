function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

const nbQuestion = 40;

fetch("data.json")
  .then(function(response){
    response.json()
      .then(function(questionsData) {
        init(questionsData);
      })
      .catch(function(error) {
        console.log(error)
      })
  })
  .catch(function(error){
    console.log(error)
  });

function init(questionsData) {

  var ids = Object.keys(questionsData);
  shuffle(ids);

  var questions = [];
  for (var i = 0; i < nbQuestion; i++) {
    var quData = questionsData[ids[i]]
    questions.push({
      question: quData["question"],
      choices: quData["answers"],
      correctAnswer: quData["good"]
    })
  }

  $('#questionTotal').html(nbQuestion);

  console.log(questions);
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var showingAnswer = false;
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }

    if (!showingAnswer) {
      saveSelection();
      // If no user selection, progress is stopped
      if (!(questionCounter in selections)) {
        alert('Sélectionnez une réponse.');
      }
      else {
        showingAnswer = true;
        displayAnswer();
      }
    }
    else {
      questionCounter++;
      displayNext();
      showingAnswer = false;
    }
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div id="question">');
    qElement.append('<p><b>' + questions[index].question + '</b></p>');
    
    var choices = questions[index].choices;
    var radioList = $('<ul>');
    for (var choiceId of Object.keys(choices)) {
      var choiceText = choices[choiceId];
      var item = $('<li class="answer-line" id="answer-line-' + choiceId + '">');
      var input = '<input type="radio" name="answer" id="answer-' + choiceId + '" value="' + choiceId + '" />';
      input += '<label for="answer-' + choiceId + '">&nbsp;' + choiceId + '. ' + choiceText + '</label>';
      item.append(input);
      radioList.append(item);
    }
    qElement.append(radioList);
    
    return qElement;
  }
  
  // Reads the user selection and pushes the value to an array
  function saveSelection() {
    var val = $('input[name="answer"]:checked').val();
    if (val !== undefined)
      selections[questionCounter] = $('input[name="answer"]:checked').val();
  }

  function displayAnswer() {
    var selectedAnswer = selections[questionCounter];
    var goodAnswer = questions[questionCounter].correctAnswer;
    $('#answer-line-' + goodAnswer).addClass('good');
    if (selectedAnswer !== goodAnswer) {
      $('#answer-line-' + selectedAnswer).addClass('bad');
    }
    // countGoodAnswers()
    $('#answerGoodCount').html(countGoodAnswers());
    $('#answerTotalCount').html((questionCounter + 1));
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){

        $('#questionCurrent').html((questionCounter + 1));
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
        } else if(questionCounter === 0){
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<div id="question">');
    score.append('<h2>Résumé des réponses</h2>');
    for (var i = 0; i < questions.length; i++) {
      score.append('<hr>');

      var question = questions[i];
      score.append('<p><b>Q' + (i + 1) + '. ' + question.question + '</b></p>');

      var hasGoodAnswer = question.correctAnswer === selections[i];
      if (hasGoodAnswer) {
        score.append('<p class="good">Bonne réponse !</p>');
      }
      else {
        score.append('<p class="bad">Mauvaise réponse.</p>');
      }

      var list = $('<ul>');
      var choices = questions[i].choices;
      for (var choiceId of Object.keys(choices)) {
        var choiceText = choices[choiceId];
        var isGood = choiceId === question.correctAnswer;
        var isSelected = choiceId === selections[i];
        var item = $('<li class="answer-line' + (isGood ? ' good' : isSelected ? ' bad' : '') + '">');
        item.append(choiceId + '. ' + choiceText);
        list.append(item);
      }
      score.append(list);
    }
    return score;
  }

  function countGoodAnswers() {
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    return numCorrect;
  }
};