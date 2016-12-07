"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Simple object ---");

    var myFirstObject = {
      firstName: "Richard",
      favoriteAuthor: "Conrad"
    };
    console.dir(myFirstObject);

    console.log("--- Number as a property name and use of bracket notation ---");

    var ageGroup = {
      30: "Children",
      100: "Very Old"
    };
    console.log(ageGroup["30"]);

    console.log("--- Reference data type and primitive data types ---");

    var person = "Kobe";  // Primitive data type String
    var anotherPerson = person;  // Primitive data saved-as-value (COPIED)
    person = "Bryant";
    console.log(anotherPerson);  // Value was NOT modified and retains the original value
    console.log(person);

    var person2 = { name: "Magic" };  // Non-primitive data
    var anotherPerson2 = person2;  // Non-primitive data saved-as-reference
    person2.name = "Jhonson";
    console.log(anotherPerson2.name);  // Value was changed
    console.log(person2.name);
  });
});
