const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

generateTeam = require('./src/templateHelper.js');
const outputDir = path.resolve(__dirname, 'dist');
const outputPath = path.join(outputDir, 'team.html');

teamArr = [];

function main() {

    function buildTeam () {

        inquirer.prompt([{

          type: 'list',
          message: 'What class of employee do you wish to add to the team?',
          name: 'addEmployeePrompt',
          choices: ['Manager', 'Engineer', 'Intern', 'No further team members to be created.']

        }]).then(function (userInput) {
          switch(userInput.addEmployeePrompt) {

            case 'Manager':
              addManager();
              break;

            case 'Engineer':
              addEngineer();
              break;

            case 'Intern':
              addIntern();
              break;

            default:
              buildHTML();
              break;
          }

        })
    }


  function buildHTML() {
    console.log('Team generated.')

      fs.writeFileSync(outputPath, generateTeam(teamArr), 'UTF-8')

  }

  function addManager() {
    inquirer.prompt ([
      
      {
        type: 'input',
        name: 'managerName',
        message: "New Manager's name: "
      },

      {
        type: 'input',
        name: 'managerId',
        message: "Manager's employee ID number: "
      },

      {
        type: 'input',
        name: 'managerEmail',
        message: "Manager's email: "
      },

      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Manager's office number: "
      }

    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArr.push(manager);
      buildTeam();
    });

  }

  function addEngineer() {
    inquirer.prompt([
      
      {
        type: 'input',
        name: 'engineerName',
        message: "Engineer's name: "
      },

      {
        type: 'input',
        name: 'engineerId',
        message: "Engineer's ID number: " 
      },

      {
        type: 'input',
        name: 'engineerEmail',
        message: "Engineer's email: "
      },

      {
        type: 'input',
        name: 'engineerGithub',
        message: "Engineer's GitHub: "
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArr.push(engineer);
      buildTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: 'input',
        name: 'internName',
        message: "Intern's name: "
      },

      {
        type: 'input',
        name: 'internId',
        message: "Intern's ID number: " 
      },

      {
        type: 'input',
        name: 'internEmail',
        message: "Intern's email: "
      },

      {
        type: 'input',
        name: 'internSchool',
        message: "Intern's school: "
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArr.push(intern);
      buildTeam();
    });

  }

  buildTeam();

}

main();