// Renders the initial visualization
function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] 
  }];

  Plotly.newPlot("plot", data);
};

// When a user selects a dropdown menu option, the updatePlotly() function is called
d3.selectAll("#dropdownMenu").on("change", updatePlotly);

function updatePlotly() {
  var dropdownMenu = d3.select("#dropdownMenu");
  var dataset = dropdownMenu.property("value");

  // x-axis data (xData) remains the same for both datasets
  // y-axis data (yData) depends on which dataset is selected
  var xData = [1, 2, 3, 4, 5];
  var yData = [];

  // y-axis data (yData) if dataset1 is selected
  if (dataset === 'dataset1') {
    yData = [1, 2, 4, 8, 16];
  };

  // y-axis data (yData) if dataset2 is selected
  if (dataset === 'dataset2') {
    yData = [1, 10, 100, 1000, 10000];
  };

  var trace = {
    x: [xData],
    y: [yData],
  };

  // Plotly.restyle() modifies the previously displayed chart with the updated information
  Plotly.restyle("plot", trace);
};

init();