// modules needed for this project

var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions =
{
    nameQuest: "What is your name?",
    titleQuest: "What is the title of your project?",
    descriptionQuest: "Please describe your project.",
    installQuest: "Please enter any instructions for installing your program.",
    usageQuest: "How will your program be used?",
    contribQuest: "Please provide guidelines for others to contribute to your project.",
    testQuest: "Please provide instructions for testing your project.",
    licenseQuest: "Please choose a license from the list.",
    gitHubQuest: "Please enter your GitHub username.",
    emailQuest: "Please enter your email address."
};

// function to write README file - see below at the end of the inquirer prompt for the creation of a .jsonf file.

function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

// inquirer prompt array drawing from questions array, above

//  HOW DO I ADD SOME INFORMATIONAL PROMPT IN BETWEEN? TO USE EDITOR TYPE THE USER HAS TO KNOW HOW TO GET OUT OF THE EDITOR WHEN FINISHED.

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: questions.nameQuest
    },
    {
        type: "input",
        name: "title",
        message: questions.titleQuest
    },
    {
        type: "editor",
        name: "description",
        message: questions.descriptionQuest
    },
    {
        type: "editor",
        name: "installInstructions",
        message: questions.installQuest
    },
    {
        type: "editor",
        name: "usage",
        message: questions.usageQuest
    },
    {
        type: "editor",
        name: "contribution",
        message: questions.contribQuest
    },
    {
        type: "editor",
        name: "test",
        message: questions.testQuest
    },
    {
        type: "list",
        name: "license",
        message: questions.licenseQuest,
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "gitHubName",
        message: questions.gitHubQuest
    },
    {
        type: "input",
        name: "email",
        message: questions.emailQuest
    }
]).then(function (data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");
    })
});

