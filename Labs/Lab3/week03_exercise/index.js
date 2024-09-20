var http = require("http");
//TODO - Use Employee Module here
// Employee module.
let employees = require("./Employee.js");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise
// Fixed by adding a return to the end of each if statement so that it was not trying
// to use res.end even after successfully completing one request.

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise 03!</h1>")

            return;
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format

            // Make sure it is primed to display JSON...
            res.writeHead(200, {"Content-Type": "application/json"});

            // Put the employees in a JSON variable.
            let jsonRes = {
                employees: employees.getEmployees()
            }
            
            // End the response.
            res.end(JSON.stringify(jsonRes));
            return;
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.writeHead(200, {"Content-Type": "application/json"});

            // Grab the employee data.
            let jsonEmployees = employees.getEmployees();

            // Prepare an array to put the names in.
            let employeeNames = []
            jsonEmployees.forEach(employee => {
                employeeNames.push(`${employee.firstName} ${employee.lastName}`);
            })

            // Sort the array.
            employeeNames.sort();
            
            res.end(JSON.stringify(employeeNames));
            return;
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.writeHead(200, {"Content-Type": "application/json"});

            // Grab employee data.
            let jsonEmployees = employees.getEmployees();

            let sumOfSalaries = 0;

            // Add together all salaries.
            jsonEmployees.forEach(employee => {
                sumOfSalaries += employee.Salary;
            })

            // Display the sum of all salaries.
            res.end(JSON.stringify(`Sum of All Employee Salaries: $${sumOfSalaries}`));
            return;
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})