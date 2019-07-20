import React from 'react';
import Button from '@material-ui/core/Button';

import '../my-components.scss';

const MyButton = (props)=>{
    return(
        <Button classes={{root:'mdc-button'}}>Hello Material UI</Button>
    )
}
export default MyButton;