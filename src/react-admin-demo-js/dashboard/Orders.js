import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [rows, setRows] = useState([])

  useEffect(() => {
    getInvoice()
},[])

async function getInvoice() {
    try {
        await axios.get(`${process.env.REACT_APP_URL}/invoice/`)
        .then((response)=>{
            
            setRows(response.data)})
    } catch (error) {
        console.error(error);
    }
    }
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Custumer Id</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Returned</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date.substring(0,10)}</TableCell>
              <TableCell>{row.customer_id}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.returned}</TableCell>
              <TableCell align="right">{row.total_ex_taxes}$</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}