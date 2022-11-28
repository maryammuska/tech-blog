const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const exphbs = require("express-handlebars");
const SequelizeStore = require('connect-session-sequel')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

