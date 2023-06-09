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


var urlParams = new URLSearchParams(window.location.search);

// s = 100%, l = 40%
var greenH = 120;
var redH = 0;

fetch("data.json")
  .then(function(response){
    response.json()
      .then(function(questionsData) {
        init(questionsData);
      })
      .catch(function(error) {
        $('#quiz').append('<p>Erreur de décodage des données de questions/réponses. Voir la console pour les détails.</p>').fadeIn();
        console.log(error);
      })
  })
  .catch(function(error){
    $('#quiz').append('<p>Erreur de récupération des données de questions/réponses. Voir la console pour les détails.</p>').fadeIn();
    console.log(error);
  });

function init(questionsData) {

  var ids = Object.keys(questionsData);
  shuffle(ids);
  
  var nbQAsked = parseInt(urlParams.get("n"));
  const nbQuestion = isNaN(nbQAsked) ? 40 : Math.min(Math.max(nbQAsked, 1), ids.length);

  const timePerQu = 3600000 / 40; // 1min30 / 1 question <=> 1h / 40 question
  const maxTime = timePerQu * nbQuestion;

  
  var secTotal = parseInt(maxTime / 1000);
  var minTotal = parseInt(secTotal / 60);
  secTotal = secTotal % 60;
  $('.time-total-time').html(String(minTotal).padStart(2, '0') + ':' + String(secTotal).padStart(2, '0'));
  document.getElementById("time-progress").max = maxTime;

  var timerStart = Date.now();
  var refreshInterval = Math.max(30, Math.min(200, maxTime / (2 * window.screen.width)));
  var timerInterval = setInterval(function() {
    var timerNow = Date.now();
    var progress = timerNow - timerStart;
    if (progress > maxTime) {
      progress = maxTime;
      clearInterval(timerInterval);
    }
    document.getElementById("time-progress").value = progress;
    var sec = parseInt(progress / 1000);
    var min = parseInt(sec / 60);
    sec = sec % 60;
    $('.time-progress-time').html(String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0'));

    // compute progresbar color
    var remTime = maxTime - progress;
    var remQu = nbQuestion - questionCounter;
    var progressHue = 0;
    if (remTime == 0)
      progressHue = redH;
    else if (remQu == 0)
      progressHue = greenH;
    else {
      var remTimePerQu = remTime / remQu;
      if (remTimePerQu > timePerQu)
        progressHue = greenH;
      else if (remTimePerQu < 20000)
        progressHue = redH;
      else
        progressHue = redH + (remTimePerQu - 20000) * (greenH - redH) / (timePerQu - 20000);
    }
    document.getElementById('time-progress').style.setProperty('--progress-background', 'hsl(' + progressHue + ', 100%, 40%)');
  }, refreshInterval);

  var questions = [];
  for (var i = 0; i < nbQuestion; i++) {
    questions.push(questionsData[ids[i]]);
  }

  $('#questionTotal').html(nbQuestion);
  
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

    if (questionCounter >= questions.length) {
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
  
  // Click handler for the 'start' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }

    if (questionCounter <= 0
        || questionCounter >= questions.length
        || confirm('Êtes vous sûr de vouloir recommencer ?')) {
      window.location.reload();
    }
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var question = questions[index];
    var qElement = $('<div id="question">');
    var qTxtElement = $('<p id="question-text">');
    qTxtElement.append('<b>' + question.question + '</b>');
    qTxtElement.append('<div class="explain" id="question-explain"></div>');
    if (question.question_choices) {
      var choicesList = $('<ul>');
      for (var choiceId of Object.keys(question.question_choices)) {
        choicesList.append('<li class="question-choice" id="question-choice-' + choiceId + '">' + choiceId + '. ' + question.question_choices[choiceId]
            + '<div class="explain" id="question-choice-' + choiceId + '-explain"></div></li>');
      }
      qTxtElement.append(choicesList);
    }
    qElement.append(qTxtElement);
    
    
    var answers = question.answers;
    var radioList = $('<ul>');
    for (var answerId of Object.keys(answers)) {
      var choiceText = answers[answerId];
      var item = $('<li class="answer-line" id="answer-line-' + answerId + '">');
      var input = '<input type="radio" name="answer" id="answer-' + answerId + '" value="' + answerId + '" />';
      input += '<label for="answer-' + answerId + '">&nbsp;' + answerId + '. ' + choiceText + '</label>';
      input += '<div class="explain" id="answer-' + answerId + '-explain"></div>';
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
      selections[questionCounter] = val;
    console.log(val, questions[questionCounter].good);
  }

  function displayAnswer() {
    var question = questions[questionCounter];
    var selectedAnswer = selections[questionCounter];
    // show good and bad answers
    $('input[name="answer"]').prop("disabled", true);
    var goodAnswer = question.good;
    $('#answer-line-' + goodAnswer).addClass('good');
    if (selectedAnswer !== goodAnswer) {
      $('#answer-line-' + selectedAnswer).addClass('bad');
    }

    // show answer explainations
    if (question.question_explain) {
      document.getElementById('question-explain').innerHTML = question.question_explain;
      document.getElementById('question-explain').style.display = 'block';
    }
    if (question.question_choices_explain) {
      for (var choiceId of Object.keys(question.question_choices_explain)) {
        document.getElementById('question-choice-' + choiceId + '-explain').innerHTML = question.question_choices_explain[choiceId];
        document.getElementById('question-choice-' + choiceId + '-explain').style.display = 'block';
      }
    }
    if (question.answers_explain) {
      for (var answerId of Object.keys(question.answers_explain)) {
        document.getElementById('answer-' + answerId + '-explain').innerHTML = question.answers_explain[answerId];
        document.getElementById('answer-' + answerId + '-explain').style.display = 'block';
      }
    }

    // update answer count display
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
      }
      else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    clearInterval(timerInterval);
    var score = $('<div id="question">');
    score.append('<h2>Résumé des réponses</h2>');
    for (var i = 0; i < questions.length; i++) {
      score.append('<hr>');

      var question = questions[i];
      score.append('<p><b>Q' + (i + 1) + '. ' + question.question + '</b></p>');

      var hasGoodAnswer = question.good === selections[i];
      if (hasGoodAnswer) {
        score.append('<p class="good">Bonne réponse !</p>');
      }
      else {
        score.append('<p class="bad">Mauvaise réponse.</p>');
      }

      var list = $('<ul>');
      var choices = questions[i].answers;
      for (var choiceId of Object.keys(choices)) {
        var choiceText = choices[choiceId];
        var isGood = choiceId === question.good;
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
      if (selections[i] === questions[i].good) {
        numCorrect++;
      }
    }
    return numCorrect;
  }
};