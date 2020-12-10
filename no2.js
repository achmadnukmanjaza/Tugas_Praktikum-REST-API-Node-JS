const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// convert celcius
app.get("/convert/celcius/:celcius", (req,res) => {
    let celcius = req.params.celcius
    let reamur = 4/5 * Number(celcius)
    let fahrenheit = 9/5 * Number(celcius) + 32
    let kelvin = Number(celcius) + 273

    let response = {
        celcius: celcius,
        result : {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    res.json(response)
})

// convert reamur
app.get("/convert/reamur/:reamur", (req,res) => {
    let reamur = req.params.reamur
    let celcius = 5/4 * Number(reamur)
    let fahrenheit = 9/4 * Number(reamur) + 32
    let kelvin = 5/4 * Number(reamur) + 273

    let response = {
        reamur: reamur,
        result : {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    res.json(response)
})

// convert kelvin
app.get("/convert/kelvin/:kelvin", (req,res) => {
    let kelvin = req.params.kelvin
    let celcius = Number(kelvin) - 273
    let fahrenheit = 9/5 * (Number(kelvin) - 273) + 32
    let reamur = 4/5 * (Number(kelvin) - 273)

    let response = {
        kelvin: kelvin,
        result : {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }
    res.json(response)
})

// convert fahrenheit
app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
    let fahrenheit = req.params.fahrenheit
    let celcius = 5/9 * (Number(fahrenheit)-32)
    let reamur = 4/9 * (Number(fahrenheit)-32)
    let kelvin = 5/9 * (Number(fahrenheit)-32) + 273

    let response = {
        fahrenheit: fahrenheit,
        result : {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
    res.json(response)
})

app.listen(3000, () => {
    console.log("Server run on port 3000");
})