define(['jquery'], function($) {
  "use strict";

  function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype);
    childObject.prototype = copyOfParent;
    copyOfParent.constructor = childObject;
  }

  return inheritPrototype;
});