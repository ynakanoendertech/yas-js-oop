define(['jquery', 'inheritPrototype', 'Question'], function($, inheritPrototype, Question) {
  "use strict";

  // -------------------------
  // MultipleChoiceQuestion class
  // -------------------------

  function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer) {

    // Preserve this
    var self = this;

    // Call parent's constructor
    Question.call(self, theQuestion, theChoices, theCorrectAnswer);

  }

  inheritPrototype(MultipleChoiceQuestion, Question);

  // Override method
  MultipleChoiceQuestion.prototype.displayQuestion = function() {
    return this.question + ": [" + this.choices.join(",") + "]";
  };

  // Return constructor
  return MultipleChoiceQuestion;
});