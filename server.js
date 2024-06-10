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