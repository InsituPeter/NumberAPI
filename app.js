const express= require("express")
const cors = require("cors")
const app= express()
//const axios = require("axios")
const PORT=process.env.PORT|| 3000
const number_Api = require("./route")
const errorHandler = require("./Middleware/errorHandler")
const notFound= require("./Middleware/notFound")

//Middleware
app.use(cors())
app.use(express.json())
app.use("/api/v1", number_Api)
app.use(notFound)
app.use(errorHandler)





app.listen(PORT, ()=>console.log(`Server is listening on ${PORT}`))
