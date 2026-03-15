const express = require("express")

const app = express()

app.get("/", (req,res,next) => {
    res.json({
        data:null,
        message:"notificatin",
        status: "Success",
        options: null,
    })
})
module.exports = app;