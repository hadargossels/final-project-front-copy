import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export default class BarChart extends Component {

    render() {
        return (
            <div>

                <Bar
                    data= {{
                         labels: this.props.titleArray,
                         datasets: [{
                             label: 'כמות מכירות עבור מוצר',
                             data: this.props.quantity,
                             backgroundColor: [
                                 'rgba(255, 99, 132, 0.2)',
                                 'rgba(54, 162, 235, 0.2)',
                                 'rgba(255, 206, 86, 0.2)',
                                 'rgba(75, 192, 192, 0.2)',
                                 'rgba(153, 102, 255, 0.2)',
                                 'rgba(255, 159, 64, 0.2)',
                                 'rgba(161, 50, 205, 0.2)',
                                 'rgba(230, 148, 41, 0.2)',
                                 'rgba(255, 99, 132, 0.2)',
                                 'rgba(54, 162, 235, 0.2)',
                                 'rgba(255, 206, 86, 0.2)',
                                 'rgba(75, 192, 192, 0.2)',
                                 'rgba(153, 102, 255, 0.2)',
                                 'rgba(255, 159, 64, 0.2)',
                                 'rgba(161, 50, 205, 0.2)',
                                 'rgba(230, 148, 41, 0.2)',
                                 'rgba(41, 230, 230, 0.2)'
                             ],
                             borderColor: [
                                 'rgba(255, 99, 132, 1)',
                                 'rgba(54, 162, 235, 1)',
                                 'rgba(255, 206, 86, 1)',
                                 'rgba(75, 192, 192, 1)',
                                 'rgba(153, 102, 255, 1)',
                                 'rgba(255, 159, 64, 1)',
                                 'rgba(161, 50, 205, 1)',
                                 'rgba(230, 148, 41, 1)',
                                 'rgba(255, 99, 132, 1)',
                                 'rgba(54, 162, 235, 1)',
                                 'rgba(255, 206, 86, 1)',
                                 'rgba(75, 192, 192, 1)',
                                 'rgba(153, 102, 255, 1)',
                                 'rgba(255, 159, 64, 1)',
                                 'rgba(161, 50, 205, 1)',
                                 'rgba(230, 148, 41, 1)',
                                 'rgba(41, 230, 230, 1)'
                             ],
                             borderWidth: 1
                         }]
                    } }
                    width={100}
                    height={500}
                    options={{ maintainAspectRatio: false,
                        legend:{labels:{fontSize:30}},
                        scales:{yAxes:[{ticks:{stepSize:1,fontSize:20}}],
                                xAxes:[{ticks:{fontSize:20}}]}
                         }}/>
            </div>
        )
    }
}
