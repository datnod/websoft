"use strict";

const port = 1337;


const express = require("express");
const app = express();
const routeSlash = require("./route/slash.js");
const routeLotto = require("./route/lotto.js");
const middle = require("./middleware/middle.js");
const path = require("path");

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))
app.use(middle.logToConsole);
app.use(express.static(path.join(__dirname, "report")));
app.use("/", routeSlash);
app.use("/lotto", routeLotto);
app.listen(port, startLogToConsole);

function startLogToConsole() {
    let routes = [];
    // Find what routes are supported
    app._router.stack.forEach((middle) => {
        if (middle.route) {
            // Routes registered directly on the app
            routes.push(middle.route);
        } else if (middle.name === "router") {
            // Routes added as router middleware 
            middle.handle.stack.forEach((handler) => {
                let route;

                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}