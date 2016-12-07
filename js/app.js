"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Deleting properties of an object ---");

    console.log("- Deleting own property and deleting toString");

    var xmasList = { mike: "Book", jason: "seater" };
    delete xmasList.mike;
    for (var people in xmasList) {
      console.log(people);
    }
    delete xmasList.toString;  // Returns true, but inherited method 'toString' is NOT deleted
    console.log( xmasList.toString() );

    console.log("- Deleting own proprty");

    function HigherLearning() {
      this.educationLevel = "University";
    }

    var school = new HigherLearning ();
    school.schoolName = "MIT";
    school.schoolAccredited = true;
    school.schoolLocation = "Massachusetts";
    console.log(school.hasOwnProperty("educationLevel"));  // True
    delete school.educationLevel;  // We can delete it
    console.log( school.educationLevel );  // undefined

    var newSchool = new HigherLearning();
    console.log(newSchool.educationLevel);  // educationLevel is still available on the HigherLearning function

    console.log("- Deleting inherited property returns true, but not deleted");

    function HigherLearning2() {
      this.educationLevel = "University";
    }
    HigherLearning2.prototype.educationLevel2 = "Univ2";
    var school2 = new HigherLearning2();
    console.log(school2.hasOwnProperty("educationLevel2"));  // false, educationLevel2 is an inherited property
    console.log(school2.educationLevel2);
    delete school.educationLevel2;  // Returns true, but inherited method 'educationLevel2' is NOT deleted
    console.log(school2.educationLevel2);

  });
});
