"use strict";

requirejs.config({
  baseUrl: '.',
  paths: {
    jquery: "node_modules/jquery/dist/jquery",
    inheritPrototype: "js/inheritPrototype",
    User: "js/User",
    Question: "js/Question",
    MultipleChoiceQuestion: "js/MultipleChoiceQuestion",
    DragDropQuestion: "js/DragDropQuestion"
  }
});
