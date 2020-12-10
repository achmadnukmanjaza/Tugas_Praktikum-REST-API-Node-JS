const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// --------- DECIMAL --------- //

// decimal ke biner
app.post("/decimal_biner", (req,res) => {
    let decimal = Number(req.body.decimal)
    let biner = parseInt(decimal, 10).toString(2);

    let response = {
    decimal: decimal,
    biner: biner
    }

    res.json(response)
})

// decimal ke octal
app.post("/decimal_octal", (req,res) => {
    let decimal = Number(req.body.decimal)
    let octal = parseInt(decimal, 10).toString(8);

    let response = {
    decimal: decimal,
    octal: octal
    }

    res.json(response)
})

// decimal ke hexadecimal
app.post("/decimal_hexadecimal", (req,res) => {
    let decimal = Number(req.body.decimal)
    let hexadecimal = parseInt(decimal, 10).toString(16);

    let response = {
    decimal: decimal,
    hexadecimal: hexadecimal
    }

    res.json(response)
})

// --------- BINER --------- //

// biner ke decimal
app.post("/biner_decimal", (req,res) => {
    let biner = Number(req.body.biner)
    let decimal = parseInt(biner, 2).toString(10);

    let response = {
    biner: biner,
    decimal: decimal
    }

    res.json(response)
})

// biner ke octal
app.post("/biner_octal", (req,res) => {
    let biner = Number(req.body.biner)
    let octal = parseInt(biner, 2).toString(8);

    let response = {
    biner: biner,
    octal: octal
    }

    res.json(response)
})

// biner ke hexadecimal
app.post("/biner_hexadecimal", (req,res) => {
    let biner = Number(req.body.biner)
    let hexadecimal = parseInt(biner, 2).toString(16);

    let response = {
    biner: biner,
    hexadecimal: hexadecimal
    }

    res.json(response)
})

// --------- OCTAL --------- //

// octal ke decimal
app.post("/octal_decimal", (req,res) => {
    let octal = Number(req.body.octal)
    let decimal = parseInt(octal, 8).toString(10);

    let response = {
    octal: octal,
    decimal: decimal
    }

    res.json(response)
})

// octal ke biner
app.post("/octal_biner", (req,res) => {
    let octal = Number(req.body.octal)
    let biner = parseInt(octal, 8).toString(2);

    let response = {
    octal: octal,
    biner: biner
    }

    res.json(response)
})

// octal ke hexadecimal
app.post("/octal_hexadecimal", (req,res) => {
    let octal = Number(req.body.octal)
    let hexadecimal = parseInt(octal, 8).toString(16);

    let response = {
    octal: octal,
    hexadecimal: hexadecimal
    }

    res.json(response)
})

// --------- HEXADECIMAL --------- //

// hexadecimal ke decimal
app.post("/hexadecimal_decimal", (req,res) => {
    let hexadecimal = req.body.hexadecimal
    let decimal = parseInt(hexadecimal, 16).toString(10);

    let response = {
    hexadecimal: hexadecimal,
    decimal: decimal
    }

    res.json(response)
})

// hexadecimal ke biner
app.post("/hexadecimal_biner", (req,res) => {
    let hexadecimal = req.body.hexadecimal
    let biner = parseInt(hexadecimal, 16).toString(2);

    let response = {
    hexadecimal: hexadecimal,
    biner: biner
    }

    res.json(response)
})

// hexadecimal ke octal
app.post("/hexadecimal_octal", (req,res) => {
    let hexadecimal = req.body.hexadecimal
    let octal = parseInt(hexadecimal, 16).toString(8);

    let response = {
    hexadecimal: hexadecimal,
    octal: octal
    }

    res.json(response)
})

app.listen(3000, () => {
    console.log("Server run on port 3000");
})