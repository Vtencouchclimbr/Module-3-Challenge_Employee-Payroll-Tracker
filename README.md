# Module-3-Challenge_Employee-Payroll-Tracker

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp) | 
| CSS     | [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)      | 
| JS     | [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)      | 
| Git | [https://bootcampspot.instructure.com/](https://bootcampspot.instructure.com/)     | 

## Description

Employee Tracker is a command-line application built using JavaScript that allows users to manage and organize company employee data. This project tracks employee information as well as returning an everage salary to the console, and choosing an employee at random. To do this, it requires three funtcions. First, prompting the user for information and organizing that information in an object (See examples 1 and 2 below). Then we calculate an average salary and report that to the console using a template literal (See example 3 below). Finally, we choose a random employee for a contest using the Math and random methods (See example 4 below). 

Visit the deployed site here: https://vtencouchclimbr.github.io/Module-3-Challenge_Employee-Payroll-Tracker/
Visit the github repo here: https://github.com/Vtencouchclimbr/Module-3-Challenge_Employee-Payroll-Tracker

~~~js
Example 1: 
for (let i = 0; i < employeeCount; i++) {
    const firstName = prompt('Enter the employee\'s first name');
    const lastName = prompt('Enter the employee\'s last name');
    const salary = parseFloat(prompt('Enter the employee\'s salary'));

Example 2:
let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  alert('The average salary is ' + averageSalary);
Example 3:
let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  alert('The average salary is ' + averageSalary);
};

Example 4:
alert(
    'Random Employee: ' +
      randomEmployee.firstName +
      ' ' +
      randomEmployee.lastName +
      ' ' +
      randomEmployee.salary
  );
~~~

## License
This project is not currently licensed

## Tests
There are currently no tests written for this application.

## Questions
If you have any questions, please reach out to me:
- Github: [vtencouchclimbr](https://github.com/vtencouchclimbr)
- Email: lmntrylmnt@gmail.com