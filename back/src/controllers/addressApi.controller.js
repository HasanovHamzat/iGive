const axios = require('axios').default;

async function getCitiesFromApi(req, res) {
  try {
    const { cityInput } = req.body;

    const url = encodeURI(
      `https://kladr-api.ru/api.php?query=${cityInput}&contentType=city`
    );
    const { result } = (await axios.get(url)).data;
    const arrOfCities = result.slice(1);
    // console.log(arrOfCities);
    res.json(arrOfCities);
  } catch (error) {
    // console.log(error);
    res.sendStatus(500);
  }
}

async function getStreetsFromApi(req, res) {
  // console.log(req.body);
  try {
    const { street, cityId } = req.body;
    const url = encodeURI(
      `https://kladr-api.ru/api.php?query=${street}&contentType=street&cityId=${cityId}`
    );
    const { result } = (await axios.get(url)).data;
    const arrOfStreets = result.slice(1);
    // console.log(arrOfStreets);
    res.json(arrOfStreets);
  } catch (error) {
    // console.log(error);
    res.sendStatus(500);
  }
}

async function getBuildingsFromApi(req, res) {
  // console.log(req.body);
  try {
    const { building, cityId, streetId } = req.body;
    const url = encodeURI(
      `https://kladr-api.ru/api.php?query=${building}&contentType=building&cityId=${cityId}&streetId=${streetId}`
    );
    const { result } = (await axios.get(url)).data;
    const arrOfBuilding = result.slice(1);
    // console.log(arrOfBuilding);
    res.json(arrOfBuilding);
  } catch (error) {
    // console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { getCitiesFromApi, getStreetsFromApi, getBuildingsFromApi };
