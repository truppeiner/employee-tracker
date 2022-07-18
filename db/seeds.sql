INSERT INTO roles (id, title, salary, department_id)
VALUES 
(1, 'engineer', 70000, 1),
(2, 'project lead', 90000, 2),
(3, 'UI/UX Designer', 60000, 3),
(4, 'Front-end developer', 65000, 4),
(5, 'HR employee', 55000, 5);

INSERT INTO department
VALUES
(1, 'engineering'),
(2, 'management'),
(3, 'UI/UX'),
(4, 'front-end'),
(5, 'human-resources');

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Dave', 'Ramsey', 2, 2),
(2, 'John', 'Brown', 1, 2),
(3, 'Adam', 'Smith', 1, 2),
(4, 'David', 'Price', 3, 2),
(5, 'Steven', 'Stamkos', 3, 2),
(6, 'Victor', 'Hedman', 4, 2),
(7, 'Riley', 'Nash', 4, 2),
(8, 'Patrick', 'Maroon', 5, 2);
