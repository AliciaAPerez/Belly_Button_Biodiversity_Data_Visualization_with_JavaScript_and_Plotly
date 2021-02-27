//import data from json
d3.json("samples.json").then(function(data){ 
    let names = data.names;
    let metadata = data.metadata;
    let samples = data.samples;
    console.log(names);
    console.log(metadata);
    console.log(samples);

    //set dropdown menu
    d3.select("#selDataSet")
    .selectAll("option")
    .data(names)
    .enter()
    .append("option")
    .text(function(d) {
        return `value="${d}`;
    });

    //default plot
    function init() {
        let trace1 = [{
            x: [],
            y: []
            }];
        let data1 = trace1;
        //let layout1 = {};
        Plotly.newPlot("bar", data1);
        
        let trace2 = [{
            domain: {x:[0,1], y:[0,1]},
            value: 0,
            type: 'indicator',
            mode: 'gauge+number',
            delta: { reference: 400 },
            gauge: { axis: { range: [null, 500] }}
            }];
        let data2 = trace2;
        let layout2 = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot("gauge", data2, layout2);

        let trace3 = [{
            x: [],
            y: [],
            mode: 'markers'
            }];
        let data3 = trace3;
        //let layout3 = {};
        Plotly.newPlot("bubble", data3);
}

    //turn on event listener
    // d3.selectAll("#selDataset").on("change", optionChanged);

    //

    init();

});


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
