const inquirer = require('inquirer');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const Manager = require('./Manager');

const generatePage = require('../src/page-template');
const { writeFile, copyFile } = require('../src/generate-site');

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
                message: "What is the team manager's name?",
                validate: function (input) {
                    if (!input) {
                        console.log('.   Please enter a name');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's employee ID?",
                validate: function (number) {
                    if ((isNaN(number)) || (number === '')) {
                        console.log('. Please enter a valid number ID');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
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
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number?",
                validate: function (number) {
                    if ((isNaN(number)) || (number === '')) {
                        console.log('. Please enter a valid office number.');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
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
            let nextAction = addMore.addMore.split(':')[0];
            nextAction = parseInt(nextAction);
            if (nextAction === 1) {
                this.addEngineer();
            }
            else if (nextAction === 2) {
                this.addIntern();
            }
            else {
                // end team building
                this.generateTeam();
            }
        })

};

Team.prototype.addEngineer = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is your engineer's name?",
                validate: function (input) {
                    if (!input) {
                        console.log('.   Please enter a name');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is your engineer's employee ID number?",
                validate: function (number) {
                    if ((isNaN(number)) || (number === '')) {
                        console.log('. Please enter a valid number ID');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is your engineer's email address?",
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
                type: 'input',
                name: 'engineerGithub',
                message: "What is your engineer's github username?",
                validate: function (input) {
                    if (!input) {
                        console.log('.   Please enter your a github username');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
        ])
        .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
            const engineerMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

            // add engineer to the array
            this.engineers.push(engineerMember);

            // Let the user know the operation was successful
            console.log(`${engineerName} has been added to the team as an engineer.`);

            this.addMembers();
        });
};

Team.prototype.addIntern = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is your intern's name?",
                validate: function (input) {
                    if (!input) {
                        console.log('.   Please enter a name');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is your intern's employee ID number?",
                validate: function (number) {
                    if ((isNaN(number)) || (number === '')) {
                        console.log('. Please enter a valid number ID');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is your intern's email address?",
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
                type: 'input',
                name: 'internSchool',
                message: "What is the school your intern is from?",
                validate: function (input) {
                    if (!input) {
                        console.log('.   Please enter a the name of a university');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
        ])
        .then(({ internName, internId, internEmail, internSchool }) => {
            const internMember = new Intern(internName, internId, internEmail, internSchool);

            this.interns.push(internMember);

            console.log(`${internName} has been added to the team as an intern.`);

            this.addMembers();
        });
};

Team.prototype.generateTeam = function () {
    return new Promise((resolve, reject) => {
        const teamObj = {
            managerObj: this.manager,
            engineerObj: this.engineers,
            internObj: this.interns
        };
        resolve(generatePage(teamObj));

    })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse.message);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse.message);
        })
        .catch(err => {
            console.log(err);
        });

};

module.exports = Team;
