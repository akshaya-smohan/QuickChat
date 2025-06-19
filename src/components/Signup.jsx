import "./Signup.css"

const Signup = () => {
    return (
        <>
            <div className="div1">
                <h1 className="title">Quickchat</h1>
                <p>Create your account</p>
                <form action="">
                    <label htmlFor="user">Username</label><br />
                    <input type="text" id="user" placeholder="Enter your username" /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" placeholder="Enter your email" /><br />
                    <label htmlFor="pass">Password</label><br />
                    <input type="password" id="pass" placeholder="Enter your password" /><br />
                </form>
                <button>Create Account</button>
                <p>Already have an account? <a href="/">Sign in</a></p>
            </div>
        </>
    )
}

export default Signup