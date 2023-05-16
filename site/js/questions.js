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

const nbQuestion = 1;

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

  console.log(questions);
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    saveSelection();
    
    // If no user selection, progress is stopped
    if (!(questionCounter in selections)) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    saveSelection();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ' :</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var choices = questions[index].choices;
    var form = $('<form>');
    var radioList = $('<ul>');
    var input = '';
    for (var choiceId of Object.keys(choices)) {
      var choiceText = choices[choiceId];
      var item = $('<li>');
      input = '<input type="radio" name="answer" id="answer-' + choiceId + '" value="' + choiceId + '" />';
      input += '<label for="answer-' + choiceId + '">' + choiceId + '. ' + choiceText + '</label>';
      item.append(input);
      radioList.append(item);
    }
    form.append(radioList);
    return form;
  }
  
  // Reads the user selection and pushes the value to an array
  function saveSelection() {
    selections[questionCounter] = $('input[name="answer"]:checked').val();
    console.log(selections);
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    score.append('<p>' + questions[0].question);
    score.append('<p>');
    if (numCorrect == 1) {
      score.append('<p>Bonne réponse !');
    }
    else {
      score.append('<p>Mauvaise réponse.');
    }
    score.append('<p>La bonne réponse était <i>' + questions[0].correctAnswer + '</i><p>' +
                 questions[0].choices[questions[0].correctAnswer]);
    return score;
  }
};