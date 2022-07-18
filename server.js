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
                        'View All Roles',
                        'Add Role',
                        'View All Departments',
                        'Add Department',
                        'Exit'],
        }
    ])
    .then((answers) => {
        if (answers.directory === 'View All Employees'){
            viewAllEmployees();
        } else if (answers.directory === 'View All Departments'){
            viewAllDepartments();
        } else if (answers.directory === 'View All Roles'){
            viewAllRoles();
        } else if (answers.directory === 'Add Department'){
            createDepartment();
        } else if (answers.directory === 'Exit'){
            process.exit();
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
};

// pseudacode for what I need 

// view all departments
const viewAllDepartments = () => {
    const sql = `
    SELECT * FROM department
    `;
    db.query(sql, (err, rows) => {
        if (err){
            console.log(err);
            return;
        } console.table(rows);
          promptUser();
        
    })
};
// view all roles
const viewAllRoles = () => {
    const sql = `
    SELECT * FROM roles
    `;
    db.query(sql, (err, rows) => {
        if (err){
            console.log(err);
            return;
        } console.table(rows);
          promptUser();
        
    })
};
// Add a department
const createDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message: 'Please enter a department name (required)',
        },
    ])
    .then ((answers) => {
        const sql = `
        INSERT INTO department (name) VALUE (?)`;
        const params = [answers.name];

        db.query(sql, params, (err, result) => {
            if (err){
                console.log(err);
                return;
            }
            console.log('department successfully created');
            console.table(result);
            promptUser();
        })
    })
}
// add a role 

// add an employee

// update an employee

promptUser();
