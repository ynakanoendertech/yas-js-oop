"use strict";

require(['jquery', 'User', 'Question', 'MultipleChoiceQuestion', 'DragDropQuestion'], function($, User, Question, MultipleChoiceQuestion, DragDropQuestion) {

  $(document).ready(function() {

    var u = new User();
    console.dir(u);

    console.log('---------------------------------------------');

    var q = new Question("What is cat?", ["Satan", "God"], "God");
    console.dir(q);
    console.log(q.displayQuestion());

    console.log('---------------------------------------------');

    var mcq = new MultipleChoiceQuestion("What is cat?", ["Satan", "God"], "God");
    console.dir(mcq);
    console.log(mcq.displayQuestion());

    console.log('---------------------------------------------');

    var ddq = new DragDropQuestion("What is cat?", ["Satan", "God"], "God");
    console.dir(ddq);
    console.log(ddq.displayQuestion());

  });
});
