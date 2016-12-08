"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("=== Accessing properties on objects with prototype chain ===");

    console.log("--- Object created with literal ---");

    var myFriends = { name: "Pete" };

    console.log("- Resulted object structure");

    console.dir(myFriends);

    console.log("- Access own property")

    console.log(myFriends.name);

    console.log("- Access inherited property with prototype chain")

    console.log("constructor(): " + myFriends.constructor());
    console.log("hasOwnProperty(): " + myFriends.hasOwnProperty("name"));
    console.log("isPrototypeOf(): " + myFriends.isPrototypeOf());
    console.log("propertyIsEnumerable(): " + myFriends.propertyIsEnumerable("name"));
    console.log("toLocaleString(): " + myFriends.toLocaleString());
    console.log("toString(): " + myFriends.toString());
    console.log("valueOf(): " + myFriends.valueOf());

    console.log("--- Object created with constructor ---");

    function People() {
      this.superstar = "MJ";
    }

    People.prototype.athlete = "Tiger Woods";

    var famousPerson = new People();
    famousPerson.superstar = "Steve Jobs";

    console.log("- Resulted object structure");

    console.dir(famousPerson);

    console.log(famousPerson.superstar);
    console.log(famousPerson.athlete);
    console.log(famousPerson.toString());

  });
});
