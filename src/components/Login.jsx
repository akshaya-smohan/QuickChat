import { Link } from "react-router-dom"
import "./Login.css"
import { useState } from "react"


const Login = () => {

    const [formdata, setFormdata] = useState({
        email:'',
        password:''
    })

    const loginsuccess = (e) => {
        console.log(formdata)
    }

    return (
        <>
            <div className="div2">
                <h1>Quickchat</h1>
                <p>Welcome back</p>
                <form action="">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" className="loginput" placeholder="Enter your email"  onChange={(e) => {setFormdata({...formdata, email:e.target.value})}}/><br />
                    <label htmlFor="pass">Password</label><br />
                    <input type="password" className="loginput" id="pass" placeholder="Enter your password"  onChange={(e) => {setFormdata({...formdata, password:e.target.value})}}/><br />
                </form>
                <Link to="/main">
                    <button className="login" onClick={loginsuccess}>Sign In</button>
                </Link>
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>
        </>
    )
        

}

export default Login