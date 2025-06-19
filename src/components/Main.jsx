


const Main = () => {
    return (
        <>
            <div className="main">
                <div className="sidebar">
                    <input type="text" className="search"  placeholder="Search Conversations..."/><hr />
                    <div className="chatlist"></div>
                    <hr />
                    <button className="newchat">+ New Chat</button>
                </div>
                <div className="chat">
                    <h2 style={{textAlign: "center", paddingTop: "40vh"}}>Welcome to QuickChat</h2>
                    <p>Select a conversation from the sidebar to start <br /> chatting with end-to-end encryption.</p>

                </div>
            </div>

        </>
    )
}

export default Main