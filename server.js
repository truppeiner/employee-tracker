const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');


// // connect to database
db.connect((err) => {
    if (err) {
        console.log('Not Connected to Database');
        console.log(err);
    } else {
        console.log('Connected to database!');
    }
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
            choices: [  'View All Employees',
                        'Add Employee',
                        'Update Employee Role',
                        'Add Role',
                        'View All Departments',
                        'Add Department'],
        }
    ])
    .then((answer) => {
        if (answer.options === 'View All Employees'){
            console.log('test')
            viewAllEmployees();
        }
    });
}

// view all employees 
const viewAllEmployees = () => {
    const sql = `
    SELECT * FROM employee
    `;

    db.query(sql, (err, rows) => {
        if (err){
            console.log(err);
            return;
        } console.table(rows);
          promptUser();
        
    })
}

// pseudacode for what I need 

// view all departments

// view all roles

// Add a department

// add a role 

// add an employee

// update an employee

promptUser();
