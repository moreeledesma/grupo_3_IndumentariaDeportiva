//const path = require('path');

const controller={
    homeController: (req,res) => {
        res.render('index')
    },
    productDetailController: (req,res) => {
        res.render('productDetail')
    },
    productCartController: (req,res) => {
        res.render('ProductCart')
    },
    loginController: (req,res) => {
        res.render('login')
    },
    registerController: (req,res) => {
        res.render('register')
    }
};

module.exports = controller ;