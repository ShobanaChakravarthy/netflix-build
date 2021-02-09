import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    const[show,handleShow]=useState(false)
    const history = useHistory("")

    const transitionNavbar=()=>{
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar)
        return()=>window.removeEventListener("scroll",transitionNavbar)
    }, [])


    return (
        <div className={`nav ${show && `nav__black`}`}>
            <div className="nav__content">
                <img 
                    className="nav__logo" 
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="Netflix Logo"
                    onClick={()=>history.push("/")}
                />
                <img 
                    className="nav__avatar" 
                    src ="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                    onClick={()=>history.push("/profile")}
                />
            </div>
        </div>
    )
}

export default Nav
