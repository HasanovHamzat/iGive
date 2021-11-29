const addressApi = require('express').Router();
const { getCitiesFromApi } = require('../controllers/addressApi.controller');

addressApi.route('/city').post(getCitiesFromApi);
addressApi.route('/street').get();
addressApi.route('/building').get();

module.exports = addressApi;
