import React from 'react'
import './rightbar.css'
import Message from '../message/Message'
import FriendReq from '../friendRequest/FriendReq'

const Rightbar = () => {
  return (
<div className="rightBar">
  <div className="rightbar-container">
    <Message/>
    <FriendReq/>
  </div>
</div>
  )
}

export default Rightbar