const loginRouter = require('express').Router();
const { loginUser, loginHospital } = require('../controllers/login.controller');

loginRouter.route('/user').post(loginUser);
loginRouter.route('/hospital').post(loginHospital);

module.exports = loginRouter;
