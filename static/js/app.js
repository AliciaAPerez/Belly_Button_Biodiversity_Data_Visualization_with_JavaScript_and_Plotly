//import data from json
let data = d3.json("samples.json").then(function(data){ 
    console.log(data)
    // let names = data.names;
    // let metadata = data.metadata;
    // let samples = data.samples;
    // console.log(names);
    // console.log(metadata);
    // console.log(samples);
});

let names = data.names

console.log(names)

//set dropdown menu

// d3.select("#selDataSet")
//     .selectAll("option")
//     .data(names)
//     .enter()
//     .append("option")
//     .text(function(d) {
//         return `<option value="${d}">${d}</option>`;
//     });
// {/* <option value="canada">Canada</option> */}
// //default plot
// function init() {
//     data = [{
//         x: [1, 2, 3, 4, 5],
//         y: [1, 2, 4, 8, 16] }];

//     Plotly.newPlot("plot", data);
// }

// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", optionChanged);

// function optionChanged() {
//     let dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     let dataset = dropdownMenu.property("value");
//     // Initialize an empty array for the country's data
//     let bardata = [];

//     if (dataset == 'us') {
//         data = us;
//     }
//     else if (dataset == 'uk') {
//         data = uk;
//     }
//     else if (dataset == 'canada') {
//         data = canada;
//     }
//     // Call function to update the chart
//     updatePlotly(data);
// }

//   // Update the restyled plot's values
//     function updatePlotly(newdata) {
//     Plotly.restyle("pie", "values", [newdata]);
// }


// //drop down menu

// //horizontal bar chart to display top 10 OTUs for text subject
