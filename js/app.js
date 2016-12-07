"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Creating objects ---");

    // Object literals

    var myBooks = {};
    console.dir(myBooks);

    var mango = {
      color: "yello",
      shape: "round",
      sweetness: 8,
      howSweetAmI: function() {
        console.log( this.sweetness );
      }
    };
    console.dir(mango);
    mango.howSweetAmI();

    // Object constructor (use the 'new' keyword)

    var orange = new Object();
    orange.color = "orange";
    orange.shape = "round";
    orange.sweetness = 6;
    orange.howSweetAmI = function() {
      console.log( this.sweetness );
    };
    console.dir(orange);
    orange.howSweetAmI();

  });
});
