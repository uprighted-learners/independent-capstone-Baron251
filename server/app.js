require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const log = console.log;

//! Controllers
const users = require("./controllers/user.controller")
const characters = require("./controllers/character.controller")

//! Middleware
const validateSession = require("./middleware/validate-session")
const cors = require('cors')


const mongoose = require("mongoose")
const MONGO = process.env.MONGODB;
mongoose.connect(`${MONGO}/d&dcc`);
const db = mongoose.connection;
db.once("open", () => log(`Connected: ${MONGO}`));

app.use(express.json())
app.use(cors())

//! Controller Routes
app.use("/user", users)
app.use("/character", characters)

app.listen(PORT, () => log(`Character Server on Port: ${PORT}`))