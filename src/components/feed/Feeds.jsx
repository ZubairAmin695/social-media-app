import React from "react";
import "./feeds.css";

import HomeFeed from "../../FakeApis/HomeFeedData";
import Feed from "./Feed";

const Feeds = () => {
  return (
    <div className="feeds">
      {HomeFeed.map((fed) => (
        <Feed fed={fed} key={fed.key} />
      ))}
    </div>
  );
};

export default Feeds;
