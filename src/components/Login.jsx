import { Link } from "react-router-dom"
import "./Login.css"
import { useState } from "react"
import axios from "axios"


const Login = (props) => {

    const [formdata, setFormdata] = useState({
        email:'',
        password:''
    })

    // const loginsuccess = (e) => {
    //     console.log(formdata)
    // }
    
    const handleSubmit = async (e)=> {

        e.preventDefault()
        console.log(setFormdata);

       await axios.post('http://localhost:5000/api/v1/login', { data:formdata}).then((res)=> {
        console.log(res.data.status, 'response')
        
        if (res.data.status) {
            alert('this is auth user')
        } else {
            alert('this is not auth user')
        }
       }).catch((err)=> {
            console.log(err)
            alert('this is not auth user')
       })
    }

    return (
        <>
            <div className="div2">
                <h1>Quickchat</h1>
                <p>Welcome back</p>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" className="loginput" placeholder="Enter your email"  onChange={(e) => {setFormdata({...formdata, email:e.target.value})}}/><br />
                    <label htmlFor="pass">Password</label><br />
                    <input type="password" className="loginput" id="pass" placeholder="Enter your password"  onChange={(e) => {setFormdata({...formdata, password:e.target.value})}}/><br />
                    <button className="login" type="submit">Sign In</button>
                </form>
                
                
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>
        </>
    )
        

}

export default Login