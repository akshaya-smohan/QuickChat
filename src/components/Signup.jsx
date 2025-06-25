import { Link, useNavigate } from "react-router-dom"
import "./Signup.css"
import { useState } from "react"
import axios from "axios"

const Signup = () => {

    const [upData, setUpdata] = useState({
        name: '',
        email: '',
        password: ''
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault()
        console.log(setUpdata)

        await axios.post('http://localhost:5000/signup', {...upData}).then((res)=> {
            console.log(res.data, 'res')
            window.localStorage.setItem('access_token', res.data.accessToken)
            navigate('/login')
        }).catch((err) => {
            console.log(err)
        })
    }
 
    return (
        <>
            <div className="div1">
                <h1 className="title">Quickchat</h1>
                <p>Create your account</p>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="user">Username</label><br />
                    <input type="text" className="loginput" placeholder="Enter your username" onChange={(e) => {setUpdata({...upData, name: e.target.value})}}/><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" className="loginput" id="email" placeholder="Enter your email" onChange={(e) => {setUpdata({...upData, email: e.target.value})}}/><br />
                    <label htmlFor="pass">Password</label><br />
                    <input type="password" className="loginput" id="pass" placeholder="Enter your password" onChange={(e) => {setUpdata({...upData, password: e.target.value})}}/><br />
                    <button className="signup" type="submit">Create Account</button>
                </form>
                    
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </>
    )
}

export default Signup