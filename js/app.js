"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Own and inherited properties ---");

    var school = { schoolName: "MIT" };
    console.log("schoolName" in school);  // 'in' operator returns true if the specified property is in the specified object
    console.log("schoolType" in school);
    console.log("toString" in school);  // 'toString' method is inherited from Object.prototype
  });
});
