var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/hello", (req, res) => {
    response = "Hello Express JS.";

    res.end(JSON.stringify(response));
});

app.get("/user", (req, res) => {
    let firstname = req.query.firstname || 'Pritesh';
    let lastname = req.query.lastname || 'Patel';

    let response = {"firstname": firstname, "lastname": lastname}

    res.send(response);
});

app.post("/user/:firstname/:lastname", (req, res) => {
    let firstname = req.params.firstname;
    let lastname = req.params.lastname;

    let response = {"firstname": firstname, "lastname": lastname}
    res.send(response);
})

var server = app.listen(8081, () => {
    // GET to /hello.
    console.log("GET to the /hello route.");
    console.log("App listening at http://localhost:8081/hello");
    console.log("----------------------------------------------------------------------------------");

    // GET to /user with given query parameters.
    console.log("GET to the /user route using query parameters.");
    console.log("App listening at http://localhost:8081/user?firstname=Amanda&lastname=Gurney");
    console.log("----------------------------------------------------------------------------------");

    // GET to /user with the default parameters used.
    console.log("GET to the /user route with no parameters (to show default).");
    console.log("App listening at http://localhost:8081/user?");
    console.log("----------------------------------------------------------------------------------");

    // POST to /user with a given name. (Tested with Postman).
    console.log("POST to the /user/John/Doe (Tested with Postman).");
    console.log("App listening at http://localhost:8081/user/John/Doe");
    console.log("----------------------------------------------------------------------------------");
});