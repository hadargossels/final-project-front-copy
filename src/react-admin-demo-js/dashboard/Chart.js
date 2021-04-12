import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import axios from 'axios';

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

export default function Chart() {
  const theme = useTheme();
  const [data, setData] = useState([])

  useEffect(() => {
    getInvoice()
},[])

async function getInvoice() {
    try {
        await axios.get(`${process.env.REACT_APP_URL}/invoice/`)
        .then((response)=>{
            let data = []
            response.data.forEach(element => {
                let time = element.date.substring(0,10)
                let amount = element.total_ex_taxes
                let dataObject = {time,amount}
                    data.push(dataObject)
                   
            });
            setData(data)})
    } catch (error) {
        console.error(error);
    }
    }

  return (
    <React.Fragment>
      <Title>This Year</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}