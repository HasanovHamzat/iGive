const signupRouter = require('express').Router();
const {
  signUpUser,
  signUpHospital,
} = require('../controllers/signup.controller');

signupRouter.route('/user').post(signUpUser);
signupRouter.route('/hospital').post(signUpHospital);

module.exports = signupRouter;
