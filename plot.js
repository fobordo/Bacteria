// Display cityGrowths
console.log(cityGrowths);

// Sort the cities by population growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// Select only the top five cities by population growth
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// Create an array of the top five city names
var topFiveCityNames = topFiveCities.map(city => city.City);
console.log(topFiveCityNames);

// Create an array of the top five growth figures
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths);

// Create a bar chart with the topFiveCityNames and topFiveCityGrowths arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot", data, layout);

// Retrieve data from the samples.json file 
d3.json("samples.json").then(function(data){
    console.log(data);
});

// Extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Sort the wfreq array in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// Filter null values frmo the sorted wfreq array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// Use Object.entries() and forEach() to print all the metadata of the first person in the samples.json() dataset (ID 940).
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) => {console.log(key + ': ' + value)});
});