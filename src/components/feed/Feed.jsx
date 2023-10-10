import { faComment, faHeart, faListDots, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ fed }) => {
  return (
    <div className="feed">
      <div className="top-content">
        <Link to="/profile/id">
          <div className="user">
            <img src={fed.feedProfile} alt="" />

            <div>
              <h5>{fed.name}</h5>
              <small>1 Minute Ago</small>
            </div>
          </div>
        </Link>

        <span><FontAwesomeIcon icon={faListDots}/></span>
      </div>

      <div className="mid-content">
        <p>
            {fed.desc}
        </p>
        <img src={fed.feedImage} alt=""/>
      </div>

      <div className="bottom-content">
        <div className="action-item">
          <span><FontAwesomeIcon icon={faHeart}/>14 likes</span>
        </div>
        <div className="action-item">
          <span><FontAwesomeIcon icon={faComment}/>2 Comments</span>
        </div>
        <div className="action-item">
          <span><FontAwesomeIcon icon={faShare}/>6 share</span>
        </div>
      </div>
    </div>
  );
};

export default Feed;
