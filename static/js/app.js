// //import data from json
d3.json("samples.json").then(function(data){ 
    let names = data.names;
    let metadata = data.metadata;
    let samples = data.samples;
    console.log(names);
    console.log(metadata);
    console.log(samples);
        
    //set dropdown menu
    d3.select("#selDataset")
    .selectAll("option")
    .data(names)
    .enter()
    .append("option")
    .attr("value", function(d){
        return d;})
    .text(function(d) {
        return d;
    });

    //metadata demographic info
    let demo = d3.select("#sample-metadata")
        .selectAll("ul")
        .data(metadata)
        .enter();
    demo.append("ul").text(`id: ${metadata[0].id}`);
    demo.append("ul").text(`ethnicity: ${metadata[0].ethnicity}`);
    demo.append("ul").text(`gender: ${metadata[0].gender}`);
    demo.append("ul").text(`age: ${metadata[0].age}`);
    demo.append("ul").text(`location: ${metadata[0].location}`);
    demo.append("ul").text(`bbtype: ${metadata[0].bbtype}`);
    demo.append("ul").text(`wfreq: ${metadata[0].wfreq}`);

    //default plots
    //bar chart with  top 10 OTUs
    let trace1 = [{
        x: [],
        y: []
        }];
    let data1 = trace1;
    //let layout1 = {};
    Plotly.newPlot("bar", data1);

    //bubble chart
    let topten = samples[0]
    console.log(topten)
    let sorttopten = topten.sort((a, b) => b.otu_ids - a.otu_ids);
    let slicetopten = sorttopten.slice(0,10)
    console.log("hi");
    console.log(sorttopten);
    console.log(slicetopten);
    let trace2 = [{
        x: slicetopten.map(object => object.otu_labels),
        y: slicetopten.map(object => object.otu_ids),
        mode: 'markers'
        }];
    let data2 = [trace2];
    //let layout2 = {};
    Plotly.newPlot("bubble", data2);

    //turn on event listener
    //d3.selectAll("#selDataset").on("change", optionChanged);
    
    // function optionChanged(){
    //     let dropdownmenu = d3.select("#selDataset");
    //     let dataset = dropdownMenu.property("value");
    //     let newdata = [];
    //     let value = v


        
    


});


// // // {/* <option value="canada">Canada</option> */}
// // // //default plot
// // // function init() {
// // //     data = [{
// // //         x: [1, 2, 3, 4, 5],
// // //         y: [1, 2, 4, 8, 16] }];

// // //     Plotly.newPlot("plot", data);
// // // }

// // // // On change to the DOM, call getData()
// // // d3.selectAll("#selDataset").on("change", optionChanged);

// // // function optionChanged() {
// // //     let dropdownMenu = d3.select("#selDataset");
// // //     // Assign the value of the dropdown menu option to a variable
// // //     let dataset = dropdownMenu.property("value");
// // //     // Initialize an empty array for the country's data
// // //     let bardata = [];

// // //     if (dataset == 'us') {
// // //         data = us;
// // //     }
// // //     else if (dataset == 'uk') {
// // //         data = uk;
// // //     }
// // //     else if (dataset == 'canada') {
// // //         data = canada;
// // //     }
// // //     // Call function to update the chart
// // //     updatePlotly(data);
// // // }

// // //   // Update the restyled plot's values
// // //     function updatePlotly(newdata) {
// // //     Plotly.restyle("pie", "values", [newdata]);
// // // }


// // // //drop down menu

// // // //horizontal bar chart to display top 10 OTUs for text subject
