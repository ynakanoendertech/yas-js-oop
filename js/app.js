"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Prototype attribute of objects created with new Object() or object literal ---");

    var userAccount1 = new Object();
    console.dir(userAccount1);

    var userAccount2 = {
      name: "Mike"
    };
    console.dir(userAccount2);
    console.log(userAccount2.propertyIsEnumerable("name"));

    console.log("--- Prototype attribute of objects created with a constructor function ---");

    function Account() {
      this.name = "Mike";
    }
    var userAccount3 = new Account();
    console.dir(userAccount3);
    console.log(userAccount3.propertyIsEnumerable("name"));

    console.log("--- Prototype property is not enumerable ---");

    function Account2() {}
    Account2.prototype.name = "Bob";
    var userAccount4 = new Account2();
    console.dir(userAccount4);
    console.log(userAccount4.propertyIsEnumerable("name"));

  });
});
