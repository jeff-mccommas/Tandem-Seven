/**
 * Created by jmccommas on 12/12/17 7:57 PM*/
function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const flights = {
	fleight: 'flight_number'
}
/// created a fetch function to map data
const ul = document.getElementById('flights');
const url = 'https://api.spacexdata.com/v2/launches';
fetch(url)
	.then((resp) => resp.json())
	.then(function (data) {
		let flights = data.results;
		return flights.map(function (flight) {
			let ul = createNode('ul'),
			 let li = createNode('li'),
				span = createNode('span');
			span.innerHTML = `${flight.fleight_number} ${flight.launch_year}`;
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function (error) {
		console.log(JSON.stringify(error));
	});