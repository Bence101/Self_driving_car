let ctx1 = document.getElementById('chart1').getContext('2d');
let ctx2 = document.getElementById('chart2').getContext('2d');
let ctx3 = document.getElementById('chart3').getContext('2d');

let fitnessChart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [0],
        datasets: [
          {
            label: "Max fitness",
            // backgroundColor: 'rgba(100, 100, 100, 50)',
            borderColor: 'rgba(50, 50, 50, 50)',
            data: [0]
        }, 
          {
            label: "Avg fitness",
            // backgroundColor: 'rgba(0, 200, 20,50)',
            borderColor: 'rgba(0, 150, 15, 50)',
            data: [0]
        }
        ],
    },
    // Configuration options go here
    options: {scales: {
            yAxes: [{stacked: false}]
            }}
});

let finisherChart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [0],
        datasets: [
          {
            label: "Finisher rate",
            // backgroundColor: 'rgba(100, 100, 100, 50)',
            borderColor: 'rgba(50, 50, 50, 50)',
            data: [0]
        }
        ],
    },
    // Configuration options go here
    options: {scales: {
            yAxes: [{stacked: false}]
            }}
});


let avgSpeedChart = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [0],
        datasets: [
          {
            label: "Best car's avg speed",
            // backgroundColor: 'rgba(100, 100, 100, 50)',
            borderColor: 'rgba(50, 50, 50, 50)',
            data: [0]
        }
        ],
    },
    // Configuration options go here
    options: {scales: {
            yAxes: [{stacked: false}]
            }}
});


function addData(chart, label, data) {
    chart.data.labels.push(label);

    data.forEach((item, index)  => chart.data.datasets[index].data.push(item))
    chart.update();
}


