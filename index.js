const logo = require("asciiart-logo");
const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");
  
  init();
  
  // Display logo text, load main prompts
  function init() {
    const logoText = logo({ name: "Employee Manager" }).render();
  
