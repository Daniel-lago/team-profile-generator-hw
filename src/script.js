const fs = require('fs');
const inquirer = require('inquirer');
const bodyTemplate = require ("../src/bodyHTML")

// IMPORT CLASSES
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

// Arrays will contain every user added
let managerArr = [];
let engineerArr = [];
let internArr= [];

// Containers for each HTML 
let arrM="";
let arrE="";
let arrI="";


//FIRST PROMPT TO CREATE MANAGER CARD INFO
const questionsManager = [
	{
    type: "input",
    name: "managerName",
    message: "Please enter the team manager’s name", 
    validate: managerName => {
      if (managerName.trim().length > 0){
        return true
      } else {
        console.log("Please enter a valid Manager's name")
        return false
      }
    }
  },
  {
    type: "input",
    name: "managerId",
    message: "Please enter the team manager’s ID", 
    validate: managerId => {
      if (managerId.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid Manager's ID")
        return false
      }
    }
  },
  {
    type:"input",
    name:"managerEmail",
    message: "Please add manager's Email",
    validate:  managerEmail => {
      if (managerEmail.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid Manager´s Email")
        return false
      }
    }
  },
  {
    type: "input",
    name: "managerOffice",
    message: "Please enter the team manager’s office number", 
    validate: managerOffice => {
      if (managerOffice.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid Manager's Office Number")
        return false
      }
    }
  }
];

//QUESTION TO ADD MORE COWORKERS
const addQuestion = 
[
  {
    type: "list",
    name: "addCollab",
    message: "Add one collaborator ", 
    choices: ["Engineer", "Intern", "No"],
    validate: addCollab => {
      if (addCollab === "No"){
        console.log(addCollab)
    }
  }
  }
];

//QUESTIONS FOR ENGINEER
const engineerQuestions = 
[
  {
    type:"input",
    name:"engineerName",
    message: "Please add engineer's name",
    validate:  engineerName => {
      if (engineerName.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid Engineer´s Name")
        return false
      }
    }
  },
  
  {
    type:"input",
    name:"engineerId",
    message: "Please add engineer's ID",
    validate:  engineerId => {
      if (engineerId.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid Engineer´s Id")
        return false
      }
    }
  },
  {
    type:"input",
    name:"engineerEmail",
    message: "Please add engineer's Email",
    validate:  engineerEmail => {
      if (engineerEmail.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid Engineer´s Email")
        return false
      }
    }
  },
  {
    type:"input",
    name:"engineerGithub",
    message: "Please add engineer's Github",
    validate:  engineerGithub => {
      if (engineerGithub.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid Engineer´s Github")
        return false
      }
    }
  }
];

//QUESTIONS FOR INTERN
const internQuestions= 
[
  {
    type:"input",
    name:"internName",
    message: "Please add intern's name",
    validate:  internName => {
      if (internName.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid Intern´s Name")
        return false
      }
    }
  },
  {
    type:"input",
    name:"internId",
    message: "Please add intern's ID",
    validate:  internId => {
      if (internId.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid intern´s Id")
        return false
      }
    }
  },
  {
    type:"input",
    name:"internEmail",
    message: "Please add intern's Email",
    validate:  internEmail => {
      if (internEmail.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid intern´s Email")
        return false
      }
    }
  },
  {
    type:"input",
    name:"internSchool",
    message: "Please add intern's School",
    validate:  internSchool => {
      if (internSchool.trim().length > 0){
        return true;
      } else {
        console.log("Please enter a valid Intern´s School")
        return false
      }
    }
  }
]

function init() {
  inquirer
  .prompt(questionsManager)
  .then(function(answer){
    managerArr.push(answer);
    addAnother();
  });
}

function addAnother () {
  inquirer
  .prompt(addQuestion)
  .then(function(answer){
    if (answer.addCollab==="Engineer"){
      console.log(`----- ENGINEER -----`);
      return questionEngineer();
    } else if (answer.addCollab === "Intern") {
      console.log(`----- INTERN -----`)
      return questionIntern();
    } else if (answer.addCollab === "No") {
      questionNo();
    }
  })
}

function questionEngineer() {
  inquirer
  .prompt(engineerQuestions)
  .then(function(answer){
    engineerArr.push(answer);
    addAnother();
  })
}

function questionIntern() {
  inquirer
  .prompt(internQuestions)
  .then(function(answer){
    internArr.push(answer);
    addAnother();
  })
}

function questionNo() {
  if(engineerArr.length<1 && internArr.length<1 ) {
    console.log("Please add at least one coworker")
    return addAnother();
  } else if (engineerArr.length>0 || internArr.length>0) {
    console.log(`
    ------- TEAM CREATED -------
    - Please check Dist Folder -
    `)
    return classFill();
  }
}

function classFill (){
  managerArr.map((e) =>{
    userManager = new Manager(e.managerName, e.managerEmail, e.managerId, e.managerOffice)
    arrM+= userManager.managerHTML();  
  })

  engineerArr.map((e) => {
    userEngineer= new Engineer (e.engineerName, e.engineerId, e.engineerEmail, e.engineerGithub)
    arrE += userEngineer.engineerHTML()
  })

  internArr.map((e) =>{
    userIntern = new Intern (e.internName, e.internId, e.internEmail, e.internSchool)
    arrI += userIntern.internHTML()
  })
  webCreator();
};

function webCreator() {
  webContainer = bodyTemplate(arrM, arrE, arrI);
  fs.writeFile('../dist/index.html', webContainer, err => {
    if (err) {
      console.error(err);
    }
  });
}

init ();