import { Link, Outlet } from "react-router-dom"

const Home = () =>{

    return (
        <div className="home">
            <h1>QuickChat</h1>
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