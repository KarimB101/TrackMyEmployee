const connection = require('./connection');

// Class to contain all database methods
class database {
    // Connection constructor to ensure queries are sent to database
    constructor(connection) {
        this.connection = connection;
    }

 // Display department info
 displayDepartments() {
    return this.connection.promise().query(
        "SELECT department.id, department.name FROM department;"
    );
}

// Display role info
displayRoles() {
    return this.connection.promise().query(
        "SELECT role.title, role.id, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
}

// Display employee info
displayEmployees() {
    return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.salary, role.title, CONCAT (manager.first_name, ' ', manager.last_name) AS manager, department.name AS department FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
}

// Add a department
createDepartment(newDept) {
    return this.connection.promise().query(
        "INSERT INTO department SET ?", newDept
    );
}

// Add a role
createRole(newRole) {
    return this.connection.promise().query(
        "INSERT INTO role SET ?", newRole
    );
}

// Add an employee
createEmployee(newEmployee) {
    return this.connection.promise().query(
        "INSERT INTO employee SET ?", newEmployee
    );
}

// Update an employee
changeEmployee(employeeId, roleId) {
    return this.connection.promise().query(
        "UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]
    );
}
}

module.exports = new database(connection);