// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  let employeesArray = [];
  let add = true;

  while (add) {
    let firstName = prompt("Enter first name").trim();
    if (!firstName) {
      alert("First name cannot be empty.");
      continue;
    }

    let lastName = prompt("Enter last name").trim();
    if (!lastName) {
      alert("Last name cannot be empty.");
      continue;
    }

    let salaryAdd = prompt("Enter salary");
    let salary = parseFloat(salaryAdd);
    if (isNaN(salary) || salary < 0) {
      alert("Invalid salary entered. Setting salary to $0.");
      salary = 0;
    }

    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employeesArray.push(employee);

    add = confirm("Do you want to add more?");
  }

  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;
  }

  let totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  let averageSalary = totalSalary / employeesArray.length;

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toFixed(2)}.`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to select from.");
    return;
  }

  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
