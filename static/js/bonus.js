d3.json("samples.json").then(function(data){ 
    console.log(data)
//gauge plot
    let trace3 = [{
        domain: {x:[0,1], y:[0,1]},
        value: data.metadata[0].wfreq,
        type: 'indicator',
        mode: 'gauge+number',
        delta: { reference: 400 },
        gauge: { axis: { range: [null, 9] }}
    }];
    let data3 = trace3;
    let layout3 = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot("gauge", data3, layout3);

    //update with subject id change
    
});