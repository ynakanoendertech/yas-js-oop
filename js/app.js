"use strict";

require(['jquery', 'User', 'Question', 'MultipleChoiceQuestion', 'DragDropQuestion'], function($, User, Question, MultipleChoiceQuestion, DragDropQuestion) {

  $(document).ready(function() {

    var u = new User();
    console.dir(u);

    var allQuestions = [
      new Question("What is cat?", ["Satan", "God"], "God"),
      new MultipleChoiceQuestion("What is cat?", ["Satan", "God"], "God"),
      new DragDropQuestion("What is cat?", ["Satan", "God"], "God")
    ];

    // Display all questions
    allQuestions.forEach(function(eachQuestion) {
      console.log(eachQuestion.displayQuestion());
    });

  });
});
