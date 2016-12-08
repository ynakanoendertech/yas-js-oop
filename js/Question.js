define(['jquery'], function($) {
  "use strict";

  // -------------------------
  // Question class
  // -------------------------

  // Constructor
  function Question(theQuestion, theChoices, theCorrectAnswer) {
    
    // Preserve this
    var self = this;

    // Instance properties
    self.question = theQuestion;
    self.choices = theChoices;
    self.correctAnswer = theCorrectAnswer;
    self.userAnswer = "";

    // Private properties: these cannot be changed by instances
    var newDate = new Date();

    // CONSTANT variable: available to all instances, also a private property
    var QUIZ_CREATED_DATE = newDate.toLocaleDateString();

    // Privileged method: accessor for QUIZ_CREATED_DATE
    self.getQuizDate = function() {
      return QUIZ_CREATED_DATE;
    };

    // A confirmation message that the question was created
    console.log("Quiz Created On: " + self.getQuizDate());
  }

  // Prototype (methods)
  Question.prototype = {
    constructor: Question,
    getCorrectAnswer: function() {
      return this.correctAnswer;
    },
    getUserAnswer: function() {
      return this.userAnswer;
    },
    displayQuestion: function() {
      var questionToDisplay = '<div class="question">' + this.question + '</div><ul>';
      var choiceCounter = 0;

      this.choices.forEach(function(eachChoice) {
        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
      });
      questionToDisplay += '</ul>';

      return questionToDisplay;
    }
  };

  // Return constructor
  return Question;
});