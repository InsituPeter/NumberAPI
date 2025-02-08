const express = require("express")
const router = express.Router()
const number_API= require("./controller")

router.route("/").get(number_API)


module.exports = router