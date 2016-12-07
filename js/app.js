"use strict";

require(['jquery', 'MyApp'], function($, MyApp) {

  $(document).ready(function() {

    var myApp = new MyApp();

    console.log("--- Serialize and deserialize objects ---");

    console.log("- stringify");

    var xmasListObj = { mike: "book", jason: "sweater", chelsea: "iPad" };
    var xmasListJSONstr = JSON.stringify(xmasListObj);
    var xmasListJSONstrWithFormat = JSON.stringify(xmasListObj, null, 3);
    console.dir(xmasListObj);
    console.log(xmasListJSONstr);
    console.log(xmasListJSONstrWithFormat);

    console.log("- parse");

    var giftListJSONstr = '{"mike":"iMac","jason":"USB memory stick","chels":"iPad"}';
    var giftListObj = JSON.parse(giftListJSONstr);
    console.log(giftListJSONstr);
    console.dir(giftListObj);

  });
});
