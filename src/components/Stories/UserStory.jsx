import React from 'react'
import "./story.css"



import CurrenUserData from "../../FakeApis/CurrentUserData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
const UserStory = () => {
  return (
    <div className="story userStory">
        <div className="user">
            <img src={CurrenUserData.map(user=>(user.ProfieImage))} alt=""/>
        </div>
        <img src={CurrenUserData.map(user=>(user.CoverPhoto))} alt=""/>
      <label htmlFor='storyFiles'>
        <FontAwesomeIcon icon={faAdd}/>
        <input type='file' id="storyFiles"/>
      </label>
      <h5>Add Story</h5>
    </div>
  )
}

export default UserStory