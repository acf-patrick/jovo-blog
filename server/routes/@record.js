const express = require("express");

const routes = ["login", "signup", "blog"];
const record = express.Router();

for (let route of routes) record.use(`/${route}`, require(`./${route}`));

module.exports = record;
