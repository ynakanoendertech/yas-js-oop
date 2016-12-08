"use strict";

require(['jquery', 'User', 'Question', 'MultipleChoiceQuestion', 'DragDropQuestion'], function($, User, Question, MultipleChoiceQuestion, DragDropQuestion) {

  $(document).ready(function() {

    var u = new User();
    console.dir(u);

    var q = new Question("What is cat?", ["Satan", "God"], "God");
    console.dir(q);
    console.log(q.displayQuestion());

    var mcq = new MultipleChoiceQuestion("What is cat?", ["Satan", "God"], "God");
    console.dir(mcq);

  });
});
