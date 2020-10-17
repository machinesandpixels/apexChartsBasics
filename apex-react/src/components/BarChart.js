import React from 'react';
import Chart from 'react-apexcharts';

function BarChart() {
    return (
        <div id="chart">
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height="450"
                width="100%"
            />
            <h1>ApexCharts with React</h1>
        </div>
    )
}

export default BarChart;
