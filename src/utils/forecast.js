const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0c1fce4462a5ce8db80e3c00ce477330/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + (body.currently.precipProbability * 100) + '% chance of rain. Today\'s temparatures are between ' + body.daily.data[0].temperatureLow + ' and ' + body.daily.data[0].temperatureHigh + ' degrees.')
        }
    })
}

module.exports = forecast