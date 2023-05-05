INSERT INTO department (name)
VALUES 
    ("sales"),
    ("repair"),
    ("managment");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("salesman", 10000.00, 1),
    ("engineer", 20000.00, 2),
    ("manager", 30000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("jon", "doe", 1, null),
    ("ben", "smith", 2, 1),
    ("jack", "brown", 3, 1);