"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static("public"));