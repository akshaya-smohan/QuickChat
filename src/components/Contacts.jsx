import { useEffect } from "react"


const ContactTile = ({ name, onUserClick, id }) => {


    return (
        <div className="contact" onClick={()=> onUserClick(id)}>
            <img src={"/images/profile.png"} alt="" style={{ maxWidth: 35, height: 35}} />
            <div  style={{width:270, marginLeft: 10}}>
                <h3 style={{color:"white", margin:0, padding:0}}>{name}</h3>
                <p style={{textAlign: "start"}}>message</p>
                <p style={{textAlign: "end"}}>time</p>
            </div>
        </div>
    )
}


export default ContactTile