
// all dependencies:
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'readme'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation information',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter contributing information',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter tests information',
        name: 'tests'
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
