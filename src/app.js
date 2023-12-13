const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.get("/", (req,res)=>{
    res.sendFile(path.resolve("src/views/index.html"));
})

app.get("/registro", (req, res) => {
    res.sendFile(path.resolve("src/users/registro.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("src/users/login.html"));
})

app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve("src/products/productCart.html"));
})
app.get("/producto", (req, res) => {
    res.sendFile(path.resolve("src/products/productDetail.html"));
})
app.listen(3030, ()=>{
    console.log(`Servidor funcionando puerto 3030`);
})
