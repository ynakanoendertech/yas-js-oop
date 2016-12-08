define(['jquery'], function($) {
  "use strict";

  // User class
  
  function User(theName, theEmail) {
    
    // Preserve this
    var self = this;

    self.name = theName;
    self.email = theEmail;
    self.quizScores = [];
    self.currentStore = 0;
  }

  User.prototype = {
    constructor: User,
    saveScore: function(theScoreToAdd) {
      this.quizScores.push(theScoreToAdd);
    },
    showNameAndScores: function() {
      var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
      return this.name + " Scores: " + scores;
    },
    changeEmail: function(newEmail) {
      this.email = newEmail;
      return "New Email Saved: " + this.email;
    }
  };

  // Return constructor
  return User;
});
