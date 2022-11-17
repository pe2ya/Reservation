const fs = require('fs');
const axios = require('axios');
const { response } = require('express');

async function LogIP(path) {
    
    var response = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=84ab25c586a344ac8c7980c2494576fd')
    var ip_data = response.data
    time = new Date().toLocaleString();

    var obj = {
        ip: ip_data.ip_address,
        country_code: ip_data.country_code,
        city: ip_data.city,
        time: time
    }

    var log_string = JSON.stringify(obj)

    fs.appendFileSync(path, log_string)
}


module.exports = { 
    LogIP,
};