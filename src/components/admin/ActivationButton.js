

import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {UserActivation} from './Users'

const useStyles = makeStyles({
    buttonStyle: {
        color: 'white',
        background: 'red',
    },
    
});

const ActivationButton = ({ record = {}, source }) =>{
    const classes = useStyles();

    return (
        <button className={classes.buttonStyle} onClick={()=>(record[source])?record[source]=false:record[source]=true}>active / ban</button>
     );
    }

export default ActivationButton;