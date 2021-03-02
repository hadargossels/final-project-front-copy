import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textTrue: {
        color: 'green',
    },
    textFalse: {
        color: 'red',
    }
});

const MyTextField = ({ record = {}, source }) => {
    const classes = useStyles();
    return (
        <span className={record[source] ? classes.textTrue : classes.textFalse}>
            {record[source] ? "Active" : "Not Active"}
        </span>
    );
}

export default MyTextField;