function init() {
    // Select the dropdown menu, which has an id of #selDataSet, and assign it to the variable "selector"
    var selector = d3.select("#selDataset");

    // Read the data from samples.json
    // The data from the entire JSON file is assigned the (arbitrary) argument name "data"
    d3.json("samples.json").then((data) => {
        // Print the data to the console
        console.log(data);
        // Inside the data object, the names array contains the ID numbers of all the study participants
        // The variable "sampleNames" is assigned to this array
        var sampleNames = data.names;
        // For each element in the array...
        sampleNames.forEach((sample) => {
            selector
                // ...a dropdown menu option is appended
                .append("option")
                // ...the text of each dropdown menu option is the ID
                .text(sample)
                // ...its value property is also assigned the ID
                .property("value", sample);
        });
    });
};

init();