const { Router } = require('express');
const controller= require('../controllers/mainControllers.js');
const router = Router();

const routes={
    homeRoute: '/',
    loginRoute:'/users/login',
    registerRoute: '/users/register',
    productDetailRoute: '/products/productDetail',
    productCartRoute: '/products/productCart',

}

router.get(routes.homeRoute , controller.homeController)
router.get(routes.loginRoute , controller.loginController)
router.get(routes.registerRoute , controller.registerController)
router.get(routes.productDetailRoute , controller.productDetailController)
router.get(routes.productCartRoute , controller.productCartController)

module.exports = router;