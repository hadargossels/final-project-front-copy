import React, {useState, useEffect} from 'react'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});



export default function Deposits() {
const [profit, setProfit] = useState()
const today = (new Date ()).toDateString()

useEffect(() => {
    getInvoice()
},[])

async function getInvoice() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/invoice/`)
        .then((response)=>{
            let total = 0;
            response.data.forEach(element => {
                if (element.status !== "canceled") {
                    total = total+(parseInt(element.total_ex_taxes))
                    setProfit(total)
                   
                }
            });
        })
    } catch (error) {
        console.error(error);
    }
    }

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        ${profit}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {today}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}