INSERT INTO departments (name)
VALUES 
    ("sales"),
    ("repair"),
    ("managment");

INSERT INTO roles (title, salary, departments_id)
VALUES 
    ("salesman", 10000.00, 1),
    ("engineer", 20000.00, 2),
    ("manager", 30000.00, 3);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
    ("jon", "doe", 1, 1),
    ("ben", "smith", 2, 1),
    ("jack", "brown", 3, 1);