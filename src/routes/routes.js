const express = require("express")
const { home } = require("../controller/controller")
const routes = express.Router()

routes.get("/", home)

module.exports = routes