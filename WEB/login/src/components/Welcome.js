import { useEffect, useState } from "react"
import { getRequest } from '../service/request';
import { GET_USER } from '../service/api-endpoints'
import { Button } from "@material-ui/core";

export default function Welcome({...props}){
    const [name, setName] =  useState('')

    useEffect(() => {
      getRequest(GET_USER + sessionStorage.getItem('userId'), getResult)
    },[])
    const getResult = (result) => {
      setName(result.name)
    }
    const doLogout = () => {
      localStorage.removeItem("authToken")
      props.history.push("/login");
    }
    return (
      <div style = {{textAlign:'center'}}>
          <h1>Welcome {name}</h1>
          <Button onClick = {doLogout}>Logout</Button>
      </div>
    )
}