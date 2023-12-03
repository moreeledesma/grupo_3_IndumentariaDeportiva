const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve("public");
app.use(express.static(publicPath));


app.get("/", (req,res)=>{
    res.sendFile(path.resolve("./views/index.html"));
});

app.get("/registro", (req, res) => {
    res.sendFile(path.resolve("./views/registro.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"));
});

app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve("./views/carrito.html"));
});

app.listen(3030, ()=>{
    console.log("Servidor corriendo");
});