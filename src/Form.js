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
        this.setState({
            [e.target.name]:e.target.value
        }, ()=>{
            this.checkValidity();
        });
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
       
    }
    checkValidity=()=>{
      this.validateName();
      this.validateEmail();
       if (this.state.errorEmailText || this.state.errorNameText){
           this.setState({submitBtnDisabled:true});
       }
        else{
              this.setState({submitBtnDisabled:false});
        }
    }
    validateName=()=>{
         const namePattern =/^[a-zA-Z0-9]{6,15}$/;
         if(!this.state.name.length){
             this.setState({errorNameText:'Name is required field'});
             
        }
        else{
            if(!this.state.name.match(namePattern)){
                 this.setState({errorNameText:'Invalid user name'}); 
            }
            else{
                this.setState({errorNameText:''});
               
            }
        }
        
    }
    validateEmail=()=>{
        const emailPattern =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(!this.state.email.length){
             this.setState({errorEmailText:'Email address is required field'}); 
        }
        else{
            if(!this.state.email.match(emailPattern)){
                 this.setState({errorEmailText:'Invalid email address'}); 
            }
            else{
                this.setState({errorEmailText:''});
                
            }
        }
        
       
    }
    
    render(){
        return(
           
        <form onSubmit={this.handleSubmit}   noValidate style={{marginLeft:'30px'}}>
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
            onBlur={this.checkValidity}
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
            onBlur={this.checkValidity}
            onChange={this.handleChange}/>
            <br/>
            <Button  type="submit" size="small" color="primary" disabled={this.state.submitBtnDisabled}>
              submit
             </Button>
        </form>
           
        )
    }
}
export default Form;