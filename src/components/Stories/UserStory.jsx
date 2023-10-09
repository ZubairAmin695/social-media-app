import React from 'react'
import "./story.css"



import CurrenUserData from "../../FakeApis/CurrentUserData"
const UserStory = () => {
  return (
    <div className="story">
        <div className="user">
            <img src={CurrenUserData.ProfileImage} alt=""/>
        </div>
        <img src={CurrenUserData.ProfileImage} alt=""/>
      <h5>
      
      </h5>
    </div>
  )
}

export default UserStory