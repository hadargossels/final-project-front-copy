import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider(val) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 100000]);
  const handleChange = (event, newValue) => {
      
      setValue(newValue);
      console.log( newValue[0], newValue[1])
      val.val.setPriceFilter(newValue);
        
    
  };


  return (

    <div className={classes.root}>
      <Typography className= "text-center" id="range-slider" gutterBottom  style={{fontSize:"25px", color: " var(--lightBlue)"}}>
        Price
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>

  );
}



