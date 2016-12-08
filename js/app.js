"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- All objects that inherit from another object also inherit a constructor property ---");

    var myObj = new Object();
    console.log(myObj.constructor);

    function Account() {
      this.name = "Account";
    }
    var myAccount = new Account();
    console.log(myAccount.constructor);

  });
});
