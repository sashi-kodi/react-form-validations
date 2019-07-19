import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as styles from '../my-components.module.scss';
console.log(styles);
console.log(styles['mdc-button']);
// const useStyles = makeStyles({
//     root: styles['mdc-button']
// }
//   );
  
const MyButton = (props)=>{
    //const classes = useStyles();
  
    return(
    <Button classes={{root:'my-components_mdc-button__36ZzM'}}>Hello World</Button>
    )
}
export default MyButton;