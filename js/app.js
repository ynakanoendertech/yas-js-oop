"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Own and inherited properties ---");

    var school = { schoolName: "MIT" };
    console.log("schoolName" in school);  // 'in' operator returns true if the specified property is in the specified object
    console.log("schoolType" in school);
    console.log("toString" in school);  // 'toString' method is inherited from Object.prototype

    console.log("--- hasOwnProperty ---");

    var school2 = { schoolName: "MIT" };
    console.log(school.hasOwnProperty("schoolName"));
    console.log(school.hasOwnProperty("toString"));  // the inherited 'toString' method is NOT an own property of school

    console.log("--- Accessing and enumerating properties on objects ---");

    var school3 = { schoolName: "MIT", schoolAccredited: true, schoolLocation: "Massachusetts" };
    for (var eachItem in school3) {
      console.log( eachItem + " : " + school3[ eachItem ]);
    }

  });
});
