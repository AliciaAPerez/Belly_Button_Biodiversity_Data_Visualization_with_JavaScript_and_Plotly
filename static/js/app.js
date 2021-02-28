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
    // let demo = d3.select("#sample-metadata")
    //     .selectAll("ul")
    //     .data(metadata)
    //     .enter();
    // demo.append("ul").text(`id: ${metadata[0].id}`);
    // demo.append("ul").text(`ethnicity: ${metadata[0].ethnicity}`);
    // demo.append("ul").text(`gender: ${metadata[0].gender}`);
    // demo.append("ul").text(`age: ${metadata[0].age}`);
    // demo.append("ul").text(`location: ${metadata[0].location}`);
    // demo.append("ul").text(`bbtype: ${metadata[0].bbtype}`);
    // demo.append("ul").text(`wfreq: ${metadata[0].wfreq}`);

    //default plots
    //bar chart with  top 10 OTUs
    // let topten = samples[0]
    // console.log(topten)
    // let sorttopten = topten.sort(function(a, b) {
    //     return b.otu_ids - a.otu_ids;
    // });
    // let slicetopten = sorttopten.slice(0,10)
    // console.log("hi");
    // console.log(sorttopten);
    // console.log(slicetopten);
    // let trace1 = [{
    //     x: slicetopten.map(object => object.otu_labels),
    //     y: slicetopten.map(object => object.otu_ids)
    //     }];
    // let data1 = [trace1];
    // //let layout1 = {};
    // Plotly.newPlot("bar", data1);

    //bubble chart
    console.log(samples[0]);
    let trace2 = {
        x: samples[0].otu_ids,
        y: samples[0].sample_values,
        text: samples[0].otu_labels,
        mode: 'markers',
        marker: {
            color: samples[0].otu_ids,
            size: samples[0].sample_values
        }
        };
    let data2 = [trace2];
    let layout2 = {
        xaxis: {
            title: "OTU ID"
        },
        showlegend: false,
        height: 600,
        width:1000
    };
    Plotly.newPlot("bubble", data2, layout2);

    //turn on event listener
    //d3.selectAll("#selDataset").on("change", optionChanged);
    
    // function optionChanged(){
    //     let dropdownmenu = d3.select("#selDataset");
    //     let dataset = dropdownMenu.property("value");
    //     let newdata = [];
    //     let value = v


        
    


});