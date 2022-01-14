// the URL to the SpaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json() method places a call to SpaceX's API, retrieves the data,
// and prints it to the browser console.
d3.json(url).then(spaceXResults => console.log(spaceXResults));

// Get the details only from the Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

// Get the full name of the Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Get the latitude of the Vandenberge Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station
d3.json(url).then(spaceXResults => console.log(spaceXResults.map(lat => lat.location.latitude)));
d3.json(url).then(spaceXResults => console.log(spaceXResults.map(long => long.location.longitude)));