#### Section B: Short Answer Questions
**6. Explain the Purpose of `express.Router()` in the Code Above.**

**Why is `express.Router()` used in Express.js applications, and how does it benefit the code structure?**

> express.Router() allows you to bind methods to specific routes more easily.

> Using express.Router() benefits the code structure by aiding to organize your code. You can place a lot of router methods and configurations
> into their own module to clean up the main code file if required.

> For example, you could place all of the CRUD operations for a `/user` route into its own JavaScript file, and call the app
> using the single `/user` file as a reference, rather than placing all of these in the main file.

**7. Error Handling in Express.js**

**How would you implement error handling in the Express routes to ensure that any issues (such as file not found or server errors) are appropriately handled? Provide an example.**

> Error handling using express routers is a good way to remove redundant repetition of code segments in every single route handler.

> You must use four parameters in order for Express.js to understand that the function you create is for handling errors.
> For example: `app.use(function(err, req, res, next))`

> Asynchronous errors would be sent to the `next` parameter, which uses it as a callback.

> Example of a basic error handler:
> `app.use(function(err, req, res, next) { res.status(500).send(err) });`

> Example of passing errors via `next`:
> `router.get("/", function(req, res, next) { `
> `   exampleData.someFunction()`
>                  `.then(data => someOtherFunction(res, data))`
>                  `.catch(next);`
> `});`

#### Section C: Bonus

**7. Dynamic Port Binding in Express.js**

**Explain how the `app.listen(process.env.port || 8081)` line works and why it's useful in production environments.**

> This line basically tells Node.js to use the PORT environment variable if it is set, rather than statically forcing the port to be
> 8081, for example. This is better for a production environment where one port may work for you, but not for your team, etc.