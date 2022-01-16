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

// Filter null values from the sorted wfreq array
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


d3.selectAll("body").on("change", updatePage);

function updatePage() {
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectedOption);
};