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

    console.log("--- Practical patterns for creating objects ---");

    var mangoFruit = {
      color: "yellow",
      sweetness: 8,
      fruitName: "Mango",
      nativeToLand: ["South America", "Central America"],
      showName: function() {
        console.log("This is " + this.fruitName);
      },
      nativeTo: function() {
        this.nativeToLand.forEach(function(eachCountry) {
          console.log("Grown in: " + eachCountry);
        })
      }
    };
    mangoFruit.showName();
    mangoFruit.nativeTo();

  });
});
