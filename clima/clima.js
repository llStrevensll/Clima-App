const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e7a733e364bbd9c0ae77e13007fb7b7b`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}