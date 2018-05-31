var request = require('request')

request({uri: 'https://api.coinmarketcap.com/v2/ticker/2137/'});

var data = JSON.parse(body)
document.getElementById('name').innerHTML = data.data.name
document.getElementById('rank').innerHTML = data.data.rank