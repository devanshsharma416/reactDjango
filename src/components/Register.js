
import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import './Login.css'

class APIService {
    
    static RegisterUser(body) {
        return fetch('http://127.0.0.1:8000/user/register/', {
            'method': "POST",
            headers : {
                'Content-Type': 'application/json', 
            },
            body:JSON.stringify(body)

        }).then(resp => resp.json())
    }
}



export default function Register() {

    const [email, setEmail] = useState()
    const [first_name, setFirstName] = useState()
    const [last_name, setLastName] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    let history = useHistory()

    const Redirect = () => {
        history.push("/login")
    }

    const RegisterBtn = () => {
        APIService.RegisterUser({email, first_name, last_name, password, password2}).then(resp => console.log("myToken", resp.token))
        .catch(error => console.log(error))

        console.log(email)
        console.log(first_name)
        console.log(last_name)

        

    }
    return (
        <div>
            <div className = "New">
                <div className = "container">
                <br/>
                    <h1>Please Register</h1>
                    <br/>
                    <div className = "mb-3">
                        <label htmlFor = "email" className = "form-label">Email:-</label>
                        <input type = "email" className = "form-control" id = "email" placeholder = "Please Enter Your Email" value = {email} onChange = {e => setEmail(e.target.value)}></input>
                    </div>

                    <div className = "mb-3">
                        <label htmlFor = "first_name" className = "form-label">First Name:-</label>
                        <input type = "text" className = "form-control" id = "first_name" placeholder = "Please Enter Your First Name" value = {first_name} onChange = {e => setFirstName(e.target.value)}></input>
                    </div>

                    <div className = "mb-3">
                        <label htmlFor = "last_name" className = "form-label">Last Name:-</label>
                        <input type = "text" className = "form-control" id = "last_name" placeholder = "Please Enter Your Last Name" value = {last_name} onChange = {e => setLastName(e.target.value)}></input>
                    </div>
                    
                    <div className = "mb-3">
                        <label htmlFor = "password" className = "form-label">Password:</label>
                        <input type = "password" className = "form-control" id = "password" placeholder = "Please Enter Your Password" value = {password} onChange = {e => setPassword(e.target.value)}></input>
                    </div>

                    <div className = "mb-3">
                        <label htmlFor = "password2" className = "form-label">Confirm Password:-</label>
                        <input type = "password" className = "form-control" id = "password2" placeholder = "Please Confirm Your Password" value = {password2} onChange = {e => setPassword2(e.target.value)}></input>
                    </div>

                    {/* <button onClick = {RegisterBtn} className = "btn btn-primary">Register</button> */}
                    <button onClick = {() => {RegisterBtn(); Redirect();}} className = "btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    )
}
