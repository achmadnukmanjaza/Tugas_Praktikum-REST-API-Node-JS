const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//endpoint untuk menghitung BMI
app.post("/bmi", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let bmi = (berat / (tinggi ** 2))

    if (bmi < 18.5){
        status = "kekurangan berat badan";
    }
    else if (bmi <= 24.9){
        status = "normal (ideal)";
    }
    else if (bmi <= 29.9){
        status = "kelebihan berat badan";
    }
    else {
        status = "kegemukan (obesitas)";
    }
    
    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    }

    res.json(response)
})

app.listen(3000, () => {
    console.log("Server run on port 3000");
})