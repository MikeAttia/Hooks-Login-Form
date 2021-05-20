import React, { useState } from 'react'
import Success from './Success'
import Fail from './Fail'


function Login() {
    
    const user = "MichaelAttia"
    const password = "Pass9393"

  
    const [username, setUserName] = useState("")
    const [pass, setPassword] = useState("")

    
    const [Login, setLogin] = useState("")



    function handleLogin(eve) {
        
        eve.preventDefault()
        
        if (username === user && password === pass) {
            setLogin(<Success user={user} />)
        } else {
            setLogin(<Fail />)
        }
    }
    
    const handle1 = (event) => setUserName(event.target.value)
    const handle2 = (event) => setPassword(event.target.value)

    return (

        <div >

            <form onSubmit={handleLogin}>
                <div>
                    <label><input id="username" type='text' placeholder="User Name" onChange={handle1}></input></label>
                </div>
                <label><input id="password" type='passowrd' placeholder="Password" onChange={handle2}></input></label>
                <div>
                    <button>Log In</button>
                </div>
                <div>{Login}</div>
            </form>
        </div>
    )
}
export default Login;
