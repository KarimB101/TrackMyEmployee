INSERT INTO department (name)
VALUES 
    ("dep 1"),
    ("dep 2"),
    ("dep 3");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("role 1", 10000.00, 1),
    ("role 2", 20000.00, 2),
    ("role 3", 30000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("emp", "a", 1, null),
    ("emp", "b", 2, 1),
    ("emp", "c", 3, 1);