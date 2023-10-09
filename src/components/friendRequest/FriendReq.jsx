import React from "react";

import "./friend.css";

// fakeApi.........
import FirendReqData from "../../FakeApis/FirendReqData";
import { Link } from "react-router-dom";

const FriendReq = () => {
  return (
    <div className="Friend-Requests">
      <h4>Friend Requests</h4>
      {FirendReqData.map((firend) => (
        <div className="request">
          <Link to="/profile/id">
            <div className="info" key={firend.id}>
              <div className="user">
                <img src={firend.img} alt="" />
                <h5>{firend.name}</h5>
              </div>
              <div className="info-name">
                <h5>
                
                  <p>{firend.info}</p>
                </h5>
              </div>
            </div>
          </Link>

          <div className="action">
            <div className="btn btn-primary">Accept</div>
            <div className="btn btn-red">Delete</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendReq;
