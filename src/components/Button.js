import React from 'react';
import Button from '@material-ui/core/Button';
import './Button.scss';

const MyButton = (props)=>{
    return(
    <Button classes={{root:'btn'}}>Hello World</Button>
    )
}
export default MyButton;