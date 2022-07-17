const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');


// connect to database
db.connect((err) => {
    if (err) throw err;
});

const promptUser = () => {
    console.log(`
    =======================================
                    EMPLOYEE
                    MANAGER
    =======================================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'directory',
            message: 'What would you like to do?',
            choices: ['View All Employees',
                        'Add Employee',
                        'Update Employee Role',
                        'Add Role',
                        'View All Departments',
                        'Add Department']
        }
    ])
}

promptUser();