function valFunc(answer) {
  if (answer !== "") {
    return true;
  }
  return "please fill out!"
}
// class BasicQuestions {
var questions = [{
    type: "input",
    message: "Please give name:",
    name: "managerName",
    validate: valFunc
  },
  {
    type: "input",
    message: "Please give id number:",
    name: "managerID",
    validate: valFunc
  }, {
    type: "input",
    message: "Please give email:",
    name: "managerEmail",
    validate: valFunc
  }
]



module.exports = questions