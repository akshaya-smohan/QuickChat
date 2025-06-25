import axios from "axios"
import Contacts from "./Contacts"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import WelcomeBanner from "./WelcomeBanner"
import ChatList from "./ChatList"


const Main = () => {
    const navigator= useNavigate()

    const onHandleLogout = async (e) =>{

       e.preventDefault()

       window.localStorage.setItem('access_token', '')
       navigator('/login')
    }

    const [userList, setUserList] = useState([]) 
    const [activeChat, setActiveChat] = useState(null)
    const [upMessage, setUpmessage] = useState({
        sender: '',
        receiver: '',
        message: ''
    })


    const getUserList = async(token) => {
        await axios.get('http://localhost:5000/main/contacts', {
        headers: {
            Authorization: "Bearer " + token
        }
        }).then(res=> {
                    console.log(res.data, 'response')
                    setUserList(res.data.data)
                }).catch(err=> {
                    console.log('error fetching data')
                })
        }

    useEffect(()=> {
        const token = window.localStorage.getItem('access_token')
        if (!token) {
            navigator('/login')
        } else {
            getUserList(token)
        }
    }, [navigator])

    const onUserClick = (id) => {

        console.log(id)
        setActiveChat(id)
    }

    const onSend = async (e) => {

        e.preventDefault()

        await axios.post('http://localhost:5000/main/message', {...upMessage}).then((res) => {
            console.log(res.data,'res')
        }).catch((err) => {
            console.log(err)
        })
    }



    return (
        <>
            <div className="main">
                <div className="sidebar">
                    <div style={{width:"310px",display: "flex" , justifyContent: "space-between", marginTop: "10px"}}>
                        <img src={"/images/profile.png"} alt=""  style={{width: 35, height: 35}}/>
                        <button onClick={onHandleLogout} className="logout">Log out</button>
                    </div>
                    <input type="text" className="search"  placeholder="Search Conversations..."/><hr />
                    <div className="chatlist">
                       {
                    userList.map(user=>  <Contacts name={user.Name} onUserClick={onUserClick} id={user._id} />)
                       }
                    </div>
                    <hr />
                    <button className="newchat">+ New Chat</button>
                </div>
                <div className="window">
                   {
                    activeChat ?  <ChatList/>  :  <WelcomeBanner/> 
                   }
                    <div style={{display: "flex",position: "absolute", bottom:0, padding:5 }}>
                        <form action="" onSubmit={onSend}>
                            <input type="text" className="sendmessage" onChange={(e) => {setUpmessage({...upMessage, message: e.target.value})}} />
                            <button className="sendbutton" type="submit">Send</button>
                        </form>
                    </div>    
                </div>
            </div>

        </>
    )
}

export default Main