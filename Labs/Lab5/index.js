const express = require('express');
const app = express();
const router = express.Router();
// Require the JSON file for easy use.
const jsonUser = require("./user.json");

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {

  // Routing the user to home.html.
  res.sendFile(`${__dirname}/home.html`);
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {

  // Sending back the user.json file.
  res.sendFile(`${__dirname}/user.json`);
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/

// Allows the app to work with JSON body.
app.use("/login", express.json());

router.post('/login', (req,res) => {
  // Note: This one just assumes there's one user in the file, however, you could
  // loop through a variety of users to ensure the username even exists if you had to.

  // Grab the username and password from the body.
  let givenUsername = req.body.username;
  let givenPassword = req.body.password;
  
  let realUsername = jsonUser.username;
  let realPassword = jsonUser.password;

  // If username and password are fine, send the success.
  if (realUsername === givenUsername && realPassword === givenPassword) {
    response = { "status": true, "message": "User is Valid."}
  } // If the username does not match, send the invalid message.
  else if (realUsername !== givenUsername) {
    response = { "status": false, "message": "Username is Invalid." }
  } // If the password does not match, send the invalid message.
  else if (realPassword !== givenPassword) {
    response = { "status": false, "message": "Password is Invalid." }
  }
  
  res.send(response);
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  // Grab the username from the parameters.
  const username = req.params.username;
  
  res.send(`<b>${username} successfully logged out.</b>`);
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send("Server Error!");
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));
