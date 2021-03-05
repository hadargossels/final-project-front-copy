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

const MyNumberField = ({ record = {}, source }) => {
    const classes = useStyles();
    return (
        <span className={record[source] > 0 ? classes.textTrue : classes.textFalse}>
            {record[source] > 0 ? record[source] : "Out of stock"}
        </span>
    );
}

export default MyNumberField;