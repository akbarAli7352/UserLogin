import { Redirect } from 'react-router-dom';
import  Welcome  from "./Welcome"
export default function Home({...props}){
  return (
    <div>
      {localStorage.getItem('authToken') ? 
            (<Redirect to = "/home"/>) : 
            (<Redirect to = "/login"/>)
        }
    </div>
  
  )
}