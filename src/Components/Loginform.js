import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { MDBCard } from 'mdbreact';

import './form.css'


export default class Loginform extends Component {
    constructor(props)
    {
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
           name:"",
           password:"" 
        }

    }
    login(e)
{
    let comparename="Rahul"
    let comparepass="7798"
    
    if(this.state.name===comparename && this.state.password===comparepass)
    {
         this.props.history.push('/AddDel');
    }
    else
    {
        alert("Not a valid user");
        window.location.reload(true);
        
    }
    

}
handleChange(e)
{
    this.setState({
    [e.target.name]:e.target.value      
   
    },
    
    )
}
    render() {
        return (
            <MDBCard className="center2">
                <Avatar className="avatar">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                   Login
                </Typography>
                <form noValidate onSubmit={this.login}>
                    <TextField
                        variant="outlined"
                           margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Name"
                        name="name"
                        autoComplete="off"
                        autoFocus
                        
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="off"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                     >
                        Sign In
                    </Button>
                    <br></br>
                    <br></br>    
          </form>
          </MDBCard>
        

        )
    }
}
