// application server*************/
const express = require("express")

const app = express()

/************ defalt get route ************/
app.get("/", (req, res) => {
    res.send("Hello World! test text from main route.")
})



/***** server host and port***********/

const Host = "localhost"
const Port = 5500

/***** log server actiation*********/
app.listen(Port, Host, () => {
  console.log(`Server is running on http://${Host}:${Port}`)
})  


