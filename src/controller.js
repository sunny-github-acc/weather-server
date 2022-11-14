const axios = require('axios');

const getPlaces = (req, res) =>
	axios.get('https://api.meteo.lt/v1/places')
		.then(({ data }) => res.end(JSON.stringify(data)))
		.catch(() => res.end(JSON.stringify(404)));

const getPlace = (req, res) => {
	const id = req.params.id;
	const url = 'https://api.meteo.lt/v1/places/' + id + '/forecasts/long-term';
	axios.get(url)
		.then(({ data }) => res.end(JSON.stringify(data)))
		.catch(() => res.end(JSON.stringify(404)));
}

module.exports = {
	getPlaces,
	getPlace,
}