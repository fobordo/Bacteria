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