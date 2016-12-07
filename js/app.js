"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Prototype property ---");

    function PrintStuff(myDocuments) {
      this.documents = myDocuments;
    }

    // Add 'print' method so that it is inheritable
    PrintStuff.prototype.print = function() {
      console.log(this.documents);
    };

    // Create a new object and inherit 'print' method from PrintStuff
    var newObj = new PrintStuff("I am a new Object and I can print");
    newObj.print();

  });
});
