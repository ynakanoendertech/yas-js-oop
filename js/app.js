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

    console.log("--- Object data properties have attributes ---");

    var o = {};  // Creates a new object

    // Example of an object property added with defineProperty with a DATA property descriptor
    Object.defineProperty(o, 'a', {
      value: 37,
      writable: true,
      enumerable: true,
      configurable: true
    });
    console.dir(o.a);

    // Example of an object property added with defineProperty with an ACCESSOR property descriptor
    var bValue = 38;
    Object.defineProperty(o, 'b', {
      get: function() { return bValue; },
      set: function(newValue) { bValue = newValue; },
      enumerable: true,
      configurable: true
    });
    console.dir(o.b);  // The value of o.b is always identical to bValue unless it is redefined

    // You cannot mix both
    /*
    Object.defineProperty(o, 'conflict', {
      value: 0x9f91102,
      get: function() { return 0xdeadbeef; }
    });
    */

    // Writable attribute
    var o2 = {};
    Object.defineProperty(o2, 'a', {
      value: 39,
      writable: false
    });
    console.log(o2.a);
    o.a = 25;  // No error thrown!!
    console.log(o2.a);  // The assignment didn't work

    // Enumerable attribute
    var o3 = {};
    Object.defineProperty(o3, 'a', { value: 1, enumerable: true });
    Object.defineProperty(o3, 'b', { value: 2, enumerable: false });
    Object.defineProperty(o3, 'c', { value: 3 });  // Enumerable defaults to false
    o3.d = 4;  // Enumerable defaults to true when creating a property by setting it

    for (var i in o3) {
      console.log(i);  // Logs 'a' and 'd' (in undefined order)
    }

    console.dir( Object.keys(o3) );
    console.log( o3.propertyIsEnumerable('a') );
    console.log( o3.propertyIsEnumerable('b') );
    console.log( o3.propertyIsEnumerable('c') );
    console.log( o3.propertyIsEnumerable('d') );

    // Configurable attribute
    var o4 = {};
    Object.defineProperty(o4, 'a', {
      get: function() { return 1; },
      configurable: false
    });

    /*
    Object.defineProperty(o4, 'a', { configurable: true });  // TypeError
    Object.defineProperty(o4, 'a', { enumerable: true });  // TypeError
    Object.defineProperty(o4, 'a', { set: function() {} });  // TypeError
    Object.defineProperty(o4, 'a', { get: function() { return 1; }});  // TypeError
    Object.defineProperty(o4, 'a', { value: 12 }); // TypeError
    delete o4.a; // TypeError
    */

  });
});
