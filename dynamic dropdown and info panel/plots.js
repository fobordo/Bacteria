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
}

init();

// Called from index.html when a change takes places in the dropdown menu
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

// Uses the ID number to create that specific individual's information panel
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");
        PANEL.append("h6").text("ID: " + result.id);
        PANEL.append("h6").text("ETHNICITY: " + result.ethnicity);
        PANEL.append("h6").text("GENDER: " + result.gender);
        PANEL.append("h6").text("AGE: " + result.age);
        PANEL.append("h6").text("LOCATION: " + result.location);
        PANEL.append("h6").text("BBTYPE: " + result.bbtype);
        PANEL.append("h6").text("WFREQ: " + result.wfreq);
    });
}

// Uses the ID number to create that specific individual's charts
function buildCharts(sample) {

}
