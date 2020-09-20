const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let questions = require("./lib/QuestionObj")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
var teamMembers = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//render manipulated in order to test app
const {
  render
} = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//validate function
function valFunc(answer) {
  if (answer !== "") {
    return true;
  }
  return "please fill out!"
}

function team() {
  inquirer.prompt([{
    type: "list",
    message: "What team member would you like to add?",
    name: "teamChoice",
    choices: ["Manager", "Engineer", "Intern", "END"]
  }]).then(answer => {
    switch (answer.teamChoice) {
      case "Manager":
        addManager();
        break;

      default:
        builder()
    }
    switch (answer.teamChoice) {
      case "Engineer":
        addEngineer();
        break;

      default:
        builder()
    }
    switch (answer.teamChoice) {
      case "Intern":
        addIntern();
        break;

      default:
        builder()
    }
    // repeat for en and intern
  })
}

function addManager() {
  var uniqueQuestion = [{
    type: "input",
    message: "Please give Office Number:",
    name: "managerOfficeNum",
    validate: valFunc
  }]
  let managerQuestions = [...questions, ...uniqueQuestion]
  inquirer.prompt(managerQuestions).then(function (managerAnswers) {
    //adding answers to Manager handler
    const manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.managerOfficeNum)
    teamMembers.push(manager)
    //calling starter function, choices
    team()
  })
}

function addEngineer() {
  var uniqueQuestion2 = [{
    type: "input",
    message: "Please give GitHub username:",
    name: "gitHub",
    validate: valFunc
  }]
  let engineerQuestions = [...questions, ...uniqueQuestion2]
  inquirer.prompt(engineerQuestions).then(function (engineerAnswers) {
    //adding answers to Engineer handler
    const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerID, engineerAnswers.engineerEmail, engineerAnswers.gitHub)
    teamMembers.push(engineer)
    //calling starter function, choices
    team()
  })
}

function addIntern() {
  var uniqueQuestion3 = {
    type: "input",
    message: "Please give school name:",
    name: "school",
    validate: valFunc
  }
  questions.push(uniqueQuestion3)
  inquirer.prompt(questions).then(function (internAnswers) {
    //adding answers to Intern handler
    const intern = new Intern(internAnswers.internName, internAnswers.internID, internAnswers.internEmail, internAnswers.school)
    teamMembers.push(intern)
    //calling starter function, choices
    team()
  })
}

function builder() {
  fs.writeFileSync(outputPath, render(teamMembers))
}

team()


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```