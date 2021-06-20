import React,{useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { postRequest } from '../service/request';
import { REGISTER_URL } from '../service/api-endpoints'
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
  },
  marginBottom: {
    marginBottom: '20px'
  }
});
const allFied = [
  {
    id:"firstName",
    label: 'First Name',
    type: 'text'
  },
  {
    id:"lastName",
    label: 'Last Name',
    type: 'text'
  },
  {
    id:"email",
    label: 'Email',
    type: 'email'
  },
  {
    id:"password",
    label: 'Password',
    type: 'password'
  }
]

export default function Register({...props}){
  const classes =  useStyles()
  const [state, setState] = useState({})

  const handleOnChange = (value,type) => {
    setState({
      ...state,
      [type]: value
    })
  } 

  const sendRegistrationRequest = () => {
    let data = {
      "name": (state.firstName ? state.firstName : "") + " " + (state.lastName ? state.lastName : ""),
      "email": state.email,
      "password": state.password
    }
    console.log(data)
    postRequest(REGISTER_URL, JSON.stringify(data), getResult)
  }

  const getResult = (result) => {
    if(result.auth){
      localStorage.setItem("authToken",result.token)
      props.history.push("/login");
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" className = {classes.root}>
          <div className = {classes.contaner}>
              <h2 style = {{textAlign:'center'}}>Register</h2>
              <div className = {classes.fieldContainer}>
                {allFied.map(el => (
                     <TextField
                        id={el.id}
                        label={el.label}
                        value = {state[el.id]}
                        type={el.type}
                        onChange = {(e) => handleOnChange(e.target.value,el.id)}
                        className = {classes.marginBottom}
                        fullWidth
                     />
                )) }
                <Button onClick = {sendRegistrationRequest} variant = "contained" color = "primary" style = {{marginTop:'20px',width:'100%'}} >Register</Button>
            </div>
           </div>
        </Typography>
      </Container>
  </React.Fragment>
  )
}