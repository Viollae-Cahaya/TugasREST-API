
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req,res) => {
    res.send("convert bilangan anda")
}) 


app.get("/convert/decimal/:decimal", (req,res) => {
    let d = req.params.decimal

    var b = Number(d).toString(2) 
    var o = Number(d).toString(8) 
    var h = Number(d).toString(16) 

    res.send({
        decimal : d,
        result : {
        biner : b,
        oktal : o,
        hexadecimal : h,
        }
        
    })
})


app.get("/convert/biner/:biner", (req,res) => {
    let b = req.params.biner

    var d = parseInt(b,2)
    var o = d.toString(8)
    var h = d.toString(16)

    res.send({
        biner : b,
        result : {
        decimal : d,
        oktal : o,
        hexadecimal : h,
        }
        
    })

})


app.get("/convert/oktal/:oktal", (req,res) => {
    let o = req.params.oktal

    var d = parseInt(o,8)
    var b = d.toString(2)
    var h = d.toString(16)

    res.send({
        oktal : o,
        result : {
        decimal : d,
        biner : b,
        hexadecimal : h,
        }
        
    })

})


app.get("/convert/hexadecimal/:hexadecimal", (req,res) => {
    let h = req.params.hexadecimal

    var d = parseInt(h,16)
    var b = d.toString(2)
    var o = d.toString(8)

    res.send({
        hexadecimal : h,
        result : {
        decimal : d,
        biner : b,
        oktal : o,
        }
        
    })
})


const port = 8080
app.listen(port, () => console.log(`app running ${port}`))