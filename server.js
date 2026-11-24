// application server*************/
const express = require("express")

const app = express()


const util = require("./util/home.js")


/************ defalt get route ************/
app.get("/", (req, res) => {
    res.send(util.bildhome())
})



/***** server host and port***********/

const Host = "localhost"
const Port = 5500

/***** log server actiation*********/
app.listen(Port, Host, () => {
  console.log(`Server is running on http://${Host}:${Port}`)
})  


