import { Link } from "react-router-dom"
import "./Signup.css"
import { useState } from "react"

const Signup = () => {

    const [upData, setUpdata] = useState({
        username: '',
        email: '',
        password: ''
    })

    const successSignup =(e) => {
        console.log(upData)
    }

    return (
        <>
            <div className="div1">
                <h1 className="title">Quickchat</h1>
                <p>Create your account</p>
                <form action="">
                    <label htmlFor="user">Username</label><br />
                    <input type="text" className="loginput" placeholder="Enter your username" onChange={(e) => {setUpdata({...upData, username: e.target.value})}}/><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" className="loginput" id="email" placeholder="Enter your email" onChange={(e) => {setUpdata({...upData, email: e.target.value})}}/><br />
                    <label htmlFor="pass">Password</label><br />
                    <input type="password" className="loginput" id="pass" placeholder="Enter your password" onChange={(e) => {setUpdata({...upData, password: e.target.value})}}/><br />
                </form>
                <Link to="/main">
                    <button className="signup" onClick={successSignup}>Create Account</button>
                </Link>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </>
    )
}

export default Signup