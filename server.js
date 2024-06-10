const mysql = require("mysql2");
const inquirer = require("inquirer");

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // TODO: Add MySQL Password
      password: 'password',
      database: 'roster_db'
    },
    console.log(`roster_db database accessed`)
);

const mainMenu = [
    {
        type: "list",
        name: "action",
        message: "Options",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
    }
];

const newDepartment = [
    {
        type: "input",
        name: "department_name",
        message: "Enter Department Name:"
    }
];

const newRole = [
    {
        type: "input",
        name: "title",
        message: "Enter Title:"
    },
    {
        type: "input",
        name: "salary",
        message: "Enter Salary:"
    },
    {
        type: "input",
        name: "department_id",
        message: "Enter Department ID:"
    }
];

const newEmployee = [
    {
        type: "input",
        name: "first_name",
        message: "Enter First Name:"
    },
    {
        type: "input",
        name: "last_name",
        message: "Enter Last Name:"
    },
    {
        type: "input",
        name: "role_id",
        message: "Enter Role ID:"
    }
]