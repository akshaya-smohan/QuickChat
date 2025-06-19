import { Link, Outlet } from "react-router-dom"

const Home = () =>{

    return (
        <div className="home">
            <h1 style={{padding: "10px"}}>QuickChat</h1>
            <p style={{padding: "10px"}}>Whether it’s a quick catch-up, a deep conversation, or anything in between,<br /> QuickChat is here for it.</p>
            <Link to="/login">
                <button className="log">Log In</button>
            </Link>
            <Link to="/signup">
                <button className="log">Sign Up</button>
            </Link>
            <Outlet />
        </div>
        
    )
}

export default Home