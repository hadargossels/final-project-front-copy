

import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    activeGreen: {
        color: 'green',
    },
    notActiveRed: {
        color: 'red',
    },
});

const MyActiveField = ({ record = {}, source }) =>{
    const classes = useStyles();
    return (
        <div>
       {(record[source])?
           <span className={classes.activeGreen}>true</span>:
           <span className={classes.notActiveRed}>false</span>
        }</div>
        

     );
    }

export default MyActiveField;