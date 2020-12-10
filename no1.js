const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// endpoint "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi)
    let luas_permukaan = 6 * sisi * sisi
    let volume = sisi * sisi * sisi

    let response = {
        Sisi: sisi,
        LuasPermukaan: luas_permukaan,
        Volume: volume

    }
    res.json(response)
})

// endpoint "/balok" dengan method POST
app.post("/balok", (req,res) => {
    let p = Number(req.body.p)
    let l = Number(req.body.l)
    let t = Number(req.body.t)
    let luas_permukaan = 2 * ( p*l + p*t + l*t)
    let volume = p * l * t

    let response = {
        Panjang: p,
        Lebar: l,
        Tinggi: t,
        LuasPermukaan: luas_permukaan,
        Volume: volume

    }
    res.json(response)
})

// endpoint "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    let r = Number(req.body.r)
    let t = Number(req.body.t)
    let phi = 3.14
    let luas_permukaan = 2*phi*r*(r+t)
    let volume = phi*r*r*t

    let response = {
        Jari_jari: r,
        Tinggi: t,
        Phi : phi,
        LuasPermukaan: luas_permukaan,
        Volume: volume

    }
    res.json(response)
})

// endpoint "/kerucut" dengan method POST
app.post("/kerucut", (req,res) => {
    let r = Number(req.body.r)
    let t = Number(req.body.t)
    let s = Number(req.body.s)
    let phi = 3.14
    let luas_permukaan = phi*r*(r+s)
    let volume = 1/3*phi*r*r*t

    let response = {
        JariJari: r,
        Tinggi: t,
        GarisPelukis: s,
        Phi : phi,
        LuasPermukaan: luas_permukaan,
        Volume: volume

    }
    res.json(response)
})

// endpoint "/bola" dengan method POST
app.post("/bola", (req,res) => {
    let r = Number(req.body.r)
    let phi = 3.14
    let luas_permukaan = 4 * phi * r * r
    let volume = 4/3 * phi * r ** 3

    let response = {
        JariJari: r,
        Phi : phi,
        LuasPermukaan: luas_permukaan,
        Volume: volume

    }
    res.json(response)
})

app.listen(3000, () => {
    console.log("Server run on port 3000");
})