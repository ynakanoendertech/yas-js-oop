"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Practical patterns for creating objects ---");

    // Unpractical - literal object creation with static member values

    var mangoFruit = {
      color: "yellow",
      sweetness: 8,
      fruitName: "Mango",
      nativeToLand: ["South America", "Central America"],
      showName: function() {
        console.log("This is a " + this.fruitName);
      },
      nativeTo: function() {
        this.nativeToLand.forEach(function(eachCountry) {
          console.log("Grown in: " + eachCountry);
        })
      }
    };
    mangoFruit.showName();
    mangoFruit.nativeTo();

    // Constructor pattern for creating objects

    function Fruit(theColor, theSweetness, theFuiteName, theNativeToLand) {
      this.color = theColor;
      this.sweetness = theSweetness;
      this.fuiteName = theFuiteName;
      this.nativeToLand = theNativeToLand;
      this.showName = function() {
        console.log("This is a " + this.fuiteName);
      };
      this.nativeTo = function() {
        this.nativeToLand.forEach(function(eachCountry) {
          console.log("Grown in: " + eachCountry);
        });
      };
    }

    var mangoFruite2 = new Fruit("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
    mangoFruite2.showName();
    mangoFruite2.nativeTo();

  });
});
