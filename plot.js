// Display cityGrowths
console.log(cityGrowths);

// Sort the cities by population growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// Select only the top five cities by population growth
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);