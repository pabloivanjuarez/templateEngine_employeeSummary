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
    name: "name",
    validate: valFunc
  },
  {
    type: "input",
    message: "Please give id number:",
    name: "id",
    validate: valFunc
  }, {
    type: "input",
    message: "Please give email:",
    name: "email",
    validate: valFunc
  }
]



module.exports = questions