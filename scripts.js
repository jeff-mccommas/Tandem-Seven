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
        //Received all data
		let flights = data;
        //Creating parent <ul> element
        let ul = createNode('ul');
		flights.map(function (flight, index) {
			let li = createNode('li'), //Creating <li> element
                img = createNode('img'), //Creating <img> element to show mission_path
				span = createNode('span'); //Creating <span> element to show flight_number - launch_year
			span.innerHTML = `Flight #: ${flight.flight_number} - ${flight.launch_year}`; 
            img.src= flight.links.mission_patch;
            append(li, img);
			append(li, span);
			append(ul, li);
		});
        //Finally attaching <ul> list to body
        document.body.appendChild(ul);
	})
	.catch(function (error) {
		console.log(JSON.stringify(error));
	});
