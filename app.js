// Chart Options
const options = {
    // chart: height, width, type, background, foreColor options
    chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        background: 'f4f4f4',
        foreColor: '#333'
    },
    // series: This is the data of our chart
    series: [{
        name: 'Population',
        data: [80, 70, 30]
    }],
    xaxis: {
        categories: ['NY', 'LA', 'MA']
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    // Colors bar
    fill: {
        colors: "rgb(16, 36, 93)"
    },
    // Removes numbers from inside of bar.
    dataLabels: {
        enabled: false
    },
    title: {
        text: "ApexCharts Basics",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: "25px"
        }
    }

};

// Init Chart
const chart = new ApexCharts(document.getElementById("chart"), options);

// Render Chart
chart.render();