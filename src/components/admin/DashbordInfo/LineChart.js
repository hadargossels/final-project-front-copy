
import { time } from 'faker';
import React, { Component } from 'react'
import { Line} from 'react-chartjs-2';


export default class LineChart extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                
                <Line
                     data= {{
                         labels: this.props.dateArry,
                         datasets: [{
                             label: 'מחירות ליום',
                             data: this.props.countOrderDay,
                             backgroundColor: 'rgba(255, 99, 132, 0.2)',
                             borderColor: 'rgba(255, 99, 132, 1)',
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
