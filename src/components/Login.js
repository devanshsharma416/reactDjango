import React, {useState} from "react";


class APIService {
    
    static LoginUser(body) {
        return fetch('http://127.0.0.1:8000/user/login/', {
            'method': "POST",
            headers : {
                'Content-Type': 'application/json', 
            },
            body:JSON.stringify(body)

        }).then(resp => resp.json())
    }
}


export default function Login() {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const loginBtn = () => {
        APIService.LoginUser({email, password}).then(resp => console.log("myToken", resp.token))
        .catch(error => console.log(error))

        console.log(email)
        console.log(password)
    }

    return (
        <div className = "New">
        <div className = "container">
        <br/>
            <h1>Please Login</h1>
            <br/>
            <br/>
            <div className = "mb-3">
                <label htmlFor = "email" className = "form-label">Email</label>
                <input type = "email" className = "form-control" id = "email" placeholder = "Please Enter Your Email" value = {email} onChange = {e => setEmail(e.target.value)}></input>
            </div>
            
            <div className = "mb-3">
                <label htmlFor = "password" className = "form-label">Password</label>
                <input type = "password" className = "form-control" id = "password" placeholder = "Please Enter Your Password" value = {password} onChange = {e => setPassword(e.target.value)}></input>
            </div>

            <button onClick = {loginBtn} className = "btn btn-primary">Login</button> 

            <br/>
            <br/>
            
            <p>If You Don't Have an Account Please <a href = "http://localhost:3000/register">Register</a></p>

        </div>

        </div>
    )
}
