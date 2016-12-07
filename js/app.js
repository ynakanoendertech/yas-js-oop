"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    var myFirstObject = {
      firstName: "Richard",
      favoriteAuthor: "Conrad"
    };
    console.dir(myFirstObject);

  });
});
