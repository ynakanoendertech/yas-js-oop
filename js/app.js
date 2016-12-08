"use strict";

require(['jquery', 'User'], function($, User) {

  $(document).ready(function() {

    var firstUser = new User("Richard", "Richard@example.com");
    firstUser.changeEmail("RichardB@example.com");
    firstUser.saveScore(15);
    firstUser.saveScore(10);
    console.log(firstUser.email);
    console.log(firstUser.showNameAndScores());

    var secondUser = new User("Peter", "Peter@example.com");
    secondUser.saveScore(18);
    console.log(secondUser.email);
    console.log(secondUser.showNameAndScores());

  });
});
