define(['jquery', 'inheritPrototype', 'Question'], function($, inheritPrototype, Question) {
  "use strict";

  // -------------------------
  // DragDropQuestion class
  // -------------------------

  function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {

    // Preserve this
    var self = this;

    Question.call(self, theQuestion, theChoices, theCorrectAnswer);

  }

  inheritPrototype(DragDropQuestion, Question);

  // Override method
  DragDropQuestion.prototype.displayQuestion = function() {
    return this.question;
  };

  // Return constructor
  return DragDropQuestion;
});