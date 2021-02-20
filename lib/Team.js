const inquirer = require('inquirer');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const Manager = require('./Manager');

function Team() {
    this.interns = [];
    this.engineers = [];
    this.managers = [];
};

Team.prototype.buildTeam = function () {
    inquirer
        .prompt({
            type: ''
        })
}
