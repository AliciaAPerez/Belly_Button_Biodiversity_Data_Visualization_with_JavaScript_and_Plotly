//import data from json file
//let name_data = names
// let metadata_data = metadata
// let sample_data = samples

// console.log(name_data)
// console.log(metadata_data)
// console.log(sample_data)

// d3.json("../samples.json").then(function(data) {
//     console.log(data);
// })

let data = d3.JSON("../samples.json").then(function(data) {
    console.log(data);    
    let names = data.names;
    let metadata = data.metadata;
    let samples = data.samples;
    console.log(names);
    console.log(metadata);
    console.log(samples);
}) 

console.log(data);
console.log(names);
console.log(metadata);
console.log(samples);

    
