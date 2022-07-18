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
        } else if (answers.directory === 'Add Role'){
            createRole();
        } else if (answers.directory === 'Add Employee'){
            createEmployee();
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
const createRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter a role (Required)'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter a role salary with a number value (required)',
        },
        {
            type: 'input',
            name: 'id',
            message: 'please enter a new department ID for this role (required)',
        }
    ])
    .then ((answers) => {
        const sql = `
        INSERT INTO roles (title, salary, department_id) VALUE (?, ?, ?)`;
        const params = [answers.name, answers.salary, answers.id];

        db.query(sql, params, (err, result) => {
            if (err){
                console.log(err);
                return;
            }
            console.log('role successfully created');
            console.table(result);
            promptUser();
        })
    })
}
// add an employee
const createEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Please enter first name (required)',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Please enter employees last name (required)'
        },
        {
            type: 'number',
            name: 'role',
            message: 'Please enter employees role ID (required)',
        },
        {
            type: 'number',
            name:'manager',
            message: 'Please enter their manager ID number (required)',
        },
    ])
    .then ((answers) => {
        const sql = `
        INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?, ?, ?,?)`;
        const params = [answers.first_name, answers.last_name, answers.role, answers.manager];

        db.query(sql, params, (err, result) => {
            if (err){
                console.log(err);
                return;
            }
            console.log('role successfully created');
            console.table(result);
            promptUser();
        })
    })
}
// update an employee

// function so intial text only shows up once 
const displayMessage = function(){
    console.log(`
    =======================================
                    EMPLOYEE
                    MANAGER
    =======================================
    `);
}
displayMessage();
promptUser();
