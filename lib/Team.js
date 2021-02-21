const inquirer = require('inquirer');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const Manager = require('./Manager');

function Team() {
    this.interns = [];
    this.engineers = [];
    this.manager;
};

Team.prototype.buildTeam = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'managerName',
                message: "What is the team manager's name?"
            },
            {
                type: 'text',
                name: 'managerId',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'text',
                name: 'managerEmail',
                message: "What is the team manager's email address?",
                validate: function (email) {

                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log(".  Please enter a valid email")
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number?"
            }

        ])
        .then(({ managerName, managerId, managerEmail, managerOfficeNumber }) => {
            this.manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);

            this.addMembers();
        });
};

Team.prototype.addMembers = function () {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'addMore',
                message: 'Would you like to add another team member?',
                choices: ['1: Add an Engineer', '2: Add an Intern', '3: No, I have no more team members to add']
            }

        )
        .then((addMore) => {
            const nextAction = addMore.addMore.split(':')[0];
            if (nextAction === '1') {
                this.addEngineer();
            }
            else if (nextAction === '2') {
                this.addIntern();
            }
            else {
                // end team building
                console.log('end');
            }
        });
};

Team.prototype.addEngineer = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is your engineer's name?"
            },
            {
                type: 'number',
                name: 'engineerId',
                message: "What is your engineer's employee ID number?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is your engineer's email address?"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is your engineer's github username?"
            }
        ])
        .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
            const engineerMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
            this.engineers.push(engineerMember);
            this.addMembers();
        });
};

Team.prototype.addIntern = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is your intern's name?"
            },
            {
                type: 'number',
                name: 'internId',
                message: "What is your intern's employee ID number?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is your intern's email address?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the school your intern is from?"
            }
        ])
        .then(({ internName, internId, internEmail, internSchool }) => {
            const internMember = new Intern(internName, internId, internEmail, internSchool);
            this.interns.push(internMember);
            this.addMembers();
        });
};

module.exports = Team;
