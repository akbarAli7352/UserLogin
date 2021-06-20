import React,{useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { postRequest } from '../service/request';
import { LOGIN_URL } from '../service/api-endpoints'
const useStyles = makeStyles({
  root: {
    height: '100vh' ,
    padding:'80px'
  },
  contaner: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height:'100%'
  },
  fieldContainer: {
    border: '1px solid #cccc',
    padding:'40px 20px',
    borderRadius:'5px'
  }
});
export default function Login({...props}){
  const classes =  useStyles()
  const [state, setState] = useState({})

  const handleOnChange = (value,type) => {
    setState({
      ...state,
      [type]: value
    })
  } 

  const signIN = () => {
    let data = {
      "email": state.email,
      "password": state.password
    }
    console.log(data)
    postRequest(LOGIN_URL, JSON.stringify(data), getResult)
  }

  const getResult = (result) => {
    if(result.auth){
      sessionStorage.setItem('userId',result.userId);
      localStorage.setItem("authToken",result.token)
      props.history.push("/home");
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" className = {classes.root}>
          <div className = {classes.contaner}>
              <h2 style = {{textAlign:'center'}}>Login</h2>
              <div className = {classes.fieldContainer}>
                <TextField
                    autoFocus
                    id="name"
                    label="Email Address"
                    type="email"
                    onChange = {(e) => handleOnChange(e.target.value,"email")}
                    style = {{marginBottom:'40px'}}
                    fullWidth
                />
                <TextField
                    autoFocus
                    id="password"
                    label="Password"
                    type="password"
                    onChange = {(e) => handleOnChange(e.target.value,"password")}
                    fullWidth
                />
                <Button onClick = {signIN} variant = "contained" color = "primary" style = {{marginTop:'20px',width:'100%'}} >Login</Button>
            </div>
              <p>If you don't have account <Link to = "/register" style = {{float:'right'}}>Sign Up!</Link></p>
           </div>
        </Typography>
      </Container>
  </React.Fragment>
  )
}