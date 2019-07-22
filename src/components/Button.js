import React from 'react';
import Button from '@material-ui/core/Button';



const MyButton = (props)=>{
    return(
        <Button classes={{root:'mdc-button'}} variant="outlined" color="secondary">Click me</Button>
    )
}
export default MyButton;