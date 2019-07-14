import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            errorEmailText:'',
            errorNameText:'',
            submitBtnDisabled:true
        };
    }
    handleChange=(e)=>{
        const field = e.target.name;
        this.setState({
            [e.target.name]:e.target.value
        }, ()=>{
            if(field=== 'name'){
                this.validateName();
            }
            if(field === 'email'){
                 this.validateEmail();
            }
        });   
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
       
    }
    
     validateName=()=>{
        const pattern=/^([a-zA-Z@]+[0-9]*)$/;
        let isValid =true;
         let errormessage="";
         
         if(!this.state.name.length){ 
            errormessage='Name is required field';  
             isValid=false;
         }
        //checking if the username is 8 characters long
         if(isValid && this.state.name.length<8){
              errormessage='Name must be atleast 8 characters long'; 
             isValid=false;
          }
            
         if(isValid && !this.state.name.match(pattern)){
            errormessage='Name must contain only alpha numeric characters and atleast one letter'; 
             isValid=false;
            }
        //checking if the name includes @
          if (isValid && !this.state.name.includes('@')){
             errormessage='Name must contain @'; 
             isValid=false;
          }
          this.setState({errorNameText:errormessage});
         if (isValid && !this.state.errorEmailText && this.state.email){
             this.setState({submitBtnDisabled:false})
         }
         else{
             this.setState({submitBtnDisabled:true})
         }
        }
         
    validateEmail=()=>{
        const emailPattern =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        let errormessage="";
        let isValid= true;
        if(!this.state.email.length){
             errormessage='Email address is required field'; 
            isValid=false;
        }
        else{
            if(isValid && !this.state.email.match(emailPattern)){
                 errormessage='Invalid email address';
                isValid= false;
            }
        }
         this.setState({errorEmailText:errormessage});
        if (isValid && !this.state.errorNameText && this.state.name){
             this.setState({submitBtnDisabled:false})
         }
         else{
             this.setState({submitBtnDisabled:true})
         }
    }
    
    render(){
        return(
        <form onSubmit={this.handleSubmit}   noValidate style={{marginLeft:'50px'}}>
            <TextField
            required
            inputProps={{minLength:6, maxLength:15}}
              style={{marginRight:'30px'}}
            id="username"
            name="name"
            label="Name:"
             error ={this.state.errorNameText.length === 0 ? false : true }
            helperText={this.state.errorNameText}
            placeholder="Enter your name"
            margin="normal"
            onBlur={this.validateName}
            onChange={this.handleChange}/>
            
            <TextField
            required
            id="email"
            name="email"
            type="email"
            style={{marginRight:'30px'}}
            label="Email:"
             error ={this.state.errorEmailText.length === 0 ? false : true }
            helperText={this.state.errorEmailText}
            placeholder="Enter email"
            margin="normal"
            onBlur={this.validateEmail}
            onChange={this.handleChange}/>
            <br/>
            <Button  type="submit" size="small" color="primary" disabled={this.state.submitBtnDisabled }>
              submit
             </Button>
        </form>
           
        )
    }
}
export default Form;