const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const util = require('util');
const mysql = require('mysql');

const config = require('./config');
const { hbsHelpers } = require('./helpers');
const { getSessionUser } = require("./auth");
const routesManager = require('./routes');

const db = mysql.createConnection(config);

db.connect(async function (err) {
    if (err) {
        throw "App could not connect to the DB. Stopping.";
    }

    // Promise wrapper for MySQL queries
    global.queryPromise = util.promisify(db.query.bind(db));  // binding necessary as the mysql module uses the context

    const app = express();

    // Set up view engine
    const hbs = exphbs.create({
        extname: '.hbs',
        helpers: hbsHelpers
    })
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');

    // Register middlewares
    app.use(bodyParser.urlencoded({ extended: true }));     // parse POST data
    app.use(cookieParser('secret'));
    app.use(getSessionUser);




    // Register routes
    routesManager(app);

    app.listen(process.env.PORT || 3000);
});
