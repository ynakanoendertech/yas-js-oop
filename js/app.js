"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Prototype-based inheritance ---");

    // Plant

    function Plant() {
      this.country = "Mexico";
      this.isOrganic = true;
    }

    Plant.prototype.showNameAndColor = function() {
      return "I am a " + this.name + " and my color is " + this.color;
    };

    Plant.prototype.amIOrganic = function() {
      if (this.isOrganic) {
        return "I am organic, Baby!";
      } else {
        return "I am NOT organic :(";
      }
    };

    // Fruit

    function Fruit(fruitName, fruitColor) {
      this.name = fruitName;
      this.color = fruitColor;
    }

    // ==============================================
    // Inherit Plant.prototype methods and properties
    // ==============================================
    Fruit.prototype = new Plant();

    var aBanana = new Fruit("Banana", "Yellow");

    console.log("- Inherited object structure");

    console.dir(aBanana);
    for (var i in aBanana) {
      console.log(i);
    }

    console.log("- Using inherited methods and properties");

    console.log(aBanana.name);
    console.log(aBanana.color);
    console.log(aBanana.showNameAndColor());
    console.log(aBanana.amIOrganic());

  });
});
