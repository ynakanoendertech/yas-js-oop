"use strict";

require(['jquery', 'User', 'Question'], function($, User, Question) {

  $(document).ready(function() {

    var u = new User();
    console.dir(u);

    var q = new Question("What is cat?", ["Satan", "God"], "God");
    console.dir(q);
    console.log(q.displayQuestion());

  });
});
