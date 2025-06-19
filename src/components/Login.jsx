import "./Login.css"


const Login = () => {

    return (
        <>
            <div className="div2">
                <h1>Quickchat</h1>
                <p>Welcome back</p>
                <form action="">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" placeholder="Enter your email" /><br />
                    <label htmlFor="pass">Password</label><br />
                    <input type="password" id="pass" placeholder="Enter your password" /><br />
                </form>
                <button>Sign In</button>
                <p>Don't have an account? <a href="">Sign up</a></p>
            </div>
        </>
    )
        

}

export default Login