//import data from json
d3.json("samples.json").then(function(data){ 
    console.log(data)
    let names = data.names;
    let metadata = data.metadata;
    let samples = data.samples;
    console.log(names);
    console.log(metadata);
    console.log(samples);
});

//drop down menu

//horizontal bar chart to display top 10 OTUs for text subject
