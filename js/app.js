"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    var myFirstObject = {
      firstName: "Richard",
      favoriteAuthor: "Conrad"
    };
    console.dir(myFirstObject);

    var ageGroup = {
      30: "Children",
      100: "Very Old"
    };
    console.log(ageGroup["30"]);

  });
});
