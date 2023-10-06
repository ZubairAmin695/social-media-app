import React from 'react'
import "./darkmode.css"

// fontawesome.....
import {
    faBars,
    faBell,
    faEnvelope,
    faHome,
    faLightbulb,
    faSearch,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  

 
const DarkMood = () => {

    const DarkHandle =()=>{
        document.querySelector('body').classList.toggle('darkmood')
    }
  return (
<div className="dark-mood-icon">
    <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandle}/>
</div>
  )
}

export default DarkMood